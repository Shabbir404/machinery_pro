import { IoSettingsOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
// import { GoCircle } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import { AiOutlineAim } from "react-icons/ai";
import '../css/main_all.css'
import { useState } from "react";
import { FaCog } from "react-icons/fa";

const AThirdLayer = () => {
    const [activeTab, setActiveTab] = useState('mission');
    const points = [
        "Sustainable Manufacturing Practices",
        "Advanced Technology Integration",
        "Community and Environmental Responsibility",
        "Innovation-Driven Growth",
    ];
    return (
        <div>
            <div className="bg-[#222222] manrope w-full h-[450px] mt-10">
                <div className="w-11/12 md:w-9/12 mx-auto pt-8 md:pt-20 opacity-30">
                    <div className="flex flex-col md:flex-row md:justify-between md:gap-20 space-y-6 md:space-y-0">
                        <div>
                            <div className="flex gap-2 justify-center md:justify-start">
                                <IoSettingsOutline className="text-2xl mt-1 md:text-lg text-orange-900" />
                                <h1 className="font-medium text-gray-400 text-xl md:text-lg tracking-[.22em]">
                                    Our Approach
                                </h1>
                            </div>
                            <div className="mt-4 text-center md:text-left">
                                <h1 className="text-3xl md:text-5xl font-thin text-gray-400">
                                    Empowering Sustainable
                                </h1>
                                <h1 className="text-3xl md:text-5xl font-bold text-gray-400 mt-2">
                                    Growth in industry
                                </h1>
                            </div>
                        </div>
                        <div className="w-full md:w-[530px] md:mt-16">
                            <p className="text-sm text-gray-400 text-center md:text-left px-4 md:px-0">
                                We provide a wide range of services tailored to meet the unique needs of modern industries.
                                From precision manufacturing and advanced automation to custom product design
                                and efficient logistics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-9/12 w-full -mt-36 mx-auto mb-40 rounded-2xl md:rounded-4xl shadow-2xl bg-white h-auto md:h-[500px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <div
                        className={`flex flex-col md:flex-row items-center justify-center gap-4 p-4 md:p-8  md:rounded-tl-4xl cursor-pointer ${activeTab === 'mission' ? 'bg-[#FF9900] text-white' : 'hover:bg-gray-100'}`}
                        onClick={() => setActiveTab('mission')}
                    >
                        <FaEye className={`text-3xl md:text-4xl ${activeTab === 'mission' ? 'text-white' : ''}`} />
                        <h1 className="text-lg md:text-2xl font-semibold">Our Mission</h1>
                    </div>
                    <div
                        className={`flex flex-col md:flex-row items-center justify-center gap-4 p-4  md:rounded-b-4xl cursor-pointer ${activeTab === 'vision' ? 'bg-[#FF9900] text-white' : 'hover:bg-gray-100'}`}
                        onClick={() => setActiveTab('vision')}
                    >
                        <AiOutlineAim className={`text-3xl md:text-4xl ${activeTab === 'vision' ? 'text-white' : ''}`} />
                        <h1 className="text-lg md:text-2xl font-semibold">Our Vision</h1>
                    </div>
                    <div
                        className={`flex flex-col md:flex-row items-center justify-center gap-4 p-4  md:rounded-tr-4xl cursor-pointer ${activeTab === 'values' ? 'bg-[#FF9900] text-white' : 'hover:bg-gray-100'}`}
                        onClick={() => setActiveTab('values')}
                    >
                        <IoDiamondOutline className={`text-3xl md:text-4xl ${activeTab === 'values' ? 'text-white' : ''}`} />
                        <h1 className="text-lg md:text-2xl font-semibold">Our Value</h1>
                    </div>
                </div>
                <div className="p-4 md:p-8">
                    {activeTab === 'mission' && (
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="bg-white p-6 w-full md:w-[600px]">
                                <p className="text-gray-600 text-lg mb-4">
                                    Our mission is to transform the factory and industry sectors through
                                    sustainable practices, innovation, and advanced technology, fostering
                                    growth that benefits both business and the environment.
                                </p>
                                <ul className="space-y-3">
                                    {points.map((point, index) => (
                                        <li key={index} className="flex items-center space-x-3">
                                            <FaCog className="text-[#FF9900]" />
                                            <span className="text-gray-800 font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#C4C4C4] w-full md:w-[540px] h-80 rounded-3xl"></div>
                        </div>
                    )}
                    {activeTab === 'vision' && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Our Vision Content</h2>
                            <p>Vision description goes here...</p>
                        </div>
                    )}
                    {activeTab === 'values' && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Our Values Content</h2>
                            <p>Values description goes here...</p>
                        </div>
                    )}
                </div>
            </div>


        </div >
    );
};

export default AThirdLayer;