import React, { useState } from 'react';
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ImageCarouselProps {
    rootDir: string;
    imagesToCycle: string[][];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ rootDir, imagesToCycle}) => {
  const [cycleIndex, setCycleIndex] = useState<number>(0);

  const handleUserCycle = (shouldGoLeft: boolean) => {
    const newIndex = shouldGoLeft ? (cycleIndex === 0 ? imagesToCycle.length - 1 : cycleIndex - 1) : (cycleIndex === imagesToCycle.length - 1 ? 0 : cycleIndex + 1);
    setCycleIndex(newIndex);
  };

  if (!imagesToCycle || imagesToCycle.length < 1) return null;

  return (
    <div className={`flex flex-col align-middle w-1/4 min-w-[300px] max-h-[25vm]`}>
      <Card className="flex flex-col items-center aspect-[2] p-5 max-h-[20vm]">
        <CardContent className="flex flex-row justify-center">
          <img
            className="project-card-image max-w-5/6 max-h-5/6"
            src={imagesToCycle[cycleIndex] ? `/data/${rootDir}/${imagesToCycle[cycleIndex][0]}` : ''}
            alt="Project Image Carousel"
          />
        </CardContent>
        <CardFooter className='flex flex-col p-0 max-h-1/6'>
          <p className="project-card-text">{imagesToCycle[cycleIndex] ? imagesToCycle[cycleIndex][1] : ''}</p>
          <p className="project-card-text">{`Image ${cycleIndex + 1} of ${imagesToCycle.length}`}</p>
        </CardFooter>
      </Card>

      {imagesToCycle.length > 1 && (
        <div className='flex flex-row w-[100%] p-5 justify-between self-end'>
          <Button className='flex m-1 w-1/4 aspect-[4/3]'
            onClick={() => handleUserCycle(true)}>
            <ArrowBigLeftDash />
          </Button>
          <Button className='flex m-1 w-1/4 aspect-[4/3]'
            onClick={() => handleUserCycle(false)}>
            <ArrowBigRightDash />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
