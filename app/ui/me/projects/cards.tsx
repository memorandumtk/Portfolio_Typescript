'use server'
import getGitProject from "@/app/lib/gitPro";
import Card from "@/app/ui/me/projects/card";


export default async function Cards() {
  const projectsInfo = await getGitProject();

  return (
    <ul className="flex flex-col gap-5 items-center">
      {projectsInfo.map((project, index) => (
          <Card key={index} project={project} />
      ))}
    </ul>
  );
}
