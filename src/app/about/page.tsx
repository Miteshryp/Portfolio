import Image from "next/image";

import FooterSection from "@/components/modules/FooterSection";
import Navbar from "@/components/modules/Navbar";

import Heading from "@/components/common/Heading";
import Text from "@/components/common/Text";

import profileImage from "@/../public/assets/profile.png";
import "@/utils/css/landing.scss";

export default function About() {
	return (
		<main
			className={`
                aboutBackground
                `}
		>
			<Navbar />
			{/* @Todo: Complete the design */}

			<div
				className={`
                    px-2 lg:px-10 w-full h-full flex flex-col items-start justify-start gap-2 lg:gap-64
                `}
			>
				<section
					className={`
                        w-full flex flex-col justify-center lg:justify-start items-center lg:items-start gap-10 lg:gap-16
                        mt-20 lg:mt-40
                    `}
				>
					<Heading> About </Heading>

					<div
						className={`
                            w-full
                            mx-auto
                            flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center
							gap-10
                            `}
					>
						{/* <div className="w-full">
							<p>{`
                                A leader, a learner and an artist. These are the words I’ve found myself associated with for most of my life!
                                
                                Hii, I am Mitesh Sharma, a final year undergraduate student pursing my Bachelors degree. Having found my passion for software very early in my life, I have been playing around with code from the age of 13. I have experimented with several types of technologies, including domains like graphic programming, low-level IoT systems and lately I have specialised in the domain of Backend systems and web technologies. 
                                
                                Being an artist at my heart, It has always been my mission to be able to contribute to the society through the means of my skills, and I would not love anything more if I am able to be of your help, so if you need some consultation or service to create, revamp or optimize your websites, lets have a coffee sometime!`}</p>
						</div> */}

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
								width={340}
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
			</div>

			<FooterSection />
		</main>
	);
}
