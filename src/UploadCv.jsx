import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { TrashIcon } from './assets/Icons';
import useResume from './useResume';
import logo from './assets/version3/logo.png';
import pdfIcon from './assets/version3/pdfIcon.png';
import docIcon from './assets/version3/doc.png';
import downlaodicon from './assets/version3/downloadicon.png'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const UploadCv = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    resume, uploadResume, clearResume, progress,
  } = useResume();

  const types = [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
  ];

  const onDrop = useCallback(async (acceptedFiles) => {
    const selected = acceptedFiles[0];
    if (selected && types.includes(selected.type)) {
      setLoading(true);
      uploadResume(selected);
      setError(null);
      await delay(1000);
      setLoading(false);
    } else {
      uploadResume(null);
      setError('Please select a valid file type (pdf, doc, docx)');
    }
  }, [uploadResume]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/msword': ['.doc'],
    },
    onDrop,
    maxFiles: 1,
  });

  const ConverToKb = (size) => (size / 1000).toFixed(2);

  return (
    <div className='flex flex-col items-center justify-center font-family-inter'>
      <div className="flex flex-col items-center justify-center text-center">
        <img src={logo} alt="" className="min-w-10 min-h-10 mb-4" loading="lazy" />
        <div className='flex flex-col gap-5'>
          <h1 className="text-[30px] font-bold">Future of AI Saying Hi </h1>
          <p className='text-[16px] text-[#475467]'>
            Don&apos;t Let Your Resume Be a Snoozefest: Upload & Rate in 1 Click!
          </p>
        </div>
      </div>
      <div
        {...getRootProps()}
        className="items-center w-full mt-[3rem] cursor-pointer relative self-center border border-[color:var(--Colors-Border-border-secondary,#EAECF0)] bg-white flex  max-w-full flex-col px-6 py-4 rounded-xl border-solid max-md:px-5"
      >
        <input accept={types} {...getInputProps()} />
        <img
          loading="lazy"
          src={downlaodicon}
          className="aspect-square object-contain object-center w-[40px] h-[40px] justify-center items-center shadow-sm overflow-hidden"
          alt="Upload Icon"
        />
        <div className="justify-center items-center self-stretch flex flex-col mt-3 px-16">
          <div className="flex items-stretch leading-[20px] gap-1">
            <span className="text-green-500 text-[14px] font-semibold grow whitespace-nowrap">
              Click to upload
            </span>
            <span className="text-slate-600 text-[14px]  grow whitespace-nowrap">
              or drag and drop
            </span>
          </div>
        </div>
        <div className="self-stretch text-slate-600 leading-[20px] font-[400] text-center text-[12px]">
          PDF, DOC or DOCX, (max. file size 5mb)
        </div>
      </div>
      {progress && (
        <div className=" w-full  border border-gray-150
         bg-white flex max-w-full flex-col justify-center mt-4 p-4 rounded-xl">
          <div className="flex items-center justify-between gap-3">
            <img
              alt="Resume file"
              loading="lazy"
              src={
                resume && resume.type === 'application/pdf'
                  ? pdfIcon
                  : docIcon
              }
              className="aspect-square object-contain object-center 
              w-[32px] overflow-hidden h-[40px] shrink-0 max-w-full"
            />
            <div className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
              <div className="overflow-hidden flex justify-between
               font-medium leading-5 ">
                <div className='flex flex-col gap-2'>
                  <p className="text-slate-700 text-[14px] max-w-[310px]
                  font-[500] leading-5">
                    {(resume && resume.name)}
                  </p>
                  <div className="overflow-hidden
                  text-slate-600 font-[400] text-ellipsis text-[14px] leading-5
                   ">
                    {(resume && ConverToKb(resume.size)) || '124'} KB
                    {error && <div className="error">{error}</div>}
                  </div>
                </div>
                <div className="flex justify-end gap-1 items-center">
                  <div className="w-10 cursor-pointer h-10 flex items-center 
                  justify-center hover:bg-[#f9fafb] rounded-[6px]">
                    <TrashIcon
                      onClick={() => {
                        clearResume();
                      }}
                    />
                  </div>
                </div>
              </div>
              {loading && (
                <div className="relative pt-1 flex gap-4 items-center">
                  <div className="flex mb-2 w-full">
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="h-2 bg-green-500 rounded-full animate-progress"
                        style={{ '--progress-width': `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <p className="text-[14px] font-[500]">{progress}%</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadCv;