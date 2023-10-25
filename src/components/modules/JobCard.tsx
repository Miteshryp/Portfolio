import React from "react";
import Image from "next/image";
import SubHeading from "@/components/common/text/SubHeading";

import {IJobData} from "@/utils/services/types"
import { getJobData } from "@/utils/services/publicData";


export default function JobCard() {

  let [jobs, setJobs] = React.useState<IJobData[]>([]);
  
  React.useEffect(() => {
    (async () => {
      let newData: IJobData[] = await getJobData();
      setJobs(newData);
    })()
  }, []);

  const RoleComponent = (props: any) => {
    const job: { icon: string; role: string; tenure: string } = props.job;
    return (
      <div
        className={`
            w-full
        `}
      >
        <div
          className={`
                    w-full
                    flex flex-col 2xlsm:flex-row justify-center items-center
                    py-4 px-8 mx-auto
                    bg-job-component
                    rounded-xl
                `}
        >

        {/* Company Image and role  */}
          <div
            className={`
                basis-1/2 p-4
                flex flex-col justify-center items-start
            `}
          >
            <Image
                src={job?.icon}
                width={100}
                height={30}
                alt=""
            />
            <h1
              className={`
                font-montserrat text-white/60 font-semibold test-md lg:text-xl
              `}
            >
              {job?.role}
            </h1>
          </div>


        {/* Tenure details */}
          <div
            className={`
                basis-1/2 
                flex flex-row justify-center 2xlsm:justify-end items-center
                text-right
            `}
          >
            <h1
              className={`
                font-montserrat text-white/60 font-semibold text-md lg:text-xl break-words
              `}
            >
              {job?.tenure}
            </h1>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={`
            w-full min-h-64
            px-10 py-12
            flex 
            flex-col justify-center items-start 
            gap-10
            rounded-3xl
            bg-card-highlight 
            `}
      >
        {/* <h1 className="text-3xl lg:text-5xl font-inter font-black"> Work Experience </h1> */}
        <SubHeading> Work Experience </SubHeading>
        <div className="w-full flex flex-col gap-6 xl:px-16 py-5">
            {jobs.map((r, index) => (
            <RoleComponent key={index} job={r} />
            ))}
        </div>
      </div>
    </>
  );
}
