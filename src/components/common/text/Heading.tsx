export default function Heading(props: any) {
    return <h1 className={`
        font-inconsolata font-extrabold lg:font-black
        lg:tracking-wide 
        3xlsm:text-3xl 2xlsm:text-5xl sm:text-6xl lg:text-8xl
    `}>
        {props.children}
    </h1>
}