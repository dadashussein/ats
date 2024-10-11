import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { DownloadIcon, TrashIcon } from "../assets/Icons";
import SkillTooltip from './SkillTooltip';
import styled from 'styled-components';
import avatar from '../assets/avata.png';

const CandidateItem = ({ name, email, skills, aiScore, isGray, resume, onDelete, isGlorri }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const skillsToShowCount = 2;
    const getSkillColor = (color) => {
        switch (color) {
            case 'red': return 'bg-red-100 text-red-600 border border-red-300';
            case 'green': return 'bg-green-100 text-green-600 border border-green-300';
            default: return 'bg-gray-100 text-gray-600 border border-gray-300';
        }
    };
    const handleDownload = () => {
        if (resume) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(resume);
            link.download = resume.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const missingSkills = skills.filter(skill => skill.color === 'red');
    const okaySkills = skills.filter(skill => skill.color === 'green');
    const visibleMissingSkills = missingSkills.slice(0, skillsToShowCount);
    const visibleOkaySkills = okaySkills.slice(0, skillsToShowCount);
    const hiddenSkills = [
        ...missingSkills.slice(skillsToShowCount),
        ...okaySkills.slice(skillsToShowCount)
    ];
    const hiddenSkillsCount = hiddenSkills.length;

    const Container = styled.div`
  position: relative;
  border-top: ${({ first }) => (first ? '1px solid' : 'none')};
  border-bottom: 1px solid #E5E7EB;
  background-color: ${({ isGray }) => (isGray ? '#f9fafb' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ isGlorri }) => isGlorri ? '10px 12px' : '16px'};
  width: 100%;
`;

    return (
        <Container isGlorri={isGlorri} isGray={isGray} className='last:rounded-[8px]'>
            <div className="w-3/6 flex items-center">
                <img className='w-[40px] h-[40px] rounded-full mr-[12px]' src={avatar} alt="mahho" />
                <div>
                    <h3 className="font-[500] text-[14px]">{name}</h3>
                    <p className="text-[14px] text-[#4D5761]">{email}</p>
                </div>
            </div>
            <div className="w-3/6 flex flex-wrap items-center gap-2 relative">
                {visibleMissingSkills.map((skill, index) => (
                    <span
                        key={index}
                        className={`py-1 px-4 text-[12px] font-semibold rounded-full ${getSkillColor(skill.color)} max-w-[150px] truncate`}
                        title={skill.name}
                    >
                        {skill.name}
                    </span>
                ))}
                {visibleOkaySkills.map((skill, index) => (
                    <span
                        key={index}
                        className={`py-[4px] px-[16px] text-[12px] font-semibold rounded-full ${getSkillColor(skill.color)} max-w-[150px] truncate`}
                        title={skill.name}
                    >
                        {skill.name}
                    </span>
                ))}
                {hiddenSkillsCount > 0 && (
                    <>
                        <button
                            data-tooltip-id="skills-tooltip"
                            data-tooltip-content={hiddenSkills.map(skill => skill.name).join(', ')}
                            className="text-[#384250] border py-1 px-4 rounded-full border-gray-300 text-[12px] font-semibold"
                        >
                            +{hiddenSkillsCount}
                        </button>
                        <Tooltip id="skills-tooltip" place="top">
                            <SkillTooltip getSkillColor={getSkillColor} skills={hiddenSkills} />
                        </Tooltip>
                    </>
                )}
            </div>
            <div className="w-2/6 flex items-center justify-end gap-4">
                <div className="flex items-center w-full max-w-[200px]">
                    <div className="w-full h-2 bg-gray-200 rounded-full mr-2">
                        <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: `${aiScore}%` }}
                        ></div>
                    </div>
                    <span className="text-[14px] whitespace-nowrap">{aiScore}%</span>
                </div>
                <div className="flex gap-2">
                    {resume && (
                        <>
                            <button className="text-gray-500 hover:text-gray-700"
                                onClick={handleDownload}>
                                <DownloadIcon />
                            </button>
                            <button
                                onClick={onDelete}
                                className="text-gray-500 hover:text-gray-700">
                                <TrashIcon />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default CandidateItem;
