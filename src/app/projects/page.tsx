'use client'

import Link from "next/link";

import LinkCard from "@/components/common/LinkCard";
import Navbar from "@/components/modules/Navbar";
import "@/utils/css/landing.scss";
import { Card } from "flowbite-react";

import {AiFillGithub} from "react-icons/ai"
import FooterSection from "@/components/modules/FooterSection";

const projects = [
    {
        name: "ProjectX",
        description: "Fucked with Elon's ambitions. sdfnkjn , =dfvjnfkjvnm knfdjkvnkjdnfviuw  wein jknjk djfknwio ehfiurbe erfibjs d cjsbdcjknkjne erfn wsdnjkf r w wjenkdjwne  ferfkjn dusn df, j,nk",
        github: "https://www.github.com/harness/gitness"
    },

    {
        name: "Project11",
        description: "Well well well",
        github: "https://www.github.com/harness/gitness"
    },
    {
        name: "Project11",
        description: "Well well well",
        github: "https://www.github.com/harness/gitness"
    },
    {
        name: "Project11",
        description: "Well well well",
        github: "https://www.github.com/harness/gitness"
    },
    {
        name: "Project11",
        description: "Well well well",
        github: "https://www.github.com/harness/gitness"
    },
    {
        name: "Project11",
        description: "Well well well",
        github: "https://www.github.com/harness/gitness"
    },
    {
        name: "Project11",
        description: "Well well well",
        github: "https://www.github.com/harness/gitness"
    },
    {
        name: "Project11",
        description: "Well well well",
        github: "https://www.github.com/harness/gitness"
    },
]

export default function Projects() {
    const ButtonLink = (props: {link: string}) => {
        const {link} = props;

        return (
                <Link className={`
                    bg-card
                    px-5 py-2
                    rounded-full
                    hover:bg-white
                    flex flex-row justify-center items-center gap-3
                    hover:text-black font-montserrat font-semibold
                    transition-all ease-in-out duration-300
                `} href={link}>
                    <AiFillGithub size={30} />
                    Github
                </Link>

        )
    }

    return (
        <>
        <main className="projectsBackground">
            <Navbar />

            <div className={`
                py-20 px-32
                flex flex-col justify-center items-start
                gap-10
            `}>
                <h1 className="font-inconsolata font-semibold text-6xl lg:text-8xl"> Projects </h1>
                <p className="font-montserrat font-extrabold text-xl"> Some random texts</p>

                <div className={`
                    w-full
                    flex flex-row flex-wrap justify-around items-center gap-2 
                    `}>
                    {projects.map( (p) => {
                        return (
                            <div className="w-full basis-1/4">
                                <LinkCard title={p.name} description={p.description} ButtonComponent={() => <ButtonLink link={p.github} />} />
                            </div>
                        )}
                    )}
                </div>
                
            </div>
                <FooterSection />   
        </main>
        </>
    )
} 