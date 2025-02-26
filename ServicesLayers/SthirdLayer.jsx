import '../css/main_all.css'
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md"
import { RiArrowUpWideFill } from "react-icons/ri";

const SthirdLayer = () => {

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
        <div className='-mt-20 -mb-28'>
            <div className="manrope">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="flex justify-between items-start md:items-center mb-12">
                        <div>
                            <div className="md:mt-5 text-4xl md:text-start text-center md:text-4xl font-bold text-gray-800">
                                <h1 className="font-light inline">Frequently asked</h1>
                                <span className="text-gray-900 ml-2">questions</span>
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

    );
};

export default SthirdLayer;