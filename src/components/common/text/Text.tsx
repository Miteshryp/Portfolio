export default function Text(props: any) {
    return <div className={`
        font-bold font-montserrat
        text-justify
        no-view:hidden 3xlsm:block sm:text-lg md:text-2xl 
        break-words
    `}>
        <div className={props.className}>
            {props.children}
        </div>
    </div>
}