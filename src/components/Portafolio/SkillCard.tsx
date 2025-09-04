interface Props{
    image: React.JSX.Element;
    title:string;
    description:string;
}

const SkillCard = ({image ,title ,description}:Props) => {
    return(
        <div className="bg-stone-50 rounded-xl border-2 border-[#F2CA94] shadow hover:shadow-lg transition">
            <div className="flex justify-center p-3">
                {image}
            </div>
            <div className="p-4 text-center">
            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            </div>
        </div>
    )
}

export default SkillCard