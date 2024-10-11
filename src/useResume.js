import { useState } from 'react';
import { useResumeContext } from './ResumeContext';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const useResume = () => {
  const { resume, setResume } = useResumeContext();
  const { severalResume, setSeveralResume } = useResumeContext();
  const [cvProgress, setCvProgress] = useState({});

  const [progress, setProgress] = useState(false);

  //only one resume
  const uploadResume = async file => {
    setProgress(0);
    try {
      setProgress(0);
      setResume(file);
      setProgress(100);
    } catch (error) {
      console.error(error);
    }
  };

  const clearResume = () => {
    setResume(null);
    setSeveralResume([]);
    setProgress(false);
  };

  const processMultipleCVs = async (cvFiles) => {
    const totalSteps = 100;
    for (let fileObj of cvFiles) {
      setCvProgress(prev => ({ ...prev, [fileObj.id]: 0 }));
      for (let step = 0; step <= totalSteps; step++) {
        await delay(1);
        setCvProgress(prev => ({ ...prev, [fileObj.id]: (step / totalSteps) * 100 }));
      }
    }
  };



  return {
    resume,
    progress,
    processMultipleCVs,
    cvProgress,
    severalResume,
    setSeveralResume,
    uploadResume,
    clearResume
  };
};

export default useResume;
