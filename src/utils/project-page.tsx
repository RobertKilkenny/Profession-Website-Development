import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Separator } from "@/components/ui/separator";
import { Project, getProjectList } from "@/components/project-list";
import NotFound from "./not-found";

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
    }
  | { status: Status.Error };

const ProjectDetails: React.FC = () => {
  const { id } = useParams<ProjectDetailsParams>();
  const [state, setStatus] = useState<State>({ status: Status.Loading });

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

        setStatus({
          status: Status.Loaded,
          project: projectData,
          content: content,
          ShouldCycleImages: projectData.cycling_images.length != 0,
        });
      }
    };
    fetchData().catch(() => {
      setStatus({ status: Status.Error });
    });
  }, []);

  switch (state.status) {
    case Status.Loaded:
      return (
        <div className="page-content-holder">
          <h1>{state.project.name}</h1>
          <a className="main-content-text">{state.project.description}</a>
          <Separator />
          {state.ShouldCycleImages && (
            <img
              width={250}
              src={"/data/"
                .concat(state.project.extension)
                .concat(
                  state.project.cycling_images[
                    Math.floor(
                      Math.random() * state.project.cycling_images.length
                    )
                  ]
                )}
            ></img>
          )}
          <div className="main-content-holder">
            <ReactMarkdown>{state.content}</ReactMarkdown>
          </div>
        </div>
      );

    case Status.Loading:
      return <div className="main-content-text">Loading...</div>;

    default:
      return <NotFound />;
  }
};

export default ProjectDetails;
