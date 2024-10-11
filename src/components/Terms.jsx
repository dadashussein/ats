import { Link } from "react-router-dom";
import styled from 'styled-components';

const ScrollContainer = styled.div`
  max-height: 90vh; 
  overflow-y: auto;


  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #d7d7d7;
  }

  &::-webkit-scrollbar-thumb {
    background: #A8A8A8;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

const Terms = () => {
    const isHr = sessionStorage.getItem('is_hr');
    return (
        <ScrollContainer id="myscroll" className="py-[5rem] px-[10rem]">
            <h1 className="text-black font-serif font-[600] text-[18px] mb-4">
                Terms and Conditions for Himate.az Introduction
            </h1>
            <p className="text-black font-serif text-[16px] mb-4">
                Welcome to Himate.az, an AI-powered early career hiring platform that connects companies with young professionals and early starters. By using our services, you agree to the following terms and conditions. Please read them carefully.
            </p>

            <h1 className="text-black font-serif font-[600] text-[18px] mb-4">
                Personal Information Collection
            </h1>
            <p className="text-black font-serif text-[16px] mb-4">
                When you use Himate.az, we collect certain personal information, including but not limited to your CV, contact details, educational background, and work experience. This information is necessary for us to provide our job matching services.
            </p>

            <h1 className="text-black font-serif font-[600] text-[18px] mb-4">
                Use of Personal Information
            </h1>
            <ol className="list-decimal pl-10 text-black font-serif text-[16px] mb-4">
                <li>
                    <h2 className="text-justify text-[16px] font-serif ">
                        Purpose of Data Collection: The information you provide is used to match you with suitable job opportunities based on our AI-powered algorithms.
                    </h2>
                </li>
                <li>
                    <h2 className="text-justify text-[16px] font-serif ">
                        Data Security: We are committed to ensuring the security of your personal information. We have implemented appropriate technical and organizational measures to protect your data from unauthorized access, use, or disclosure.
                    </h2>
                </li>
                <li>
                    <h2 className="text-justify text-[16px] font-serif ">
                        Third-Party Disclosure: We do not share your personal information with any third parties without your explicit consent, except as required by law.
                    </h2>
                </li>
            </ol>

            <h1 className="text-black font-serif font-[600] text-[18px] mb-4">
                Integration with OpenAI
            </h1>
            <ol className="list-decimal pl-10 text-black font-serif text-[16px] mb-4">
                <li>
                    <h2 className='text-[16px] font-serif '>
                        Use of OpenAI: Our platform integrates with OpenAI to enhance our job matching algorithms. When you upload your CV, certain aspects of your data may be processed by OpenAI's AI models to improve matching accuracy.
                    </h2>
                </li>
                <li>
                    <p className='text-[16px] font-serif '>
                        <strong>OpenAI's Terms and Conditions</strong>: By using Himate.az, you also agree to OpenAI’s Terms and Conditions.
                        OpenAI may access your data solely for the purpose of providing their services to us.
                        They are bound by their own data privacy policies, which can be found <a href='https://openai.com/policies/row-terms-of-use/' target='__blank' className="text-blue-500 underline">here</a>.
                    </p>
                </li>
                <li>
                    <h2 className='text-[16px]  font-serif'>
                        Data Processing: OpenAI processes your data in accordance with its terms and conditions. This processing includes analyzing the content of your CV to extract relevant information that aids in job matching.
                    </h2>
                </li>
            </ol>

            <h1 className="text-black font-serif font-[600] text-[18px] mb-4">
                User Responsibilities
            </h1>
            <ol className="list-decimal pl-10 text-black font-serif text-[16px] mb-4">
                <li>
                    <h2 className="text-justify text-[16px] font-serif ">
                        Accuracy of Information: You are responsible for ensuring that the information you provide is accurate and up to date. Any false information may result in inaccurate job matches and may affect your job search process.
                    </h2>
                </li>
                <li>
                    <h2 className="text-justify text-[16px] font-serif ">
                        Consent: By submitting your personal information, you consent to its use in accordance with these terms and conditions.
                    </h2>
                </li>
            </ol>

            <h1 className="text-black font-serif font-[600] text-[18px] mb-4">
                Rights of the User
            </h1>
            <ol className="list-decimal pl-10 text-black font-serif text-[16px] mb-4">
                <li>
                    <h2 className='text-[16px]  font-serif '>
                        Access and Correction: You have the right to access the personal information we hold about you and request corrections to any inaccuracies.
                    </h2>
                </li>
                <li>
                    <h2 className='text-[16px] font-serif '>
                        Data Deletion: You can request the deletion of your personal information from our database at any time. However, this may affect our ability to provide you with our services.
                    </h2>
                </li>
            </ol>

            <h1 className="text-black font-serif font-[600] text-[18px] mb-4">
                Amendments to Terms and Conditions
            </h1>
            <p className="text-black font-serif text-[16px] mb-4">
                Himate.az reserves the right to amend these terms and conditions at any time. Any changes will be posted on our website, and it is your responsibility to review them periodically.
            </p>

            <h1 className="text-black font-serif font-[600] text-[18px] mb-4">
                Contact Us
            </h1>
            <p className="text-black font-serif text-[16px] mb-4">
                <a href="mailto:hello@himate.az" className="text-black no-underline">If you have any questions or concerns about these terms and conditions or how your personal information is handled, please contact us at </a>
                <a href="mailto:hello@himate.az" className="text-black no-underline">hello@himate.az.</a>
            </p>
            <p className="text-black font-serif text-[16px] mb-4">
                By using Himate.az, you agree to these terms and conditions.
            </p>
            <Link to={
                isHr === 'true' ? '/recruiterInput' : '/candidateInput'
            }>
                <button className="
                    bg-[#2F80ED] text-white font-serif font-[600] text-[16px] px-6 py-1 rounded-[6px] hover:bg-[#2F80ED] hover:text-white transition-all duration-300 ease-in-out
                ">Back</button>
            </Link>
        </ScrollContainer>
    );
};

export default Terms;
