import {IJobData, IBlogData, IProjectsData, IProfileData} from "./types"


// @Todo: fetch the latest blogs from the backend
export function getLatestBlogs() : IBlogData[] | Promise<IBlogData[]> {
    return [
        {
            title: "Evolution of Computer Graphics",
            description: "Take a deep dive into the history of graphics softwares, programming and animations.",
            link: "https://medium.com/@miteshryp/evolution-of-computer-graphics-b970be31d2c9"
        },
        {
            title: "Genesis: Kubernetes",
            description: "The origin story of Kubernetes",
            link: "https://medium.com/@miteshryp/genesis-kubernetes-8ee2c8cacd0"
        }
    ]
}


// @Todo: Connect the job card to fetch the job details from the backend
export function getJobData(): IJobData[] | Promise<IJobData[]> {
    return [
        {
          icon: "https://formi.co.in/_next/static/media/formi_logo_whiteColor.79f158a3.svg",
          role: "Full Stack Engineer",
          tenure: "June'22 - Aug'22",
        },
      ];
}

// @Todo: Connect the projects data to fetch the real-time projects data from the backend
// @Todo: Complete with real data
export function getProjectsData() : IProjectsData[] | Promise<IProjectsData[]> {
    return [
        {
            name: "Pixel Engine",
            description: "A Game Engine I tried to make in 2018. Capable of rendering basic 2D scenes, shader compilation with error detection, batch rendering, basic algebric constructs, cusotm memory allocators and more.",
            github: "https://github.com/Miteshryp/Pixel-Engine"
        },
        {
            name: "Breached 2.0",
            description: "This was a web-app I made to host a cryptic hunt competition for the IEEE Student Chapter of MUJ. The site handled a peak load of about 1200+ users over a span of 2 days. The web-app consisted of a user login, leaderboards and custom cryptic hunt routes for the participants to pursue according to their choice.",
            github: "https://github.com/Miteshryp/Breached2.0",
        },
    
        {
            name: "STL-Clone",
            description: "A Data Structures library I made to clone the existing Standard Template Library of C++. This was an exploratory project where the main goal was to learn about different programming paradigm and how they are incorporated in real projects.",
            github: "https://github.com/Miteshryp/STL-Clone",
        },
    ];
}


// @Todo: Connect and fetch data from the backend
export function getAboutParagrahs() : string[] | Promise<string[]> {
    return [
        `A leader, a learner and an artist. These are the words I’ve found myself associated with for most of my life!`,
        `Hii, I am Mitesh Sharma, a final year undergraduate student pursing my Bachelors degree. Having found my passion for software very early in my life, I have been playing around with code from the age of 13. I have experimented with several types of technologies, including domains like graphic programming, low-level IoT systems and lately I have specialised in the domain of Backend systems and web technologies.`,
        `Being an artist at my heart, It has always been my mission to be able to contribute to the society through the means of my skills, and I would not love anything more if I am able to be of your help, so if you need some consultation or service to create, revamp or optimize your websites, lets have a coffee sometime!`
    ]
}


// @Todo: Connect the profile data to the backend   
export function getProfileData() : IProfileData | Promise<IProfileData> {
    return {
        resume: "https://drive.google.com/file/d/1-N5uhLaUzhZK0_T70K8CyMs-bzdAYCvZ/view?usp=drive_link",
        email: 'miteshryp@gmail.com',

        linkedin: "https://www.linkedin.com/in/mitesh-sharma-a658871b0/",
        github: "https://github.com/Miteshryp",
        instagram: "https://www.instagram.com/miteshryp/",
        twitter: "https://twitter.com/miteshryp",
        medium: "https://medium.com/@miteshryp"
    }
}