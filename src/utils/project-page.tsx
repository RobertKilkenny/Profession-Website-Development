import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Project, getProjectList } from "@/components/project-list";
import NotFound from "./not-found";
import ReactMarkdown from "react-markdown";

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
  | { status: Status.Loaded; project: Project; content: string }
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
        <div>
          <h1>{state.project.name}</h1>
          <ReactMarkdown>{state.content}</ReactMarkdown>
        </div>
      );

    case Status.Loading:
      return <a className="main-content-text">Loading...</a>;

    default:
      return <NotFound />;
  }
};

export default ProjectDetails;
