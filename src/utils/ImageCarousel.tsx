import { useState } from "react";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cycleImages } from "./Custom functions/image-cycling";
import {Project} from "./Custom functions/project-custom-types"

const ImageCarousel = (project: Project) => {
  if (project == null || !project.cycling_images.length || project.cycling_images.length < 1)
    return null
  const [cycleIndex, setCycleIndex] = useState<number>(0);
  console.log(project)

  if (cycleIndex < 1) {
    setCycleIndex(1);
    cycleImages(project.cycling_images.length, setCycleIndex, cycleIndex);
  };

  return (    
  <Card className="w-1/3 min-w-[350px]">
    <CardContent className="flex flex-row items-center">
      {project.cycling_images.length > 1 && <ArrowBigLeftDash width={50}/>}
      <img
        className="project-card-image"
        src={"/data/"
          .concat(project.folder_name)
          .concat(
            "/",
            project.cycling_images[cycleIndex][0]
          )}
        alt="Project Image Carousel"
      />
      {project.cycling_images.length > 1 && <ArrowBigRightDash width={50}/>}
    </CardContent>
  <CardFooter>
    <p className="main-content-text">
      {project.cycling_images[cycleIndex][1]}
    </p>
  </CardFooter>
</Card>)
}

export default ImageCarousel;