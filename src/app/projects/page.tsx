"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";

import LinkCard from "@/components/common/LinkCard";
import Heading from "@/components/common/text/Heading";
import StandardLayout from "@/components/common/StandardLayout";

import { getProjectsData } from "@/utils/services/publicData";
import { IProjectsData } from "@/utils/services/types";

import "@/utils/css/landing.scss";

export default function Projects() {
	const [projects, setProjects] = useState<IProjectsData[]>([]);

	useEffect(() => {
		(async () => {
			let projectsData: IProjectsData[] = await getProjectsData();
			setProjects(projectsData);
		})();
	}, []);

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
				<StandardLayout>
					<section
						className={`
                w-full 
                flex flex-col
                justify-center items-center
                lg:justify-center lg:items-start
                gap-10
            `}
					>
						<Heading> Projects </Heading>

						<p className="font-montserrat font-extrabold text-xl">
							Some random texts
						</p>

						{/* Projects List */}
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
					</section>
				</StandardLayout>
			</main>
		</>
	);
}
