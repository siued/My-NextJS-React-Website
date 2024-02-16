export default function Green_Div(props) {
    return (
        <div className={"p-10 bg-[#037971] rounded-xl text-xl m-5 " + (props.className  ? props.className : null)}>
            {props.children}
        </div>
    )
}