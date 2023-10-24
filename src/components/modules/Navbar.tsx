"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Turn as Hamburger } from "hamburger-react";
import { useWindowWidth } from "@/utils/common/windowSize";

export default function Navbar() {
	const router = useRouter();
	const goToHome = (e: any) => {
		router.push("/");
	};
	const goToProjects = (e: any) => {
		router.push("/projects");
	};
	const goToAbout = (e: any) => {
		router.push("/about");
	};

  const windowWidth = useWindowWidth();
	const [expanded, setExpanded] = React.useState(false);

	return (
		<div
			className={`
        w-screen fixed
        h-fit
        bg-transparent backdrop-blur-lg z-40
        flex 
        flex-col items-end justify-center mr-4
        md:flex-row md:items-center md:justify-evenly lg:justify-end
        gap-10 lg:gap-32
        font-inter 
        font-semibold
        text-lg
        lg:text-3xl
        py-6
        lg:pl-6 lg:pr-40 pr-4
        `}
		>
			<div
				className={`
        md:hidden
        menu-icon
      `}
			>
				<Hamburger
					onToggle={() => {
						setExpanded((s) => !s);
					}}
					size={100}
				/>
			</div>

			{expanded || windowWidth > 768 ? (
				<>
					<div
						className={`
        hover:text-card-highlight 
        translate ease-in-out duration-300`}
						onClick={goToHome}
					>
						{" "}
						Home{" "}
					</div>
					<div
						className={`
        hover:text-card-highlight
        translate ease-in-out duration-300`}
						onClick={goToProjects}
					>
						{" "}
						Projects{" "}
					</div>
					<div
						className={`
        hover:text-card-highlight
        translate ease-in-out duration-300`}
						onClick={goToAbout}
					>
						{" "}
						About{" "}
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
}
