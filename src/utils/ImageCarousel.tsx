import React, { useState, useEffect } from 'react';
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cycleImages } from './Custom functions/image-cycling';

const TASK_TIMEOUT = 5000;

interface ImageCarouselProps {
  rootDir: string;
  imagesToCycle: string[][];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ rootDir, imagesToCycle }) => {
  const [cycleIndex, setCycleIndex] = useState<number>(0);
  const [isCyclingManually, setIsCyclingManually] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCyclingManually(false);
    }, TASK_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, [isCyclingManually]);

  const handleUserCycle = (shouldGoLeft: boolean) => {
    setIsCyclingManually(true);
    const newIndex = shouldGoLeft ? (cycleIndex === 0 ? imagesToCycle.length : cycleIndex - 1) : (cycleIndex === imagesToCycle.length - 1 ? 0 : cycleIndex + 1);
    setCycleIndex(newIndex);
  };

  useEffect(() => {
    if (cycleIndex < 1) {
      setCycleIndex(1);
      cycleImages(imagesToCycle.length, () => isCyclingManually, setCycleIndex, cycleIndex);
    }
  }, [cycleIndex, imagesToCycle, isCyclingManually]);

  if (!imagesToCycle || imagesToCycle.length < 1) return null;

  return (
    <Card className="flex flex-col w-1/3 min-w-[350px]">
      <CardContent className="flex flex-row items-center">
        {imagesToCycle.length > 1 && (
          <Button onClick={() => handleUserCycle(true)}>
            <ArrowBigLeftDash className="w-10 h-10" />
          </Button>
        )}
        <img
          className="project-card-image"
          src={imagesToCycle[cycleIndex] ? `/data/${rootDir}/${imagesToCycle[cycleIndex][0]}` : ''}
          alt="Project Image Carousel"
        />
        {imagesToCycle.length > 1 && (
          <Button onClick={() => handleUserCycle(false)}>
            <ArrowBigRightDash className="w-10 h-10" />
          </Button>
        )}
      </CardContent>
      <CardFooter>
        <p className="main-content-text">{imagesToCycle[cycleIndex] ? imagesToCycle[cycleIndex][1] : ''}</p>
      </CardFooter>
    </Card>
  );
};

export default ImageCarousel;
