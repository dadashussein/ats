import { useLocation, useNavigate } from "react-router-dom";
import { HeartIcon, Loading2Icon, SearchIcon, SendMailIcon, StartIcon, UploadIcon, UserCheckIcon, WarningIcon } from "../assets/Icons";
import CandidateItem from "./CandidateItem";
import { useState } from "react";
import styled from 'styled-components';
import { generatePDF } from "../utils/generatePdf";
import axios from "axios";
import toast from "react-hot-toast";
import { useMediaQuery } from 'react-responsive';
import { nanoid } from "nanoid";
import { useEffect } from "react";
import Swal from 'sweetalert2'


const CandidateList = styled.div`
  overflow-y: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d7d7d7;
    border-radius: 10px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  padding: 10px 16px;
  border-bottom: 1px solid #d1d5db; 
  font-size: 12px; 
  color: #4D5761; 
  width: 100%; 
  justify-content: space-between; 
  align-items: center; 
`;

const SearchInput = styled.input`
  background-color: white  ;
  border: 1px solid #d1d5db  ; 
  padding: 8px;
  color: #6b7280  ; 
  font-size: 16px;
  border-radius: 6px;
  line-height: 1.5rem  ; 
  flex-grow: 1  ;
  white-space: nowrap  ;
  background: transparent  ;
  padding-left: 3rem  ;
  outline: none  ;
  
  
  &:focus {
    outline: none  ;
  }
`;


const EmailInput = styled.input`
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  font-size: 14px;
  width: 200px;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
`;

const MobileMetricGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const ReportButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 14px;
  border-radius: 6px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const ReportModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const AllResult = () => {
    const location = useLocation();
    const [isSending, setIsSending] = useState(false);
    const { data = [], title = "No Title Provided", resumes = [] } = location.state || {};
    const [search, setSearch] = useState("");
    const token = sessionStorage.getItem('token');
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const navigate = useNavigate();
    const [filteredCandidates, setFilteredCandidates] = useState([]);


    const forReport = data.map((item, index) => ({
        name: item.fullname || `Candidate ${index + 1}`,
        email: item.email || "No Email",
        skills: {
            missing: item.skills?.missings?.map(skill => ({ name: skill, color: "red" })) || [],
            okey: item.skills?.okey?.map(skill => ({ name: skill, color: "green" })) || []
        },
        experiences: {
            missing: item.experiences?.missings?.map(exp => ({ name: exp, color: "red" })) || [],
            okey: item.experiences?.okey?.map(exp => ({ name: exp, color: "green" })) || []
        },
        educations: {
            missing: item.educations?.missings?.map(edu => ({ name: edu, color: "red" })) || [],
            okey: item.educations?.okey?.map(edu => ({ name: edu, color: "green" })) || []
        },
        tools: {
            missing: item.tools?.missings?.map(tool => ({ name: tool, color: "red" })) || [],
            okey: item.tools?.okey?.map(tool => ({ name: tool, color: "green" })) || []
        },
        languages: {
            missing: item.languages?.missings?.map(lang => ({ name: lang, color: "red" })) || [],
            okey: item.languages?.okey?.map(lang => ({ name: lang, color: "green" })) || []
        },
        aiScore: item.percentage || 0,
        resume: resumes[index]?.file || null
    }));


    const [candidates, setCandidates] = useState(data.map((item, index) => ({
        id: nanoid(),
        name: item.fullname || `Candidate ${index + 1}`,
        email: item.email || "No Email",
        skills: {
            missing: item.skills?.missings?.map(skill => ({ name: skill, color: "red" })) || [],
            okay: item.skills?.okey?.map(skill => ({ name: skill, color: "green" })) || []
        },
        aiScore: item.percentage || 0,
        resume: resumes[index]?.file || null
    })));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");




    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        setFilteredCandidates(candidates.filter(candidate =>
            candidate.name.toLowerCase().includes(search.toLowerCase())
        ));
    }, [candidates, search]);


    const deleteResume = (idToDelete) => {
        setFilteredCandidates(prevCandidates => prevCandidates.filter(candidate => candidate.id !== idToDelete));
    };


    const handleSendReportClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEmail("");
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSendEmail = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                title: "Please enter a valid email address",
                icon: "error"
            });
            return;
        }

        const pdfBlob = await generatePDF(forReport);
        const formData = new FormData();
        formData.append('files', pdfBlob, 'candidate_report.pdf');

        try {
            setIsSending(true);
            const response = await axios.post(`https://extension.dadashussein.tech/user/send-email?email=${email}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                Swal.fire({
                    title: "Report sent successfully!",
                    text: email,
                    icon: "success"
                });
                setIsSending(false);
            }

        } catch (error) {
            Swal.fire({
                title: "Failed to send report",
                text: error.message,
                icon: "error"
            });
        }
        handleCloseModal();
    };

    const handleReturnHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col gap-[32px] h-full py-4   px-4 md:px-0">


            {isMobile ? (
                <MobileMetricGroup>
                    <div className="metric-group flex gap-2">
                        <span><UserCheckIcon /></span>
                        <div>
                            <span className="text-[#4D5761] text-[14px]">Total Candidates: <span className="font-[500] text-[14px] text-[#111927]">{candidates.length}</span></span>
                            <span className="flex items-center gap-2">
                                <span className="text-[14px] text-[#079455] flex items-center gap-2"><UploadIcon /> <span>100%</span></span>
                                <span className="font-[500] text-[14px] text-[#4D5761]">Uploaded</span>
                            </span>
                        </div>
                    </div>
                    <div className="metric-group  flex gap-2 min-w-[300px] py-[7px] px-spacing-2-xl ">
                        <span><StartIcon /></span>
                        <div>
                            <span className="text-[14px]">Candidates Rated: <span className="font-[500] text-[14px]">{candidates.length}</span></span>
                            <span className="flex items-center gap-2">
                                <span className="text-[#F04438] text-[14px] flex items-center gap-2"><WarningIcon /> <span>0 CV</span></span>
                                <span className="font-[500] text-[14px] text-[#4D5761]">Not Processed</span>
                            </span>
                        </div>
                    </div>
                    <div className="metric-group  flex gap-2 min-w-[300px] py-[7px] px-spacing-2-xl">
                        <div><HeartIcon /></div>
                        <div>
                            <span className="text-[14px]">Mates: <span className="font-[500] text-[14px]">{candidates.filter(c => c.aiScore >= 80).length}</span></span>
                            <span className="flex items-center gap-2">
                                <span className="text-[#4D5761] flex text-[14px] items-center gap-2">Candidates over <span>80%</span></span>
                            </span>
                        </div>
                    </div>
                </MobileMetricGroup>
            ) : (
                <div className="metric-container items-stretch justify-between flex flex-wrap gap-4">
                    <div className="metric-group flex gap-2 min-w-[300px] ">
                        <span><UserCheckIcon /></span>
                        <div className="">
                            <span className=" text-[#4D5761] text-[14px]">Total Candidates: <span className="font-[500] text-[14px] text-[#111927]">{candidates.length}</span></span>
                            <span className="flex items-center gap-2">
                                <span className=" text-[14px] text-[#079455] flex items-center gap-2"><UploadIcon /> <span>100%</span></span>
                                <span className="font-[500] text-[14px] text-[#4D5761]">Uploaded</span>
                            </span>
                        </div>
                    </div>
                    <div className="metric-group  flex gap-2 min-w-[300px] py-[7px] px-spacing-2-xl ">
                        <span><StartIcon /></span>
                        <div>
                            <span className="text-[14px]">Candidates Rated: <span className="font-[500] text-[14px]">{candidates.length}</span></span>
                            <span className="flex items-center gap-2">
                                <span className="text-[#F04438] text-[14px] flex items-center gap-2"><WarningIcon /> <span>0 CV</span></span>
                                <span className="font-[500] text-[14px] text-[#4D5761]">Not Processed</span>
                            </span>
                        </div>
                    </div>
                    <div className="metric-group  flex gap-2 min-w-[300px] py-[7px] px-spacing-2-xl">
                        <div><HeartIcon /></div>
                        <div>
                            <span className="text-[14px]">Mates: <span className="font-[500] text-[14px]">{candidates.filter(c => c.aiScore >= 80).length}</span></span>
                            <span className="flex items-center gap-2">
                                <span className="text-[#4D5761] flex text-[14px] items-center gap-2">Candidates over <span>80%</span></span>
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row items-center transition-all justify-between w-full">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <h1 className="text-[18px] font-[600]">Candidates</h1>
                    <span className="font-[400] text-[14px] text-[#4D5761]">Candidates who applied this position.</span>
                </div>
                <div className="flex flex-col md:flex-row gap-spacing-lg w-full md:w-1/2 items-center md:items-end justify-center md:justify-end">
                    <button
                        onClick={handleReturnHome}
                        className="bg-gray-200 max-h-[40px] flex font-[600] items-center rounded-[6px] gap-spacing-xs text-black py-[10px] px-[14px] mb-2 md:mb-0 mr-2"
                    >
                        <span className="text-[14px]">Return Home</span>
                    </button>
                    <ReportButton onClick={handleSendReportClick}>
                        <SendMailIcon />
                        <span className="text-[14px]">Mail me Reports</span>
                    </ReportButton>
                </div>
            </div>
            <div className="border border-gray-200 rounded-[8px] pt-[20px]">
                <div className="flex items-center gap-2 px-4 md:px-0">
                    <div className="relative flex w-full md:w-auto md:ml-4 gap-2 flex-col">
                        <span className="text-[14px] text-[#384250]">Search</span>
                        <span className="absolute left-2 top-9"><SearchIcon /></span>
                        <SearchInput
                            onChange={handleSearch}
                            type="text"
                            placeholder="Search"
                            className="w-full md:w-auto"
                        />
                    </div>
                </div>
                <div>
                    <SearchContainer className="hidden md:flex">
                        <h2 className="font-[500] text-[12px] w-3/6">Candidate</h2>
                        <h2 className="font-[500] text-[12px] w-3/6 ">Skills (Analyzed)</h2>
                        <h2 className="font-[500] text-[12px] w-2/6 ">AI Score</h2>
                    </SearchContainer>

                    <CandidateList id="pdf-content">
                        {filteredCandidates.length > 0 ? (
                            filteredCandidates.map((candidate, index) => (
                                <CandidateItem
                                    key={candidate.email}
                                    name={candidate.name}
                                    email={candidate.email}
                                    skills={[...candidate.skills.missing, ...candidate.skills.okay]}
                                    aiScore={candidate.aiScore}
                                    isGray={index % 2 === 1}
                                    resume={candidate.resume}
                                    onDelete={() => deleteResume(candidate.id)}
                                    isMobile={isMobile}
                                />
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-[14px] text-gray-500">No candidates found.</p>
                            </div>
                        )}
                    </CandidateList>
                </div>
            </div>

            <ModalOverlay isVisible={isModalOpen} onClick={handleCloseModal} />
            <ReportModal isVisible={isModalOpen}>
                <h2 className="text-xl font-bold mb-4">Send Report</h2>
                <p className="mb-4">Enter your email to receive the report:</p>
                <EmailInput
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="w-full mb-4"
                />
                <div className="flex justify-end gap-2">
                    <button
                        onClick={handleCloseModal}
                        className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSendEmail}
                        className="px-4 py-2 border border-gray-300  rounded hover:bg-green-500"
                        disabled={isSending}
                    >
                        {isSending ? (
                            <div className="animate-spin ">
                                <Loading2Icon />
                            </div>
                        ) : (
                            "Send"
                        )}
                    </button>
                </div>
            </ReportModal>
        </div>
    );
};

export default AllResult;