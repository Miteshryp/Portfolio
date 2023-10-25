"use client";
import Image from "next/image";

import FooterSection from "@/components/modules/FooterSection";
import Navbar from "@/components/modules/Navbar";

import Heading from "@/components/common/text/Heading";
import Text from "@/components/common/text/Text";

import profileImage from "@/../public/assets/profile.png";
import "@/utils/css/landing.scss";
import { useWindowWidth } from "@/utils/common/windowSize";
import StandardLayout from "@/components/common/StandardLayout";

export default function About() {
	let windowWidth = useWindowWidth();

	return (
		<main
			className={`
                aboutBackground
                `}
		>


			<StandardLayout >
				<section
					className={`
                        w-full
						flex flex-col 
						justify-center items-center 
						lg:justify-start lg:items-start
						gap-16 lg:gap-16
                    `}
				>
					<Heading> About </Heading>

					<div
						className={`
                            w-full
                            flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center
							gap-10
                            `}
					>

						<div
							className={`
							w-full flex-1
							`}
						>
							<Text>
								<div className="flex flex-col gap-8">
									<p>
										{`A leader, a learner and an artist. These are the words I’ve found myself associated with for most of my life!`}
									</p>
									<p>
										{`Hii, I am Mitesh Sharma, a final year undergraduate student pursing my Bachelors degree. Having found my passion for software very early in my life, I have been playing around with code from the age of 13. I have experimented with several types of technologies, including domains like graphic programming, low-level IoT systems and lately I have specialised in the domain of Backend systems and web technologies.`}
									</p>
									<p>
										{`Being an artist at my heart, It has always been my mission to be able to contribute to the society through the means of my skills, and I would not love anything more if I am able to be of your help, so if you need some consultation or service to create, revamp or optimize your websites, lets have a coffee sometime!`}
									</p>
								</div>
							</Text>
						</div>

						<div className="w-full flex-1 flex flex-row justify-center items-center">
							<Image
								width={windowWidth > 768 ? 340 : 200}
								className={`
								p-10
								bg-card/50 rounded-3xl
							`}
								src={profileImage}
								alt=""
							/>
						</div>
					</div>
				</section>
			</StandardLayout>
		</main>
	);
}
