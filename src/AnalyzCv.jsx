import logo from './assets/ravan.png';
import ailogo from './assets/version3/aiLogo.png';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const AnalyzCv = () => {
    const [showLogo1, setShowLogo1] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        const interval = setInterval(() => {
            setShowLogo1(prev => !prev);
        }, 600);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 50);
    }, []);

    return (
        <div className={`flex items-center justify-center h-screen transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className='w-full max-w-[380px] text-center flex flex-col items-center px-4 md:px-0'>
                <div className={`relative w-[58px] h-[58px] mb-4`}>
                    <img
                        src={logo}
                        alt=""
                        className={`absolute w-[40px] top-0 left-0 right-0 mx-auto ${showLogo1 ? 'logo1 visible' : 'invisible'}`}
                        loading="lazy"
                    />
                    <img
                        src={ailogo}
                        alt=""
                        className={`absolute w-[40px] top-0 left-0 right-0 mx-auto ${!showLogo1 ? 'logo2 visible' : 'invisible'}`}
                        loading="lazy"
                    />
                </div>
                <span className={`text-[24px] md:text-[30px] font-[600] text-[#101828] mb-2`}>
                    Analyzing Your Resumes...
                </span>
                <p className='text-[14px] md:text-[16px] font-[400] text-[#475467]'>
                    Please wait while we analyze your resumes.
                </p>
            </div>
        </div>
    );
};

export default AnalyzCv;
