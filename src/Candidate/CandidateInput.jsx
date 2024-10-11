import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckBox from '../components/CheckBox';
import SpinLoadingButton from '../components/Loading/SpinLoading';
import useResume from '../useResume';
import UploadCv from '../UploadCv';
import AnalyzCv from '../AnalyzCv';
import TextArea from '../components/TextArea';

const REQUEST_ID = 'https://extension.dadashussein.tech/cv/upload';
const REQUEST_REPORT = `https://extension.dadashussein.tech/report`;


const CandidateInput = ({ job }) => {
    const { title, link } = job || {};
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('idle')
    const navigate = useNavigate();
    const { resume } = useResume();
    const token = sessionStorage.getItem('token');
    const isLinkedin = !!link && link.includes('linkedin');

    const [description, setDescription] = useState('');

    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 50);
    }, []);

    const sendFilesForIdentification = async () => {
        try {
            const formData = new FormData();
            formData.append("file", resume);
            const response = await axios.patch(REQUEST_ID, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.status === 201) {
                return response.data.cv_id;
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
            setTimeout(async () => {
                const formData = new FormData();
                formData.append("job_description", description);
                formData.append("vacancy_link", link);
                const cv_id = await sendFilesForIdentification();
                formData.append("cv_id", cv_id);
                const response = await axios.post(REQUEST_REPORT, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    }
                });
                if (response.status === 200) {
                    setSubmissionStatus('fulfilled');
                    navigate('/result', { state: { data: response.data, title } });
                }
            }, 300);

        } catch (error) {
            console.error(error);
            setSubmissionStatus('idle');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='h-full font-family-inter'>
            {submissionStatus === 'pending' ? (
                <AnalyzCv />
            ) : (
                <div className={`flex flex-col items-center justify-center h-full 
                transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-full max-w-[380px] space-y-4">
                        <div>
                            <UploadCv />
                        </div>
                        <div className="flex flex-col items-stretch w-full">
                            <TextArea
                                placeholder="Enter job description here"
                                id="description"
                                name="description"
                                type="text"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <p className="text-[12px] text-center text-gray-500">
                            By clicking "Rate my Resume", you agree to our <Link to="/terms" className="underline">terms and conditions</Link>.
                        </p>
                        <button
                            onClick={handleSubmit}
                            disabled={!isLinkedin && (!isChecked || !resume)}
                            className={`flex justify-center items-center gap-1 text-[16px] font-[600] w-full h-[40px] border ${isChecked || isLinkedin ? 'bg-black text-white' : 'bg-gray-300 text-gray-500'} rounded-[6px]`}
                        >
                            {loading ? <SpinLoadingButton /> : "Rate my Resume"}
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
};

export default CandidateInput;
