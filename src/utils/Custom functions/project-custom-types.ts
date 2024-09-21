export type ProjectDetailsParams = {
  id: string;
};

export interface Project {
  id: number;
  name: string;
  start_time: string;
  end_time?: string;
  github_link?: string;
  description: string;
  folder_name: string;
  cover_image: string;
  cycling_images: string[][];
  extension: string;
  tags: string[];
  ongoing: boolean;
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
  //await new Promise((resolve) => setTimeout(resolve, 1000 * 1000));

  const json = await response.json();
  let projects: Project[] = json["projects"];
  if (!isDevelopment) {
    projects = projects.filter((project) => {
      return project.id > -1;
    });
  }
  cleanProjectList(projects);
  return projects;
}

function cleanProjectList(list: Project[]) {
  list.forEach((project) => {
    if (project.end_time == null || project.end_time == "") {
      project.ongoing = true;
    } else {
      project.ongoing = false;
    }
  });
}

export function readJsonDate(date: string): string {
  const temp: string[] = date.split("/");
  let result: string;
  const length = temp.length;
  if (length < 1 || length > 3) {
    throw Error("Passsed in invalid date string: ".concat(date));
    return "";
  }

  switch (length) {
    case 2:
      result = "in ".concat(numToMonth(parseInt(temp[0])), " of ", temp[1]);
      break;

    case 3:
      result = "on ".concat(
        numToMonth(parseInt(temp[0])),
        " ",
        stringToNumWithPrefix(temp[1]),
        ", ",
        temp[2]
      );
      break;

    default:
      result = "in ".concat(date);
  }
  return result;
}

function numToMonth(num: number): string {
  let result: string;
  switch (num) {
    case 1:
      result = "January";
      break;
    case 2:
      result = "February";
      break;
    case 3:
      result = "March";
      break;
    case 4:
      result = "April";
      break;
    case 5:
      result = "May";
      break;
    case 6:
      result = "June";
      break;
    case 7:
      result = "July";
      break;
    case 8:
      result = "August";
      break;
    case 9:
      result = "September";
      break;
    case 10:
      result = "October";
      break;
    case 11:
      result = "November";
      break;
    case 12:
      result = "December";
      break;

    default:
      result = "Invalid Month Given!!";
  }
  return result;
}

function stringToNumWithPrefix(day: string): string {
  const lastDigit = day[day.length - 1];
  const exceptionCheck = parseInt(day) % 100;
  // To remove the 0 in a day like 09!!
  const cleanedDay = parseInt(day).toString();

  // Check if it ends in 11, 12, or 13 since they break the rules :(
  if (exceptionCheck > 10 && exceptionCheck < 14)
    return cleanedDay.concat("th");

  let result: string;
  switch (lastDigit) {
    case "1":
      result = cleanedDay.concat("st");
      break;

    case "2":
      result = cleanedDay.concat("nd");
      break;

    case "3":
      result = cleanedDay.concat("rd");
      break;

    default:
      result = cleanedDay.concat("th");
  }
  return result;
}

export enum Status {
  Loading = "loading",
  Loaded = "loaded",
  Error = "error",
}

export type State =
  | {
      status: Status.Loading;
    }
  | {
      status: Status.Loaded;
      project: Project;
      content: string;
      ShouldCycleImages: boolean;
    }
  | {
      status: Status.Error;
      errorCode: string;
    };
