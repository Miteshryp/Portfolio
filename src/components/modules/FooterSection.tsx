'use client';
import Link from "next/link";
import Image from "next/image";

import instagram from "@/../public/assets/graphics/instagram.svg"
import github from "@/../public/assets/graphics/github.svg"
import linkedin from "@/../public/assets/graphics/linkedin.svg"
import twitter from "@/../public/assets/graphics/twitter.svg"


export default function FooterSection() {
    return (
        <>

        <div className={`
            flex flex-col gap-20
            mt-20 
            px-20 py-10
            bg-footer-background/20
        `}>

        
        <div className={`
            w-full
            flex flex-col gap-10 lg:flex-row lg:flex-wrap justify-evenly
        `}>

            {/* Links */}
            <div className={`
                flex flex-col justify-center items-start gap-4
                font-inconsolata
                font-bold
                text-2xl
            `}>
                <Link href="/"> Home </Link>
                <Link href="/"> Projects </Link>
                <Link href="/"> About </Link>
            </div>

            {/* Socials */}
            <div className={`
                flex flex-col gap-2
            `}>
                <h1 className={`
                    font-inconsolata
                    font-bold
                    text-3xl
                `}> Socials </h1>
                <div className={`
                    flex flex-row flex-wrap 
                    justify-start gap-10 lg:justify-evenly items-start lg:gap-8
                `}>
                    <Link href={""} > <Image src={github} alt="" ></Image> </Link>
                    <Link href={""} > <Image src={linkedin} alt="" ></Image> </Link>
                    <Link href={""} > <Image src={instagram} alt="" ></Image> </Link>
                    <Link href={""} > <Image src={twitter} alt="" ></Image> </Link>
                </div>
            </div>

            {/* Contact info */}
            <div>
                <h1 className={`
                    font-inconsolata
                    font-bold
                    text-3xl
                `}>Contact Me</h1>

                <Link href="mailto:miteshryp@gmail" className="font-inconsolata font-regular text-xl"> miteshryp@gmail.com </Link>
            </div>

            {/* Copyright */}
            
        </div>

        <div className="flex flex-row justify-center items-start">
                <h1 className="font-inconsolata font-semibold text-xl">
                © 2023 Mitesh Sharma. All Rights Reserved
                </h1>
            </div>
        </div>
        </>
    )
}