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
        <div className="flex flex-col gap-4 items-center justify-center">
            {/* header */}
            <div className="flex flex-col gap-6 items-center">
                <img loading="lazy" src={logoHi} alt="Logo" className="w-[48px] h-[48px]" />
                <div className="flex flex-col gap-3">
                    <div className="text-[#101828] text-[30px] font-[600] text-center">
                        Welcome Back!
                    </div>
                    <div className="text-[#475467] text-[16px] text-center">
                        Join the thousands of happy 🎉 job seekers <br /> and successful companies on Himate.az!
                    </div>
                </div>
            </div>
            {/* content */}
            <div className="flex flex-col  gap-6">
                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => setActiveMenu(1)}
                        className={`transition-all relative flex items-center gap-3 border-2  rounded-[10px] p-4 ${activeMenu === 1
                            ? 'border-green-500'
                            : 'border-gray-300'
                            }`}
                    >
                        <img loading="lazy" src={welcomeBack1} alt="Logo1" className="" />
                        <div>
                            <div className="text-[#101828] font-family-inter text-[14px] font-[500] text-left">
                                Rate My Resume
                            </div>
                            <div className="text-[#4D5761] font-family-inter text-[14px] text-left">
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
                        className={`transition-all relative  flex items-center gap-3 border-2 border-solid rounded-[10px] p-4 ${activeMenu === 2
                            ? 'border border-green-500'
                            : 'border border-gray-300'
                            }`}
                    >
                        <img src={welcomeBack2} alt="Logo2" />
                        <div>
                            <div className="text-[#101828] font-family-inter text-[14px] font-[500] text-left">
                                Rate Multiple Resumes at once
                            </div>
                            <div className="text-[#4D5761] font-family-inter text-[14px] text-left">
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
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => handleContinue(false)}
                            className="flex text-white bg-black justify-center font-family-inter
                        text-[16px] items-center font-[600] w-full px-16 py-2.5 rounded-md"
                        >
                            Continue
                        </button>
                        <button
                            onClick={() => handleContinue(true)}
                            className="flex text-black bg-white border font-family-inter border-black justify-center text-[16px] items-center w-full px-16 py-2.5 rounded-md"
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
