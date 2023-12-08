'use server'
import getGitProject from "@/app/lib/gitPro";


export default async function Cards() {
  let projectInfo = await getGitProject();

  return (
    // <ul className="grid grid-flow-row gap-5 px-4 justify-items-center w-5/6">
    <ul className="flex flex-col gap-5 px-4">
      {projectInfo.map((pro, id) => (
        <li
          key={id}
          className="text-center break-words max-w-[300px] sm:max-w-[500px] md:max-w-full py-2 flex flex-col items-center rounded-xl shadow-sm opacity-75 bg-[beige] text-gray-700"
        >
          <a href={pro.url} target="_blank" className="w-full">
            <p className="p-4 font-bold text-xl">{pro.name}</p>
            <div className="">
              {/* I put url 'hidden' class so it can look nice */}
              <p className="hidden font-bold p-1 text-lg hover:underline">
                {pro.url}
              </p>
              <p className="p-2">{pro.description}</p>
              <p className="text-lg p-2">
                <span>Last Update:&nbsp;</span>
                {pro.modifiedDate}
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
