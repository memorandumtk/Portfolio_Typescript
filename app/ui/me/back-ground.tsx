import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import React from "react";

export default function Back() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        <div className="title text-center">Study & Work</div>

        <div className="flex flex-col gap-2">
          <div>
            <div className="flex flex-row items-baseline">
              <p className="flex-1 school-name">PRI ( Internship )</p>
              <p className="flex-none w-28">2024/2-Present</p>
            </div>
            <p className="px-4">Tokyo/Japan</p>
          </div>
          <p className="text-xl font-bold bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent  ">
            -Learning Contents and Working Details-
          </p>
          <ul>
            <li className="list-disc list-inside">
              Team development using Git and GitHub
            </li>
            <li className="list-disc list-inside">
              Knowledge of front-end web development(using HTML. CSS,
              Javascript, BootStrap)
            </li>
            <li className="list-disc list-inside">
              Back-end web development using Laravel for understanding MVC model
            </li>
            <li className="list-disc list-inside">
              Container technology using Docker compose
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex flex-row items-baseline">
                <p className="flex-1 school-name">Tamwood College</p>
                <p className="flex-none w-28">2023/9-Present</p>
              </div>
              <p className="px-4">Vancouver/Canada</p>
            </div>
            <p className="text-xl font-bold bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent  ">
              -Learning Contents-
            </p>
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
                <p className="flex-none w-28">2020/4-2023/3</p>
              </div>
              <p className="px-4">Tokyo/Japan</p>
            </div>
            <p className="text-xl font-bold bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent  ">
              -Working Detail-
            </p>
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
                <p className="flex-none w-28">2018/4-2020/3</p>
              </div>
              <p className="px-4">Chiba/Japan</p>
            </div>
            <p className="text-xl font-bold bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent  ">
              -Learning Contents-
            </p>
            <ul>
              <li className="list-disc list-inside">Fundamentals of TCP/IP</li>
              <li className="list-disc list-inside">Cisco networking</li>
              <li className="list-disc list-inside">Hands-on of Linux</li>
            </ul>
          </div>

          <div className="">
            <Link
              className="text-xl group hover:underline flex justify-center items-center gap-1"
              href="https://www.linkedin.com/in/kosuke-takagi-27002927a/details/certifications/"
            >
              My Certifications (Jump to LinkedIn)
              <FaArrowRight className="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
