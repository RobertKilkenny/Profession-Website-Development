import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Project, getProjectList } from "@/components/project-list";
import NotFound from "./not-found";
import { resourceUsage } from "process";

type ProjectDetailsParams = {
  id: string;
};

const ProjectDetails: React.FC = () => {
  const { id } = useParams<ProjectDetailsParams>();
  const fixedID = id == null ? " " : id;
  const [loading, setLoading] = useState(true);
  const [exists, setExists] = useState(false);
  const [data, setData] = useState<Project>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getProjectList();
        const result = list.some((item) => item.extension === id);
        setExists(result);
        if (result) {
          setData(list.filter((item) => item.extension === id)[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <a className="main-content-text">Loading...</a>
  ) : exists ? (
    <div>
      <h1>{data?.name}</h1>
    </div>
  ) : (
    <NotFound />
  );
};

export default ProjectDetails;
