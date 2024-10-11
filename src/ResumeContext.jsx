import { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resume, setResume] = useState(null);
  const [severalResume, setSeveralResume] = useState([]);
  const [resumeData, setResumeData] = useState(null);

  return <ResumeContext.Provider value={{ resume, setResume, severalResume, setSeveralResume }}>{children}</ResumeContext.Provider>;
};

export const useResumeContext = () => useContext(ResumeContext);
