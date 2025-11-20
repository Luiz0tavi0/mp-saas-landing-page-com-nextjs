type TitleParams = {
    text: string

}
export default function Title({ text }: TitleParams) {
    return (
        <h1 className="text-[25px] leading-[45px] font-bold tracking-[-1px]">
            {text}
        </h1>

    )
}


