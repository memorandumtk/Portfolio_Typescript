
export default function Back() {
  return (
    <main className="flex flex-col gap-6  h-full">
      <section className="text-lg flex flex-col gap-12">
        <p className="text-4xl">Study & Work</p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row">
            <p className="flex-1 text-2xl font-bold">Tamwood College</p>
            <p className="flex-none w-32">2023-Present</p>
          </div>
          <p className="px-4 text-base">Vancouver/Canada</p>
          <p className="text-xl font-bold">What I learned</p>
          <ul>
            <li className="list-disc list-inside">Knowledge of front-end web development(using HTML. CSS, Javascript, React, BootStrap)</li>
            <li className="list-disc list-inside">Fundamentals of back-end web development(using Node.js, PHP)</li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-row">
            <p className="flex-1 text-2xl font-bold">Professional Network Consulting</p>
            <p className="flex-none w-32">2020-2023</p>
          </div>
          <p className="px-4 text-base">Tokyo/Japan</p>
          <p className="text-xl font-bold">What I did</p>
          <ul>
            <li className="list-disc list-inside">
              Configuring Cisco routers, switches wireless appliances, and
              firewalls in companies of my company's clients so my clients&apos;
              requirement is accomplished.
            </li>
            <li className="list-disc list-inside">
              Setting and Building Linux/Windows server to make clients&apos;
              environment more secure.
            </li>
            <li className="list-disc list-inside">
              Communication with client&apos;s to achieve my teams mission on
              schedule and to ensure effective team coordination and client
              satisfaction.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row">
            <p className="flex-1 text-2xl font-bold">Funabashi Informational College</p>
            <p className="flex-none w-32">2018-2020</p>
          </div>
          <p className="px-4 text-base">Chiba/Japan</p>
          <p className="text-xl font-bold">What I learned</p>
          <ul>
            <li className="list-disc list-inside">Fundamentals of TCP/IP</li>
            <li className="list-disc list-inside">Cisco networking</li>
            <li className="list-disc list-inside">Hands-on of Linux</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
