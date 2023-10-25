"use client";
import Link from "next/link";
import Image from "next/image";

import instagram from "@/../public/assets/graphics/instagram.svg";
import github from "@/../public/assets/graphics/github.svg";
import linkedin from "@/../public/assets/graphics/linkedin.svg";
import twitter from "@/../public/assets/graphics/twitter.svg";

import SubHeading from "@/components/common/text/SubHeading";
import { getSocialsData, getProfileData } from "@/utils/services/publicData";

export default function FooterSection() {
	let socialsData = getSocialsData();
    let profileData = getProfileData();

	return (
		<>
			<div
				className={`
                    flex flex-col gap-20
                    mt-20 
                    px-4 md:px-20 py-10
                    bg-footer-background/20
                `}
			>
				<div
					className={`
                        w-full
                        flex flex-col gap-10 lg:flex-row lg:flex-wrap justify-evenly
                    `}
				>
					{/* Links */}
					<SubHeading
						className={`
                            flex flex-col 
                            justify-center items-start 
                            gap-4 
                            font-inconsolata font-semibold md:text-4xl
                    `}
					>
						<Link href="/"> Home </Link>
						<Link href="/projects"> Projects </Link>
						<Link href="/about"> About </Link>
					</SubHeading>

					{/* Socials */}
					<div
						className={`
                            flex flex-col gap-2
                        `}
					>
						<SubHeading className="font-inconsolata font-semibold">
							Socials{" "}
						</SubHeading>
						<div
							className={`
                                flex flex-row flex-wrap 
                                justify-start gap-10 lg:justify-evenly items-start lg:gap-8
                            `}
						>
							{/* Github */}
							<Link href={socialsData.github}>
								<Image src={github} alt=""></Image>{" "}
							</Link>

							{/* Linkedin */}
							<Link href={socialsData.linkedin}>
								<Image src={linkedin} alt=""></Image>{" "}
							</Link>

							{/* Instagram */}
							<Link href={socialsData.instagram}>
								<Image src={instagram} alt=""></Image>{" "}
							</Link>

							{/* Twitter */}
							<Link href={socialsData.twitter}>
								<Image src={twitter} alt=""></Image>{" "}
							</Link>
						</div>
					</div>

					{/* Contact info */}
					<div className="no-view:hidden 2xlsm:block">
						<SubHeading className="font-inconsolata font-semibold">
							{" "}
							Contact Me{" "}
						</SubHeading>

						<Link
							href={`mailto:${"miteshryp@gmail"}`}
							className={`
                                font-inconsolata font-regular
                                 3xlsm:text-sm 2xlsm:text-lg xlsm:text-xl
                            `}
						>
							{" "}
							{profileData.email}{" "}
						</Link>
					</div>
				</div>

				{/* Copyright */}
				<div className="flex flex-row justify-center items-start">
					<h1 className="font-inconsolata font-semibold text-xl">
						© 2023 Mitesh Sharma. All Rights Reserved
					</h1>
				</div>
			</div>
		</>
	);
}
