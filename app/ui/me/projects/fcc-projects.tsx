"use client"
import React, { useState, useEffect } from 'react';
import getGitProject from "@/app/lib/gitPro";
import Card from "@/app/ui/me/projects/components/card";
interface Project {
    name: string;
    url: string;
    description: string;
    modifiedDate: string | null;
}

export default function FccProjects() {
    const [projectsInfo, setProjectsInfo] = useState<Project[]>([]);
    // const [projectsInfo, setProjectsInfo] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            const projects: Project[] = await getGitProject();
            setProjectsInfo(projects);
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <button
                className="mb-4 p-2 rounded"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? 'Expand' : 'Collapse'}
            </button>
            <ul className={`flex flex-col gap-5 items-center ${isCollapsed ? 'hidden' : ''}`}>
                {projectsInfo.map((project, index) => (
                    <Card key={index} project={project} />
                ))}
            </ul>
        </div>
    );
}
