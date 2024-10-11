const SkillTooltip = ({ skills, getSkillColor }) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-1">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className={`py-1 px-4 text-[12px] font-semibold rounded-full ${getSkillColor(skill.color)} max-w-[150px] truncate`}
                >
                    {skill.name}
                </div>
            ))}
        </div>
    );
};

export default SkillTooltip;
