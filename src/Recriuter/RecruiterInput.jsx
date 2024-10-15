import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckBox from '../components/CheckBox';
import SpinLoadingButton from '../components/Loading/SpinLoading';
import useResume from '../useResume';
import RecriuterUpload from './RecriuterUpload';
import AnalyzCv from '../AnalyzCv';
import logo from '../assets/version3/logo.png';
import TextArea from '../components/TextArea';
import { FaUpload, FaFileAlt } from 'react-icons/fa';

const REQUEST_ID = 'https://extension.dadashussein.tech/cv/multiple';
const REQUEST_REPORT = `https://extension.dadashussein.tech/report/hr`;

const RecruiterInput = ({ job }) => {
  const { title } = job || {};
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [submissionStatus, setSubmissionStatus] = useState('idle')
  const { severalResume } = useResume();
  const token = sessionStorage.getItem('token');




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
        params.append("vacancy_link", 'google.com');
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
        <>
          <div className="hidden lg:flex flex-col w-full gap-8 lg:flex-row items-start justify-center    p-8">
            <div className="w-full lg:w-1/2 overflow-y-auto rounded-lg border  bg-white  p-8 mb-8 ">
              <div className="flex items-start justify-start mb-6">
                <img src={logo} alt="Logo" className="w-12 h-12 mr-4" loading="lazy" />
              </div>

              <div className="mb-6">
                <RecriuterUpload />
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <TextArea
                  placeholder="Enter job description here"
                  id="description"
                  name="description"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[150px]"
                />
              </div>
              <div className="flex items-center justify-between">
                <CheckBox
                  name="displayNumber"
                  label="I agree to the terms and conditions"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <button
                  onClick={handleSubmit}
                  disabled={!isChecked || !severalResume.length || !description}
                  className={`flex justify-center items-center gap-2 text-lg font-semibold
                  px-6 py-3 rounded-lg transition-colors duration-300
                  ${isChecked ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-300 text-gray-500'}`}
                >
                  {loading ? <SpinLoadingButton /> : (
                    <>
                      <FaFileAlt />
                      Rate Resumes
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="w-1/2 hidden lg:block max-h-screen overflow-y-auto  bg-white border rounded-lg ">
              <div className="rounded-lg  p-8">
                <h2 className="text-2xl font-bold mb-6">Uploaded Resumes</h2>
                {severalResume.length > 0 ? (
                  <ul className="space-y-4">
                    {severalResume.map((resume, index) => (
                      <li key={index} className="flex items-center bg-gray-100 p-4 rounded-lg">
                        <FaFileAlt className="text-blue-600 mr-4" size={24} />
                        <span className="text-lg">{resume.file.name}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-100 rounded-lg">
                    <FaUpload className="text-gray-400 mb-4" size={48} />
                    <p className="text-xl text-gray-600">No resumes uploaded yet</p>
                    <p className="text-gray-500 mt-2">Upload resumes to see them listed here</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={`flex lg:hidden flex-col mt-16 sm:mt-20 md:mt-24 w-full max-w-[320px] sm:max-w-[350px] md:max-w-[380px] 
  mx-auto px-4 sm:px-6 items-center justify-center 
  transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center justify-center mb-2 text-center">
              <img src={logo} alt="" className="w-8 h-8 sm:w-10 sm:h-10" loading="lazy" />
              <div className='flex mt-1 flex-col gap-2'>
                <h1 className="text-xl sm:text-2xl md:text-[27px] font-bold">Future of AI Saying Hi </h1>
                <p className='text-xs sm:text-sm md:text-[14px] text-[#475467]'>
                  Don&apos;t Let Your Resume Be a Snoozefest: Upload & Rate in 1 Click!
                </p>
              </div>
            </div>
            <div className="w-full mb-2 mt-3">
              <RecriuterUpload />
              <div className="flex flex-col my-2 w-full">
                <TextArea
                  placeholder="Enter job description here"
                  id="description"
                  name="description"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <CheckBox
                name="displayNumber"
                label="true"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <button
                onClick={handleSubmit}
                disabled={!isChecked || !severalResume.length || !description}
                className={`flex justify-center items-center gap-1 text-sm sm:text-[14px] md:text-[16px] font-[600]
           w-full h-[36px] sm:h-[38px] md:h-[40px] my-[12px] sm:my-[14px] md:my-[16px] border 
           ${isChecked ? 'bg-black text-white' : 'bg-gray-300 text-gray-500'} rounded-[6px]`}
              >
                {loading ? <SpinLoadingButton /> : "Rate resumes"}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RecruiterInput;
