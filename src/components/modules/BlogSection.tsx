import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/router";
import LinkCard from "../common/LinkCard";

import instagram from "@/../public/assets/graphics/instagram.svg"


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

  const BlogComponent = (props: any) => {
    const blog: {title: string, description: string, link: string} = props.blog
    return (
      <>
        <div className={`
            w-full h-fit
            py-10
            pl-16 pr-16
            flex flex-col justify-start items-start
            gap-6
            group
            bg-card
            lg:bg-transparent
            hover:bg-card-dark-highlight
            rounded-md
            transition ease-in-out duration-300
        `}>
            <h1 className={`
                font-inter font-black text-4xl
            `}>
                {blog.title}
            </h1>

            <p className="text-white/40 group-hover:text-white/80">
                {blog.description}
            </p>

            <div className={`
                w-full
                flex flex-row justify-end items-end
            `}>
                <Link
                href={blog.link} 
                className={`
                    py-2
                    px-10
                    flex flex-row justify-end items-center
                    text-lg font-bold font-montserrat
                    hover:text-black hover:bg-white rounded-full
                    transition ease-in-out duration-300
                `}
                >
                    Read more
                </Link>
            </div>
        </div>
      </>
    );
  };

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
        {/* <BlogComponent blog={{title: "Hello"}} />
        <BlogComponent blog={{title: "There"}} /> */}
    </div>
  </>)
}
