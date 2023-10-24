export default function Text(props: any) {
    return <h2 className={`
        text-3xl font-inconsolata font-bold
    `}>
        {props.children}
    </h2>
}