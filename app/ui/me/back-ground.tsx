export default function Back() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        <div className="title">
          Study & Work
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex flex-row items-baseline">
                <p className="flex-1 school-name">Tamwood College</p>
                <p className="flex-none w-28">2023-Present</p>
              </div>
              <p className="px-4">Vancouver/Canada</p>
            </div>
            <p className="text-xl font-bold bg-gradient-to-r from-violet-400 to-violet-950 bg-clip-text text-transparent  ">-Learning Contents-</p>
            <ul>
              <li className="list-disc list-inside">
                Knowledge of front-end web development(using HTML. CSS,
                Javascript, React, BootStrap)
              </li>
              <li className="list-disc list-inside">
                Fundamentals of back-end web development(using Node.js, PHP)
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <div className="flex flex-row items-baseline">
                <p className="flex-1 company-name">
                  Professional Network Consulting
                </p>
                <p className="flex-none w-28">2020-2023</p>
              </div>
              <p className="px-4">Tokyo/Japan</p>
            </div>
            <p className="text-xl font-bold bg-gradient-to-r from-violet-400 to-violet-950 bg-clip-text text-transparent  ">-Working Detail-</p>
            <ul>
              <li className="list-circle list-inside">
                Configuring Cisco routers, switches wireless appliances, and
                firewalls in companies of my company&apos;s clients so my
                clients&apos; requirement is accomplished.
              </li>
              <li className="list-circle list-inside">
                Setting and Building Linux/Windows server to make clients&apos;
                environment more secure.
              </li>
              <li className="list-circle list-inside">
                Communication with client&apos;s to achieve my teams mission on
                schedule and to ensure effective team coordination and client
                satisfaction.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <div className="flex flex-row items-baseline">
                <p className="flex-1 school-name">
                  Funabashi Informational College
                </p>
                <p className="flex-none w-28">2018-2020</p>
              </div>
              <p className="px-4">Chiba/Japan</p>
            </div>
            <p className="text-xl font-bold bg-gradient-to-r from-violet-400 to-violet-950 bg-clip-text text-transparent  ">-Learning Contents-</p>
            <ul>
              <li className="list-disc list-inside">Fundamentals of TCP/IP</li>
              <li className="list-disc list-inside">Cisco networking</li>
              <li className="list-disc list-inside">Hands-on of Linux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
