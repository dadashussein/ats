import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckBox from '../components/CheckBox';
import SpinLoadingButton from '../components/Loading/SpinLoading';
import useResume from '../useResume';
import RecriuterUpload from './RecriuterUpload';
import AnalyzCv from '../AnalyzCv';
import logo from '../assets/version3/logo.png';


const REQUEST_ID = 'https://extension.dadashussein.tech/cv/multiple';
const REQUEST_REPORT = `https://extension.dadashussein.tech/report/hr`;

const RecruiterInput = ({ job }) => {
  const { title, description, link } = job || {};
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [submissionStatus, setSubmissionStatus] = useState('idle')
  const { severalResume } = useResume();
  const token = sessionStorage.getItem('token');

  const isLinkedin = !!link && link.includes('linkedin');



  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 50);
  }, []);
  

  const sendFilesForIdentification = async () => {
    try {
      const formData = new FormData();
      severalResume.forEach(resume => {
        formData.append("files", resume.file, resume.file.name);
      });

      const response = await axios.patch(REQUEST_ID, formData, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        const responseData = response.data;
        return responseData.cv_ids;
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setSubmissionStatus('pending');
      const cvIds = await sendFilesForIdentification();
      if (cvIds && cvIds.length > 0) {
        const params = new URLSearchParams();
        params.append("job_description", description);
        params.append("vacancy_link", link);
        cvIds.forEach(id => params.append("cv_ids", id));

        const response = await axios.post(REQUEST_REPORT, params, {
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setSubmissionStatus('fulfilled');
          navigate('/result', { state: { data: response.data, title, resumes: severalResume } });
        }
        if (response.status === 400) {
          setSubmissionStatus('rejected');
          console.log(response.data);
        }
      } else {
        throw new Error('No CV IDs returned');
      }
    } catch (error) {
      console.error(error);
      setSubmissionStatus('idle');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {submissionStatus === 'pending' ? (
        <AnalyzCv />
      ) : (
        <div className={`flex flex-col items-center justify-center h-full 
        transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center justify-center text-center">
            <img src={logo} alt="" className="min-w-10 min-h-10 mb-4" loading="lazy" />
            <div className='flex  flex-col gap-5 max-w-[380px]'>
              <h1 className="text-[30px] font-bold">Future of AI Saying Hi </h1>
              <p className='text-[16px] text-[#475467]'>
                Don&apos;t Let Your Resume Be a Snoozefest: Upload & Rate in 1 Click!
              </p>
            </div>
          </div>
          <div className="w-full max-w-[380px] mt-3">
            <RecriuterUpload />
            {
              !isLinkedin && (
                <div className="flex items-center my-[16px] gap-1 w-full">
                  <CheckBox
                    name="displayNumber"
                    label="true"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                </div>
              )
            }
            <button
              onClick={handleSubmit}
              disabled={!isLinkedin && (!isChecked || !severalResume.length)}
              className={`flex justify-center items-center gap-1 text-[16px] font-[600] w-full h-[40px] my-[16px] border ${isChecked || isLinkedin ? 'bg-black text-white' : 'bg-gray-300 text-gray-500'} rounded-[6px]`}
            >
              {loading ? <SpinLoadingButton /> : "Rate resumes"}
            </button>
            {isLinkedin && (
              <p className="text-[12px] text-center text-gray-500">
                By clicking "Rate resumes", you agree to our <Link to="/terms" className="underline">terms and conditions</Link>.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RecruiterInput;
