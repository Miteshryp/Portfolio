import Link from "next/link";
import LinkCard from "../common/LinkCard";


const blogs = [
    {
        title: "Hello",
        description: "Some random content. Doesnt matter much, I just need to check the color of the text and its reaction to events",
        link: "https://github.com/"
    },
    {
        title: "Blog 2",
        description: "Some random content. Doesnt matter much, I just need to check the color of the text and its reaction to events",
        link: "https://github.com/"
    }
]


export default function BlogSection() {
    // @Todo: Connect the blog section to get the data from the backend

  const LinkComponent = (props: {link: string}) => {
    const {link} = props;
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
    )
  }

  return (<>
    <div className={`
        w-full
        flex flex-col gap-10 lg:gap-0
        justify-center items-center
        lg:bg-dark-card bg-transparent
        rounded-md
    `}>
        {blogs.map( (b, index) => <LinkCard key={index} title={b.title} description={b.description} ButtonComponent={() => <LinkComponent key={index} link={b.link} />} />)}
    </div>
  </>)
}
