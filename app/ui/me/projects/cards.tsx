'use server'
import getGitProject from "@/app/lib/gitPro";


export default async function Cards() {
  let projectInfo = await getGitProject();

  return (
    // <ul className="grid grid-flow-row gap-5 px-4 justify-items-center w-5/6">
    <ul className="flex flex-col gap-5 items-center">
      {projectInfo.map((pro, id) => (
        <li
          key={id}
          className="hover:shadow-lg hover:shadow-blue-400 text-center break-words max-w-[300px] py-2 flex flex-col items-center rounded-xl bg-blue-100 text-gray-700"
        >
          <a href={pro.url} target="_blank" className="w-full">
            <p className="text-lg p-4 font-bold">{pro.name}</p>
            <div className="">
              {/* I put url 'hidden' class so it can look nice */}
              <p className="hidden font-bold p-1 hover:underline">
                {pro.url}
              </p>
              <p className="p-2">{pro.description}</p>
              <p className="text-sm p-2">
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
