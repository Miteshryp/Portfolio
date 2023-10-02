import Link from "next/link"
import Image from "next/image";


export default function LinkCard(props: {title: string, description: string, ButtonComponent: JSX.ElementType, children?: any}) {
    const {title, description, ButtonComponent} = props;
    return (
        <>
            <div className={`
            w-full h-full
            py-10
            pl-16 pr-16
            flex flex-col justify-start items-start
            gap-6
            group
            bg-card
            lg:bg-transparent
            hover:bg-card-highlight
            rounded-md
            transition-all ease-in-out duration-300
        `}>
            <h1 className={`
                font-inter font-black text-4xl
            `}>
                {title}
            </h1>

            <p className="text-white/40 group-hover:text-white/80">
                {description}
            </p>

            <div className={`
                w-full
                flex flex-row justify-end items-end
            `}>
                <ButtonComponent />
            </div>
        </div>
        </>
    )
}