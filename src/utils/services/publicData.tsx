import {IJobData, IBlogData, IProjectsData} from "./types"


// @Todo: fetch the latest blogs from the backend
export function getLatestBlogs() : IBlogData[] | Promise<IBlogData[]> {
    return [
        // {
        //     title: "Hello",
        //     description: "Some random content. Doesnt matter much, I just need to check the color of the text and its reaction to events",
        //     link: "https://github.com/"
        // },
        // {
        //     title: "Blog 2",
        //     description: "Some random content. Doesnt matter much, I just need to check the color of the text and its reaction to events",
        //     link: "https://github.com/"
        // }
    ]
    
}


// @Todo: Connect the job card to fetch the job details from the backend
export function getJobData(): IJobData[] | Promise<IJobData[]> {
    return [
        {
          icon: "https://formi.co.in/_next/static/media/formi_logo_whiteColor.79f158a3.svg",
          role: "Full Stack Engineer",
          tenure: "June'23 - Aug'23",
        },
      ];
}

// @Todo: Connect the projects data to fetch the real-time projects data from the backend
// @Todo: Complete with real data
export function getProjectsData() : IProjectsData[] | Promise<IProjectsData[]> {
    return [
        {
            name: "ProjectX",
            description:
                "Fucked with Elon's ambitions. sdfnkjn , =dfvjnfkjvnm knfdjkvnkjdnfviuw  wein jknjk djfknwio ehfiurbe erfibjs d cjsbdcjknkjne erfn wsdnjkf r w wjenkdjwne  ferfkjn dusn df, j,nk",
            github: "https://www.github.com/harness/gitness",
        },
    
        {
            name: "Project4",
            description: "Well well well",
            github: "https://www.github.com/harness/gitness",
        },
    ];
}

// @Todo: Connect the socials link to fetch data from the backend
export function getSocialsData() : any | Promise<any> {
    return {
        linkedin: "https://www.linkedin.com/in/mitesh-sharma-a658871b0/",
        github: "https://github.com/Miteshryp",
        instagram: "https://www.instagram.com/miteshryp/",
        twitter: "https://twitter.com/miteshryp",
        medium: "https://medium.com/@miteshryp"
    }
}

export function getProfileData() {
    return {
        resume: "https://drive.google.com/file/d/1-N5uhLaUzhZK0_T70K8CyMs-bzdAYCvZ/view?usp=drive_link",
        email: 'miteshryp@gmail.com'
    }
}