import logo from './assets/ravan.png';
import ailogo from './assets/version3/aiLogo.png';
import { useEffect, useState } from 'react';

const AnalyzCv = () => {
    const [showLogo1, setShowLogo1] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

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
        <div className={`flex items-center font-family-apple  justify-center h-full transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className='w-full max-w-[380px] text-center'>
                <div className={`relative w-[96px] h-[96px] mx-auto`}>
                    <img
                        src={logo}
                        alt=""
                        className={`absolute  top-0 left-0 right-0 mx-auto ${showLogo1 ? 'logo1 visible' : 'invisible'}`}
                        loading="lazy"
                    />
                    <img
                        src={ailogo}
                        alt=""
                        className={`absolute  top-0 left-0 right-0 mx-auto ${!showLogo1 ? 'logo2 visible' : 'invisible'}`}
                        loading="lazy"
                    />
                </div>
                <span
                    style={{
                        'fontFamily': 'system-ui !important'
                    }}
                    className="text-[30px] font-[600] font-family-apple  leading-9 text-[#101828]  mb-[8px]">Analyzing Your Resumes...</span>
                <p className='text-[16px] font-[400] mt-spacing-lg  text-[#475467]'>
                    Please wait while we analyze your resumes.
                </p>
            </div>
        </div>
    );
};

export default AnalyzCv;
