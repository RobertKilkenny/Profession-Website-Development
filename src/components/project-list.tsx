import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {} from "@/components/ui/card";
import "./project-list.css";
import { Button } from "./ui/button";

export interface Project {
  id: string;
  name: string;
  description: string;
  folder_name: string;
  cover_image: string;
  extension: string;
  tags: string[];
  ongoing: boolean;
}

export async function getProjectList(): Promise<Project[]> {
  const result = await fetch("/data/projects.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const json = await result.json();
  return json["projects"];
}

const projectList = () => {
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

  const list = (
    <>
      {loading ? (
        /*ClassName comes from index.css*/
        <a className="main-content-text">Loading...</a>
      ) : (
        <div className="project-object-holder">
          {data.map((project) => (
            <Card key={project.id} className="project-cell">
              <CardHeader>
                <div>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription></CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
                <img src={project.cover_image} alt="" />
              </CardContent>
              <CardFooter>
                {/*From index.css*/}
                <div className="object-container-horizon">
                  <Button>
                    <Link to={"/project/".concat(project.extension)}>
                      View Project
                    </Link>
                  </Button>
                  {project.ongoing && (
                    <a className="main-content-text">is ongoing</a>
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
      <h1>Here are the Projects I have done!</h1>
      {list}
    </div>
  );
};
export default projectList;
