'use client';

import { useRouter  }from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const goToHome = (e: any) => {router.push('/')};
  const goToProjects = (e: any) => {router.push('/projects')};
  const goToAbout = (e: any) => {router.push('/about')};

  return (
    <div
      className={`
        w-screen fixed
        bg-transparent backdrop-blur-md z-auto
        flex flex-row items-center justify-end
        gap-32
        font-inter 
        font-semibold
        text-3xl
        py-6
        pl-6 pr-40
        `}
    >
      <div 
        className={`
        hover:text-card-highlight 
        translate ease-in-out duration-300`} onClick={goToHome}> Home </div>
      <div 
        className={`
        hover:text-card-highlight
        translate ease-in-out duration-300`} onClick={goToProjects}> Projects </div>
      <div 
        className={`
        hover:text-card-highlight
        translate ease-in-out duration-300`} onClick={goToAbout}> About </div>
    </div>
  );
}
