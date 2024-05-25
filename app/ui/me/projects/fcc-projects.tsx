"use client";
import React, { useState, useEffect } from "react";
import getGitProject from "@/app/lib/gitPro";
import Card from "@/app/ui/me/projects/components/card";
import HorizontalLineThin from "@/app/ui/horizontal-line-thin";
import { FaCaretRight, FaCaretUp } from "react-icons/fa";

interface Project {
  name: string;
  url: string;
  description: string;
  modifiedDate: string | null;
}

export default function FccProjects() {
  const [projectsInfo, setProjectsInfo] = useState<Project[]>([]);
  // const [projectsInfo, setProjectsInfo] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects: Project[] = await getGitProject();
      setProjectsInfo(projects);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <button onClick={() => setIsCollapsed(!isCollapsed)} className="group">
        <div className="flex flex-col items-center gap-4 text-2xl font-bold italic pt-8">
          <p>Free Code Camp Projects</p>
          <div className="flex items-center justify-center">
            <p>click here ...  </p>
            {isCollapsed ? (
              <FaCaretRight className={"group-hover:text-3xl"} />
            ) : (
              <FaCaretUp />
            )}
          </div>
        </div>
      </button>
      <HorizontalLineThin />
      <div>
        <ul
          className={`flex flex-col gap-5 items-center ${
            isCollapsed ? "hidden" : ""
          }`}
        >
          {projectsInfo.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </ul>
      </div>
    </>
  );
}
