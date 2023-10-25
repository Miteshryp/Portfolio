import Link from "next/link";
import LinkCard from "../common/LinkCard";
import { getLatestBlogs } from "@/utils/services/publicData";

export default function BlogSection() {
	const blogs = getLatestBlogs();

	const LinkComponent = (props: { link: string }) => {
		const { link } = props;
		return (
			<Link
				href={link}
				className={`
                    py-2
                    px-10
                    flex flex-row justify-end items-center gap-2
                    text-lg font-bold font-montserrat
                    hover:text-black hover:bg-white
                    rounded-full
                    transition ease-in-out duration-300
                `}
			>
				{"Read More"}
			</Link>
		);
	};

	return (
		<>
			<div
				className={`
        w-full
        flex flex-col gap-10 lg:gap-0
        justify-center items-center
        lg:bg-dark-card bg-transparent
        rounded-md
    `}
			>
				{blogs.map((b, index) => (
					<LinkCard
						key={index}
						title={b.title}
						description={b.description}
						ButtonComponent={() => <LinkComponent key={index} link={b.link} />}
					/>
				))}
			</div>
		</>
	);
}
