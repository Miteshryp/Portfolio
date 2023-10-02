
export default function Button(props: {label: string, size?: string, children: any}) {
    
    return <button aria-label={props.label} className={`
        ${props.size ? props.size : 'w-32'}
        px-4 py-4
        hover:scale-110
        transition ease-in-out duration-300
        rounded-lg
        bg-bright-highlight
        flex flex-row
        justify-center
        items-center
        color-white
    `}>
        {props.children}
    </button>
}