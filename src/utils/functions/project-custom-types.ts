export type ProjectDetailsParams = {
    id: string;
  };

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

  export async function getProjectList(): Promise<Project[]> {
    const isDevelopment = process.env.NODE_ENV === "development";
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
        return project.id > -1;
      });
    }
    return projects;
  }

  export enum Status {
    Loading = "loading",
    Loaded = "loaded",
    Error = "error",
  }
  
    export type State =
    | { status: Status.Loading }
    | {
        status: Status.Loaded;
        project: Project;
        content: string;
        ShouldCycleImages: boolean;
        cycleIndex: number;
      }
    | { status: Status.Error; errorCode: string };