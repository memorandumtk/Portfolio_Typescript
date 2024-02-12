import React from 'react';

interface ProProps {
    url: string;
    name: string;
    description: string;
    modifiedDate: string | null;
}

interface CardProps {
    project: ProProps;
}

const Card : React.FC<CardProps>= ({project}) => {
    return (
            <li
                className="hover:shadow-lg hover:shadow-blue-400 text-center break-words max-w-[300px] py-2 flex flex-col items-center rounded-xl border border-slate-500 dark:border-slate-100"
            >
                <a href={project.url} target="_blank" className="w-full">
                    <p className="text-lg p-4 font-bold">{project.name}</p>
                    <div className="">
                        {/* I put url 'hidden' class, so it can look nice */}
                        <p className="hidden font-bold p-1 hover:underline">
                            {project.url}
                        </p>
                        <p className="p-2">{project.description}</p>
                        <p className="text-sm p-2">
                            <span>Last Update:&nbsp;</span>
                            {project.modifiedDate}
                        </p>
                    </div>
                </a>
            </li>
    );
};

export default Card;