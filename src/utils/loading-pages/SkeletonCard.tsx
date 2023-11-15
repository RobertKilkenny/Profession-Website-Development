import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import "./skeleton.css";

export default function SkeletonCard() {
  return (
    <Card className="project-cell">
      <CardHeader>
        <Skeleton className="fake-header" />
      </CardHeader>
      <CardContent>
        <Skeleton className="fake-text-full" />
        <Skeleton className="fake-text-full" />
        <Skeleton className="fake-text-half" />
      </CardContent>
      <CardFooter>
        <Skeleton className="fake-button" />
      </CardFooter>
    </Card>
  );
}
