import { useState } from 'react';
import '../css/main_all.css'
import { MdArrowOutward } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md"
import { RiArrowUpWideFill } from "react-icons/ri";

const ATenthLayer = () => {

    const [openQuestion, setOpenQuestion] = useState(1);

    const questions = [
        {
            id: 0,
            question: 'What industries do you serve?',
            answer: ''
        },
        {
            id: 1,
            question: 'How do you ensure product quality?',
            answer: 'We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.'
        },
        {
            id: 2,
            question: 'What sustainability practices do you follow?',
            answer: ''
        },
        {
            id: 3,
            question: 'Do you offer customized solutions?',
            answer: ''
        },
        {
            id: 4,
            question: 'How do you handle safety in the workplace?',
            answer: ''
        }
    ];

    const toggleQuestion = (id) => {
        setOpenQuestion(openQuestion === id ? null : id);
    };

    return (
        <div>
            <div className='manrope'>
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="flex justify-between items-start md:items-center mb-12">
                        <div>
                            <div className=" text-sm flex gap-2 font-medium uppercase tracking-wider mb-2">
                                <IoSettingsOutline className='text-[#FF9900] mt-0.5'></IoSettingsOutline>
                                FAQS
                            </div>
                            <div className="text-3xl md:text-4xl flex flex-col gap-1 font-bold text-gray-800 leading-tight">
                                <h1 className='font-thin'>Frequently asked</h1>
                                <span className="text-gray-900">questions</span>
                            </div>
                        </div>
                        <div>
                            <div className='mt-8 cursor-pointer flex justify-center md:justify-start p-0.5
                       bg-orange-400 rounded-lg w-[140px] mx-auto md:mx-0 hover:scale-105 transition-all hover:bg-orange-600'>
                                <div className='text-black font-bold px-5 py-2 bg-white rounded-md'>
                                    All FAQ'S
                                </div>
                                <MdArrowOutward className='text-xl ml-2 mt-2.5'></MdArrowOutward>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#C4C4C4] rounded-4xl md:ml-0 ml-18 md:h-[550px] md:w-[500px]  h-[300px] w-[300px] md:aspect-auto">

                            <div className="md:mx-auto  md:max-w-xl mt-52 md:mt-[490px] flex flex-col md:flex-row items-center justify-center gap-1 md:gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 flex items-center justify-center text-white">
                                        <FaPhoneAlt className='text-[#FF9900] text-2xl'></FaPhoneAlt>
                                    </div>
                                    <span className="text-white">+91 1236547890</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 flex items-center justify-center text-white">
                                        <MdOutlineMail className='text-[#FF9900] text-2xl'></MdOutlineMail>
                                    </div>
                                    <span className="text-white">info@domainname.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 md:mt-14">
                            {questions.map((item) => (
                                <div
                                    key={item.id}
                                    className={`border rounded-xl overflow-hidden ${openQuestion === item.id ? 'border-[#FF9900] bg-[#FF9900]' : 'border-gray-200 bg-white'}`}
                                >
                                    <button
                                        className="w-full px-6 py-4 text-left flex justify-between items-center"
                                        onClick={() => toggleQuestion(item.id)}
                                    >
                                        <span className={`font-medium ${openQuestion === item.id ? 'text-white ' : 'text-gray-800'}`}>
                                            {item.question}
                                        </span>
                                        <RiArrowUpWideFill className={`${openQuestion === item.id ? 'text-white rotate-180   transition-all duration-300 ease-in-out ' : 'text-gray-400'}`}></RiArrowUpWideFill>
                                    </button>
                                    {openQuestion === item.id && item.answer && (
                                        <div className="px-6 py-4 bg-[#FF9900] text-white transition-all duration-300 ease-in-out">
                                            <p>{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default ATenthLayer;