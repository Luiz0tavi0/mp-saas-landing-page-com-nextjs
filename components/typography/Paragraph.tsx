type ParagraphParams = {
    text: string

}
export default function Paragraph({ text }: ParagraphParams) {
    return (
        <p className="text-[12px] leading-[15px] font-normal tracking-[0px]
        text-[#6B7280]">
            {text}
        </p>
    )
}


