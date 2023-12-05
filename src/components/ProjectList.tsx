import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import LoadingProjectList from "@/utils/loading-pages/LoadingProjectList";

export interface Project {
  id: number;
  name: "";
  description: "";
  folder_name: "";
  cover_image: "";
  cycling_images: string[][];
  extension: "";
  tags: string[];
  ongoing: true;
}

const isDevelopment = process.env.NODE_ENV === "development";

export async function getProjectList(): Promise<Project[]> {
  const response = await fetch("/data/projects.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  // For testing loading page feature numOfSeconds * 1000
  // await new Promise((resolve) => setTimeout(resolve, 1000 * 1000));

  const json = await response.json();
  let projects: Project[] = json["projects"];
  if (!isDevelopment) {
    projects = projects.filter((project) => {
      return project.id > 0;
    });
  }
  return projects;
}

const ProjectList = () => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProjectList();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const title = loading ? "Loading..." : "Here are the Projects I have done!";

  const list = (
    <>
      {loading ? (
        <LoadingProjectList />
      ) : (
        <div className="object-container-grid">
          {data.map((project) => (
            <Card key={project.id} className="grid-cell">
              <CardHeader>
                <div>
                  <CardTitle>{project.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
                <img src={project.cover_image} alt="" />
              </CardContent>
              <CardFooter>
                {/*From index.css*/}
                <div className="object-container-horizon">
                  <Link
                    to={"/project/".concat(project.extension)}
                    className="flex justify-center"
                  >
                    <Button size={"lg"}>View Project</Button>
                  </Link>
                  {project.ongoing && (
                    <Badge variant={"secondary"} className="justify-center">
                      <h6 className="secondary-text">ongoing</h6>
                    </Badge>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </>
  );
  return (
    <div className="page-content-holder">
      {/*ClassName comes from index.css*/}
      <h1>{title}</h1>
      <Separator />
      {list}
    </div>
  );
};
export default ProjectList;
