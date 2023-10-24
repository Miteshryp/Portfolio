export default function Text(props: any) {
    return <div className={`
        font-bold sm:text-lg md:text-2xl font-montserrat text-justify
    `}>
        <div className={props.className}>
            {props.children}
        </div>
    </div>
}