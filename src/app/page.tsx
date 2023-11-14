"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { saveAs } from "file-saver";

import Heading from "@/components/common/text/Heading";
import Button from "@/components/common/Button";
import BlogSection from "@/components/modules/BlogSection";
import JobCard from "@/components/modules/JobCard";

import StandardLayout from "@/components/common/StandardLayout";
import { getProfileData } from "@/utils/services/publicData";
import { IProfileData } from "@/utils/services/types";

import "@/utils/css/landing.scss";

export default function Home() {
	let [profileData, setProfileData] = useState<IProfileData | null>(null);

	useEffect(() => {
		(async () => {
			let newProfileData = await getProfileData();
			setProfileData(newProfileData);
		})();
	}, []);

	return (
		<main className="homeBackground">
			<StandardLayout>
				<div className="w-full h-full flex flex-col items-start justify-start gap-2 lg:gap-64">
					{/* Center Section */}
					<section
						className={`
            				w-10/12
            				sm:w-3/4  
							md:pt-36
            				flex flex-col lg:flex-row gap-28 mx-auto lg:gap-32
            				justify-center items-center text-center lg:text-left
            			`}
					>
						<Image src={"/assets/graphics/M Vector.svg"} className="lg:basis-1/3" alt="" width={200} />
						<div
							className={`
            					lg:basis-2/3
            					flex flex-col items-center justify-center gap-10
            					
            					lg:items-start
            					font-black
          					`}
						>
							<h1 className="font-inconsolata font-black inline text-5xl xl:text-7xl">
								{"Hii, I'm Mitesh"}
							</h1>
							<p className="w-full overflow-clip font-inconsolata font-light text-2xl xl:text-4xl w-full/2">
								An Engineer passionate about developing backend systems, Devops
								and High Performance Computing systems.
							</p>

							<div
								className={`
            						w-full
            						flex flex-col 2xl:flex-row 2xl:justify-between
            						gap-10
          						`}
							>
								<div
									onClick={() => {
										if (profileData)
											saveAs(profileData.resume, "Mitesh Sharma - Resume.pdf");
									}}
									className="basis-2/5"
								>
									<Button size="w-full" label="Resume Download">
										<span className="flex flex-row justify-center items-center gap-2">
											<Image
												src={"/assets/graphics/downloadIcon.svg"}
												width={30}
												height={30}
												alt=""
											/>
											<p aria-label="Resume">Resume</p>
										</span>
									</Button>
								</div>

								{/* Socials */}
								<div
									className={`
                						basis-3/5
                						flex flex-row flex-wrap justify-evenly 2xl:justify-start items-center
                						gap-10
              						`}
								>
									{profileData && (
										<>
											<Link aria-label="Github Handle Link" href={profileData.github}>
												{" "}
												<Image
													src={"/assets/graphics/github.svg"}
													width={45}
													height={20}
													alt=""
												/>
											</Link>
											<Link aria-label="Linkedin Handle Link" href={profileData.linkedin}>
												{" "}
												<Image
													src={"/assets/graphics/linkedin.svg"}
													width={45}
													height={20}
													alt=""
												/>
											</Link>
											<Link aria-label="Instagram Handle Link" href={profileData.instagram}>
												{" "}
												<Image
													src={"/assets/graphics/instagram.svg"}
													width={45}
													height={20}
													alt=""
												/>
											</Link>
											<Link aria-label="Twitter Handle Link" href={profileData.twitter}>
												{" "}
												<Image
													src={"/assets/graphics/twitter.svg"}
													width={45}
													height={20}
													alt=""
												/>
											</Link>
											<Link aria-label="Medium Handle Link" href={profileData.medium}>
												{" "}
												<Image
													src={"/assets/graphics/medium.svg"}
													width={45}
													height={20}
													alt=""
												/>
											</Link>
										</>
									)}
								</div>
							</div>
						</div>
					</section>

					{/* Second Section */}
					<div
						className={`
        					w-full 
        					px-2 
        					flex flex-col-reverse lg:flex-row gap-20 2xl:gap-80
        					md:items-start md:jusify-start
        					items-center justify-center
      					`}
					>
						<div
							className={`
            					md:basis-1/2 h-full
            					flex flex-col justify-center items-start
            					gap-20
            					m-10
        					`}
						>
							<Heading> {"Latest Blogs"} </Heading>

							{/* Blogs card */}
							<BlogSection />
						</div>

						<div
							className={`
            					w-full
            					md:basis-1/2
            					mt-60
          					`}
						>
							<JobCard />
						</div>
					</div>
				</div>
			</StandardLayout>
		</main>
	);
}
