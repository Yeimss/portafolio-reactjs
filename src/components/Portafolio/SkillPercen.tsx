interface Props{
    text:string,
    percent:number
}

const SkillPercent = ({ text, percent }:Props) => {
    return (
        <div className={`bg-gray-300 w-full rounded-full h-5`}>
            <div
                className={`bg-amber-500 h-5 rounded-full text-center text-xs font-medium text-white leading-5`}
                style={{ width: `${percent}%` }}
            >
                {text}
            </div>
        </div>
    )
}
export default SkillPercent