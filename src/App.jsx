import { Route, Routes } from 'react-router-dom';
import { ResumeProvider } from './ResumeContext.jsx';
import AnalyzCv from './AnalyzCv.jsx';
import AllResult from './Recriuter/AllResult.jsx';
import ModalPopup from './ModalPopup.jsx';
import CandidateInput from './Candidate/CandidateInput.jsx';
import RecruiterInput from './Recriuter/RecruiterInput.jsx';
import Terms from './components/Terms.jsx';

const App = () => {
  const jobDescriptions = [];
  return (
    <div className='flex justify-center   h-screen'>
      <ResumeProvider>
        <Routes>
          <Route path="/" element={<ModalPopup />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/candidateInput" element={<CandidateInput job={jobDescriptions} />} />
          <Route path="/recruiterInput" element={<RecruiterInput job={jobDescriptions} />} />
          <Route path="/analyzCv" element={<AnalyzCv />} />
          <Route path="/result" element={<AllResult />} />
        </Routes>
      </ResumeProvider>
    </div>
  );
};

export default App;
