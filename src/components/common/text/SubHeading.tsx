export default function SubHeading(props: any) {
	return (
		<h2
			className={`
        font-inter font-black
        text-lg 2xlsm:text-3xl md:text-4xl lg:text-5xl 
    `}
		>
			<div className={props.className}>{props.children}</div>
		</h2>
	);
}
