import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Separator } from "@/components/ui/separator";
import { Project, getProjectList } from "@/components/ProjectList";
import NotFound from "./NotFound";
import DefaultPageSkeleton from "./loading-pages/DefaultPageSkeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type ProjectDetailsParams = {
  id: string;
};

enum Status {
  Loading = "loading",
  Loaded = "loaded",
  Error = "error",
}

type State =
  | { status: Status.Loading }
  | {
      status: Status.Loaded;
      project: Project;
      content: string;
      ShouldCycleImages: boolean;
      cycleIndex: number;
    }
  | { status: Status.Error; errorCode: string };

const ProjectDetails: React.FC = () => {
  const { id } = useParams<ProjectDetailsParams>();
  const [state, setState] = useState<State>({ status: Status.Loading });

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjectList();
      const projectData = projects.find((item) => item.extension === id);

      if (projectData) {
        const fileLocation = "/data/"
          .concat(projectData.folder_name)
          .concat("/content.md");

        const response = await fetch(fileLocation);
        console.log(fileLocation);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const content = await response.text();
        console.log(projectData);
        setState({
          status: Status.Loaded,
          project: projectData,
          content: content,
          ShouldCycleImages: projectData.cycling_images.length != 0,
          cycleIndex: Math.floor(
            Math.random() * projectData.cycling_images.length
          ),
        });
      }
    };
    fetchData().catch((error) => {
      setState({ status: Status.Error, errorCode: error });
    });
  }, []);

  switch (state.status) {
    case Status.Loaded:
      return (
        <div className="page-content-holder">
          <h1>{state.project.name}</h1>
          <a className="main-content-text">{state.project.description}</a>
          <Separator className="mb-5" />
          {state.ShouldCycleImages && (
            <Card>
              <CardContent>
                <img
                  width={250}
                  src={"/data/"
                    .concat(state.project.extension)
                    .concat(state.project.cycling_images[state.cycleIndex][0])}
                ></img>
              </CardContent>
              <CardFooter className="main-content-text">
                {state.project.cycling_images[state.cycleIndex][1]}
              </CardFooter>
            </Card>
          )}
          <div className="main-content-holder">
            <ReactMarkdown>{state.content}</ReactMarkdown>
          </div>
        </div>
      );

    case Status.Loading:
      return <DefaultPageSkeleton />;

    default:
      console.log(state.errorCode);
      return <NotFound />;
  }
};

export default ProjectDetails;
