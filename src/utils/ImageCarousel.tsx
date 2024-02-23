import { useState } from "react";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cycleImages } from "./Custom functions/image-cycling";

interface ImageCarouselProps {
  rootDir: string;
  imagesToCycle: string[][];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ rootDir, imagesToCycle }) => {
  const [cycleIndex, setCycleIndex] = useState<number>(0);
  if (!imagesToCycle || imagesToCycle.length < 1)
    return null

  if (cycleIndex < 1) {
    setCycleIndex(1);
    cycleImages(imagesToCycle.length, setCycleIndex, cycleIndex);
  }

  return (    
  <Card className="flex flex-col w-1/3 min-w-[350px]">
    <CardContent className="flex flex-row items-center">
      {imagesToCycle.length > 1 && <ArrowBigLeftDash className="w-10 h-10"/>}
      <img
        className="project-card-image"
        src={"/data/"
          .concat(rootDir)
          .concat(
            "/",
            imagesToCycle[cycleIndex][0]
          )}
        alt="Project Image Carousel"
      />
      {imagesToCycle.length > 1 && <ArrowBigRightDash className="w-10 h-10"/>}
    </CardContent>
  <CardFooter>
    <p className="main-content-text">
      {imagesToCycle[cycleIndex][1]}
    </p>
  </CardFooter>
</Card>)
}

export default ImageCarousel;