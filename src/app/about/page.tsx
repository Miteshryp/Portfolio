"use client";
import Image from "next/image";

import Heading from "@/components/common/text/Heading";
import Text from "@/components/common/text/Text";

import profileImage from "@/../public/assets/profile.png";
import "@/utils/css/landing.scss";
import { useWindowWidth } from "@/utils/common/windowSize";
import StandardLayout from "@/components/common/StandardLayout";

import { getAboutParagrahs } from "@/utils/services/publicData";
import { useEffect, useState } from "react";

export default function About() {
	let windowWidth = useWindowWidth();

	let [descriptionParagraphs, setDescriptionParagraphs] = useState<string[]>([]);

	useEffect(() => {
		(async () => {
			let paragraphData = await getAboutParagrahs();
			setDescriptionParagraphs(paragraphData);
		})();
	}, []);

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
									{
										descriptionParagraphs.map((value, index) => <p key={index}> {value} </p>)
									}
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
