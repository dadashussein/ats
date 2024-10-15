import { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { TrashIcon } from '../assets/Icons';
import useResume from '../useResume';

import pdfIcon from '../assets/version3/pdfIcon.png';
import docIcon from '../assets/version3/doc.png';
import { v4 as uuidv4 } from 'uuid';
import autoAnimate from '@formkit/auto-animate';
import styled from 'styled-components';
import downlaodicon from '../assets/version3/downloadicon.png'





const RecriuterUpload = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const cvListRef = useRef(null);


    useEffect(() => {
        cvListRef.current && autoAnimate(cvListRef.current);
    }, [cvListRef]);

    const {
        setSeveralResume,
        severalResume,
        cvProgress,
        processMultipleCVs,
    } = useResume();


    const types = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
    ];

    const onDrop = useCallback(async (acceptedFiles) => {
        const validFiles = acceptedFiles.filter(file => types.includes(file.type));

        if (validFiles.length > 0) {
            const filesWithIds = validFiles.map(file => ({
                id: uuidv4(),
                file: file
            }));
            setSeveralResume(prev => [...prev, ...filesWithIds]);
            setLoading(true);
            setError(null);
            await processMultipleCVs(filesWithIds);
            setLoading(false);
        } else {
            setError('Please select valid file types (pdf, doc, docx)');
        }
    }, [setSeveralResume, processMultipleCVs]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'application/pdf': ['.pdf'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
            'application/msword': ['.doc'],
        },
        onDrop,
        maxFiles: 100,
    });

    const ConverToKb = (size) => (size / 1000).toFixed(2);

    return (
        <div className='flex flex-col w-full'>
            <div
                {...getRootProps()}
                className="items-center w-full cursor-pointer
                 relative border 
                  flex   flex-col px-6 py-4 rounded-xl"
            >
                <input accept={types} {...getInputProps()} />
                <img
                    loading="lazy"
                    src={downlaodicon}
                    className=" object-contain w-[40px] 
                    h-[40px] justify-center items-center shadow-sm overflow-hidden"
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

            {severalResume.length > 0 && (
                <div  className='my-4 flex  rounded-md max-h-[170px] overflow-y-auto no-scrollbar
                  flex-col gap-4' ref={cvListRef}>
                    {severalResume && severalResume.map((cv) => (
                        <div key={cv.id} className=" border  border-gray-150
                     flex items-center justify-between gap-3 rounded-xl">
                            <img
                                alt="Resume file"
                                loading="lazy"
                                src={
                                    cv.file.type === 'application/pdf' ? pdfIcon : docIcon
                                }
                                className="object-contain  w-[32px]  h-[40px]"
                            />
                            <div className="items-stretch self-stretch px-2 flex grow basis-[0%] flex-col">
                                <div className="overflow-hidden flex justify-between font-medium leading-5">
                                    <div className='flex flex-col'>
                                        <p className="text-slate-700 text-[14px] line-clamp-1  font-[500]">
                                            {cv.file.name}
                                        </p>
                                        <div className="overflow-hidden text-slate-600 font-[400] text-[14px]">
                                            {ConverToKb(cv.file.size)} KB
                                            {error && <div className="error">{error}</div>}
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-1 items-center">
                                        <div className="w-10 cursor-pointer h-10 flex items-center justify-center hover:bg-[#f9fafb] rounded-[6px]">
                                            <TrashIcon
                                                onClick={() => {
                                                    setSeveralResume(prevResumes => prevResumes.filter(item => item.id !== cv.id));
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative pt-1 flex gap-4 items-center">
                                    <div className="flex mb-2 w-full">
                                        <div className="w-full bg-gray-200 h-2 rounded-full">
                                            <div
                                                className="h-2 bg-green-500 rounded-full"
                                                style={{ width: `${cvProgress[cv.id] || 0}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="flex mb-2 items-center justify-between">
                                        <p className="text-[14px] font-[500]">{Math.round(cvProgress[cv.id] || 0)}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
};

export default RecriuterUpload;