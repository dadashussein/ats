import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import welcomeBack1 from './assets/modul01.png';
import welcomeBack2 from './assets/modul02.png';
import logoHi from './assets/version3/logo.png';
import axios from "axios";

const ModalPopup = () => {
    var [activeMenu, setActiveMenu] = useState(1);
    const [showPreference, setShowPreference] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        const preference = sessionStorage.getItem('showWelcomeScreen');
        if (preference === 'false') {
            routeChange();
        }
    }, []);

    const routeChange = () => {
        let path = 'candidateInput';
        if (activeMenu === 2) path = 'recruiterInput';
        const takeToken = async () => {
            const isHr = activeMenu === 2 ? true : false;
            const response = await axios.post(`https://extension.dadashussein.tech/user/create?is_hr=${isHr}`, {});
            if (response.status === 200) {
                const token = response.data.access_token;
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('is_hr', isHr);
            }
        }
        takeToken();
        navigate(path);
    };
    const handleContinue = (dontShowAgain) => {
        if (dontShowAgain) {
            sessionStorage.setItem('showWelcomeScreen', 'false');

        }
        routeChange();
    };

    return (
        <div className="flex flex-col gap-4 items-center justify-center p-4 sm:p-6 md:p-8">
            {/* header */}
            <div className="flex flex-col gap-4 sm:gap-6 items-center">
                <img loading="lazy" src={logoHi} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-[48px] md:h-[48px]" />
                <div className="flex flex-col gap-2 sm:gap-3">
                    <div className="text-[#101828] text-2xl sm:text-[26px] md:text-[30px] font-[600] text-center">
                        Welcome Back!
                    </div>
                    <div className="text-[#475467] text-sm sm:text-[14px] md:text-[16px] text-center">
                        Join the thousands of happy 🎉 job seekers <br className="hidden sm:inline" /> and successful companies on Himate.az!
                    </div>
                </div>
            </div>
            {/* content */}
            <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-md">
                <div className="flex flex-col gap-3 sm:gap-4">
                    <button
                        onClick={() => setActiveMenu(1)}
                        className={`transition-all relative flex items-center gap-2 sm:gap-3 border-2 rounded-[10px] p-3 sm:p-4 ${
                            activeMenu === 1 ? 'border-green-500' : 'border-gray-300'
                        }`}
                    >
                        <img loading="lazy" src={welcomeBack1} alt="Logo1" />
                        <div>
                            <div className="text-[#101828] font-family-inter text-xs sm:text-sm md:text-[14px] font-[500] text-left">
                                Rate My Resume
                            </div>
                            <div className="text-[#4D5761] font-family-inter text-xs sm:text-sm md:text-[14px] text-left">
                                Personalized rating based on Vacancy
                            </div>
                        </div>
                        <div
                            className={`absolute right-2 w-4 h-4 rounded-full transition-all ${activeMenu === 1
                                ? 'border-4 border-green-500'
                                : 'border border-gray-300'
                                }`}
                        ></div>
                    </button>
                    <button
                        onClick={() => setActiveMenu(2)}
                        className={`transition-all relative  flex items-center gap-2 sm:gap-3 border-2 border-solid rounded-[10px] p-3 sm:p-4 ${
                            activeMenu === 2 ? 'border-green-500' : 'border-gray-300'
                        }`}
                    >
                        <img src={welcomeBack2} alt="Logo2" className=" sm:w-auto sm:h-auto" />
                        <div>
                            <div className="text-[#101828] font-family-inter text-xs sm:text-sm md:text-[14px] font-[500] text-left">
                                Rate Multiple Resumes at once
                            </div>
                            <div className="text-[#4D5761] font-family-inter text-xs sm:text-sm md:text-[14px] text-left">
                                Hey Recruiter! Evaluate top candidates.
                            </div>
                        </div>
                        <div
                            className={`absolute right-2 w-4 h-4 rounded-full transition-all ${activeMenu === 2
                                ? 'border-4 border-green-500'
                                : 'border border-gray-300'
                                }`}
                        ></div>
                    </button>

                </div>
                {showPreference && (
                    <div className="flex flex-col gap-2 w-full">
                        <button
                            onClick={() => handleContinue(false)}
                            className="flex text-white bg-black justify-center font-family-inter
                            text-sm sm:text-[14px] md:text-[16px] items-center font-[600] w-full px-4 sm:px-8 md:px-16 py-2 sm:py-2.5 rounded-md"
                        >
                            Continue
                        </button>
                        <button
                            onClick={() => handleContinue(true)}
                            className="flex text-black bg-white border font-family-inter border-black justify-center 
                            text-sm sm:text-[14px] md:text-[16px] items-center w-full px-4 sm:px-8 md:px-16 py-2 sm:py-2.5 rounded-md"
                        >
                            Continue and don&apos;t show again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ModalPopup;
