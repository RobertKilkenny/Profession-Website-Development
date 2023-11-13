import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./project-list.css";

interface Project {
  id: string;
  name: string;
  description: string;
  folder_name: string;
  cover_image: string;
  tags: string[];
  ongoing: boolean;
}

const projectList = () => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProject();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  async function getProject(): Promise<Project[]> {
    const result = await fetch("http://localhost:3000/projects");
    return await result.json();
  }

  const list = (
    <div className="project-object-holder">
      {loading ? (
        <></>
      ) : (
        data.map((project) => (
          <Card key={project.id}>
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
            <CardFooter>{project.ongoing && <p>is ongoing</p>}</CardFooter>
          </Card>
        ))
      )}
    </div>
  );
  return (
    <div className="page-content-holder">
      {/*First className comes from index.css*/}
      <h1>Here are the Projects I have done!</h1>
      {list}
    </div>
  );
};
export default projectList;
