
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import Cards from "@/app/ui/me/projects/cards";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <div className="title">My Projects</div>
      <Suspense fallback={<p>Loading Projects...</p>}>
      <Cards />
      </Suspense>
    </div>
  );
}

