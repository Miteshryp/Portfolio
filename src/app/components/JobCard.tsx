import Image from "next/image";

const jobs = [
  {
    icon: "https://formi.co.in/_next/static/media/formi_logo_whiteColor.79f158a3.svg",
    role: "Role 1",
    tenure: "June'23 - Aug'23",
  },
  {
    icon: "https://formi.co.in/_next/static/media/formi_logo_whiteColor.79f158a3.svg",
    role: "Role 1",
    tenure: "June'23 - Aug'23",
  },
];

export default function JobCard() {
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
                    flex flex-row justify-center items-center
                    py-4 px-8 mx-auto
                    bg-card-component
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
                flex flex-row justify-end items-center
                text-right
            `}
          >
            <h1
              className={`
                font-montserrat text-white/60 font-semibold text-md lg:text-xl
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
        <h1 className="text-5xl font-inter font-black"> Work Experience </h1>
        <div className="w-full flex flex-col gap-6 xl:px-16 py-5">
            {jobs.map((r) => (
            <RoleComponent job={r} />
            ))}
        </div>
      </div>
    </>
  );
}
