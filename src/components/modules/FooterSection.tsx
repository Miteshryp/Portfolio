"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { useWindowWidth } from "@/utils/common/windowSize";
import { getProfileData } from "@/utils/services/publicData";
import { IProfileData } from "@/utils/services/types";
import SubHeading from "@/components/common/text/SubHeading";

export default function FooterSection() {
	let [profileData, setProfileData] = useState<IProfileData | null>(null);

	useEffect(() => {
		(async () => {
			let newProfileData = await getProfileData();
			setProfileData(newProfileData);
		})();
	}, []);

	let windowWidth = useWindowWidth();
	let socialsIconWidth = windowWidth > 768 ? 50 : windowWidth > 512 ? 40 : 35;

	console.log(windowWidth);

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
							{profileData && (
								<>
									{/* Github */}
									<Link href={profileData.github}>
										<Image
											src={"/assets/graphics/github.svg"}
											width={socialsIconWidth}
											height={20}
											alt=""
										></Image>{" "}
									</Link>

									{/* Linkedin */}
									<Link href={profileData.linkedin}>
										<Image
											src={"/assets/graphics/linkedin.svg"}
											width={socialsIconWidth}
											height={20}
											alt=""
										></Image>{" "}
									</Link>

									{/* Instagram */}
									<Link href={profileData.instagram}>
										<Image
											src={"/assets/graphics/instagram.svg"}
											width={socialsIconWidth}
											height={20}
											alt=""
										></Image>{" "}
									</Link>

									{/* Twitter */}
									<Link href={profileData.twitter}>
										<Image
											src={"/assets/graphics/twitter.svg"}
											width={socialsIconWidth}
											height={20}
											alt=""
										></Image>{" "}
									</Link>
								</>
							)}
						</div>
					</div>

					{/* Contact info */}
					<div className="no-view:hidden 2xlsm:block">
						<SubHeading className="font-inconsolata font-semibold">
							{" "}
							Contact Me{" "}
						</SubHeading>

						{profileData && (
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
						)}
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
