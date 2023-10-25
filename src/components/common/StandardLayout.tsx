import Navbar from "../modules/Navbar";
import FooterSection from "../modules/FooterSection";

export default function StandardLayout(props: any) {
	return (
		<>
			<Navbar />
			<div
				className={`
                    pt-44
                    px-0 3xlsm:px-4 sm:px-10 md:px-32 lg-px-10
            `}
			>
				{props.children}
			</div>
			<FooterSection />
		</>
	);
}
