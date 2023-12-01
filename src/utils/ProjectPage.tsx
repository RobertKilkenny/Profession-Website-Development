import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Separator } from "@/components/ui/separator";
import { Project, getProjectList } from "@/components/ProjectList";
import NotFound from "./NotFound";
import DefaultPageSkeleton from "./loading-pages/DefaultPageSkeleton";
import { Card, CardContent } from "@/components/ui/card";

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
  const [cycleIndex, setCycleIndex] = useState(0);

  const wait = (n: number) => new Promise((resolve) => setTimeout(resolve, n));

  const cycleImages = () => {
    if (state.status != Status.Loaded || !state.ShouldCycleImages) return;
    if (cycleIndex >= state.project.cycling_images.length - 1) setCycleIndex(0);
    else setCycleIndex(cycleIndex + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjectList();
      const projectData = projects.find((item) => item.extension === id);

      if (projectData) {
        const fileLocation = "/data/"
          .concat(projectData.folder_name)
          .concat("/content.md");

        const response = await fetch(fileLocation);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const content = await response.text();
        setState({
          status: Status.Loaded,
          project: projectData,
          content: content,
          ShouldCycleImages: projectData.cycling_images.length != 0,
          cycleIndex: cycleIndex,
        });
      }
      await wait(1000 * 10);
      cycleImages();
    };
    fetchData().catch((error) => {
      setState({ status: Status.Error, errorCode: error });
    });
  });

  switch (state.status) {
    case Status.Loaded:
      return (
        <div className="page-content-holder">
          <h1>{state.project.name}</h1>
          <h2>{state.project.description}</h2>
          <Separator className="mb-5" />
          <div className="main-content-holder">
            {state.ShouldCycleImages && (
              <Card>
                <CardContent>
                  <img
                    className="project-card-image"
                    src={"/data/"
                      .concat(state.project.extension)
                      .concat(
                        state.project.cycling_images[state.cycleIndex][0]
                      )}
                    alt="Project Image Carousel"
                  />
                  <p className="main-content-text">
                    {state.project.cycling_images[state.cycleIndex][1]}
                  </p>
                </CardContent>
              </Card>
            )}
            <ReactMarkdown
              components={{
                h1: "h2",
                h2: "h3",
              }}
            >
              {state.content}
            </ReactMarkdown>
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
