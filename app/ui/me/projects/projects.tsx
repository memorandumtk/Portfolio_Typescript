import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import Cards from "@/app/ui/me/projects/cards";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* <main className="flex flex-col min-h-screen overflow-x-hidden items-center content-center gap-4 p-4"> */}
      <h1 id="projects" 
      className="text-4xl font-bold pb-6">My Projects</h1>
      <Suspense fallback={<p>Loading Projects...</p>}>
      <Cards />
      </Suspense>
    </div>
  );
}
