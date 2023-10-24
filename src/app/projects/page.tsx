"use client";

import Link from "next/link";

import LinkCard from "@/components/common/LinkCard";
import Navbar from "@/components/modules/Navbar";
import "@/utils/css/landing.scss";

import { AiFillGithub } from "react-icons/ai";
import FooterSection from "@/components/modules/FooterSection";
import Heading from "@/components/common/Heading";

const projects = [
  {
    name: "ProjectX",
    description:
      "Fucked with Elon's ambitions. sdfnkjn , =dfvjnfkjvnm knfdjkvnkjdnfviuw  wein jknjk djfknwio ehfiurbe erfibjs d cjsbdcjknkjne erfn wsdnjkf r w wjenkdjwne  ferfkjn dusn df, j,nk",
    github: "https://www.github.com/harness/gitness",
  },

  {
    name: "Project4",
    description: "Well well well",
    github: "https://www.github.com/harness/gitness",
  },
];

export default function Projects() {
  // @Todo: Connect the projects sections to fetch the data from the backend
  const ButtonLink = (props: { link: string }) => {
    const { link } = props;

    return (
      <Link
        className={`
                    bg-card
                    px-5 py-2
                    rounded-full
                    hover:bg-white
                    flex flex-row justify-center items-center gap-3
                    hover:text-black font-montserrat font-semibold
                    transition-all ease-in-out duration-300
                `}
        href={link}
      >
        <AiFillGithub size={30} />
        Github
      </Link>
    );
  };

  return (
    <>
      <main className="projectsBackground">
        <Navbar />

        <div
          className={`
                py-20 mx-2 sm:mx-10 lg:mx-32
                flex flex-col justify-center items-start
                gap-10
            `}
        >
          <Heading> Projects </Heading>
          {/* <h1
            className={`
            font-inconsolata font-semibold 
            text-xl sm:text-3xl md:text-6xl lg:text-8xl
          `}
          >
            {" "}
            Projects{" "}
          </h1> */}
          <p className="font-montserrat font-extrabold text-xl">
            {" "}
            Some random texts
          </p>

          <div className="mx-auto">
            <div
              className={`
                    relative
                    w-full
                    bg-transparent lg:bg-card/20
                    rounded-lg
                    flex flex-col justify-center items-center  
                    `}
            >
              <div className="w-full flex flex-col gap-10 lg:gap-0">
                {projects.map((p, index) => {
                  return (
                    <LinkCard
                      key={index}
                      title={p.name}
                      description={p.description}
                      ButtonComponent={() => (
                        <ButtonLink key={index} link={p.github} />
                      )}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* Projects List */}
        </div>
        <FooterSection />
      </main>
    </>
  );
}
