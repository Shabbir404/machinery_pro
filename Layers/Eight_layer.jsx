import '../css/main_all.css'
import { IoSettingsOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaMoneyBills } from "react-icons/fa6";
import Nineth_layer from './Nineth_layer';
const Eight_layer = () => {

    const features = [
        "Standard Manufacturing Services",
        "Quality Control Checks",
        "Technical Support",
        "Monthly Progress Reports"
    ];
    return (
        <div>
            <div className='manrope'>
                <div className="w-full bg-white font-sans -mt-4 md:-mt-0 p-8 md:p-16">
                    <div className="container mx-auto max-w-6xl">
                        <div className=" text-orange-400 justify-center md:justify-start flex gap-2 font-medium uppercase text-sm tracking-wide mb-2">
                            <IoSettingsOutline className='mt-0.5 '></IoSettingsOutline>
                            OUR PROCESS
                        </div>
                        <div className="text-center  md:text-left md:flex mb-16">
                            <div className="text-3xl md:text-4xl  md:w-[549px]  text-gray-900 mb-4">
                                <h1 className='font-thin'> Transparent pricing for</h1>
                                <h1 className="font-bold mt-2">every solution</h1>
                            </div>
                            <p className="text-[#81848A] md:mt-5 md:w-[488px] max-w-3xl mx-auto">
                                We believe in providing clear and upfront pricing to ensure that you understand the value of our services without any surprises.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="relative bg-[#F5F5F5] rounded-4xl shadow-lg overflow-hidden p-8">

                                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                                    <svg viewBox="0 0 100 100" className="absolute top-0 right-0 text-orange-500 opacity-20">
                                        <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="currentColor" />
                                        <path d="M20 0 L100 0 L100 30 L30 30 L30 100 L20 100 Z" fill="currentColor" />
                                        <path d="M40 0 L100 0 L100 50 L50 50 L50 100 L40 100 Z" fill="currentColor" />
                                        <path d="M60 0 L100 0 L100 70 L70 70 L70 100 L60 100 Z" fill="currentColor" />
                                        <path d="M80 0 L100 0 L100 90 L90 90 L90 100 L80 100 Z" fill="currentColor" />
                                    </svg>
                                </div>

                                <div className="text-center manrope md:text-left mb-8 relative z-10">
                                    <h3 className="text-4xl font-bold text-gray-900 my-2">
                                        <span className="text-5xl text-[#FF9900]">$39</span> <span className='textarea-lg font-thin'>/month</span>
                                    </h3>
                                    <div className="text-black manrope font-semibold text-lg">
                                        Advanced Plan
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <IoSettingsSharp className='mr-2 text-[#FF9900]'></IoSettingsSharp>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="text-center md:text-left">
                                    <button className="border-2 manrope cursor-pointer border-[#FF9900] text-black hover:bg-orange-500 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                                        Purchase Now
                                    </button>
                                </div>
                            </div>

                            <div className="relative bg-[#FF9900] rounded-4xl shadow-xl overflow-hidden p-8 transform md:scale-105 z-10">
                                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                                    <svg viewBox="0 0 100 100" className="absolute top-0 right-0 text-white opacity-20">
                                        <circle cx="80" cy="20" r="15" fill="currentColor" />
                                        <circle cx="90" cy="40" r="10" fill="currentColor" />
                                        <circle cx="70" cy="50" r="20" fill="currentColor" />
                                        <circle cx="90" cy="70" r="15" fill="currentColor" />
                                    </svg>
                                </div>

                                <div className="text-center md:text-left mb-8 relative z-10">
                                    <h3 className="text-4xl font-bold text-white my-2">
                                        <span className="text-5xl manrope">$39</span> <span className='textarea-lg font-thin'>/month</span>
                                    </h3>
                                    <div className="text-white manrope font-semibold text-lg">
                                        Advanced Plan
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-white">
                                            <IoSettingsSharp className='mr-2 text-white'></IoSettingsSharp>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="text-center md:text-left">
                                    <button className=" manrope cursor-pointer text-white
                                     hover:bg-orange-600 hover:text-white border-2 border-white font-bold
                                      py-3 px-8 rounded-lg transition duration-300">
                                        Purchase Now
                                    </button>
                                </div>
                            </div>
                            <div className="relative bg-[#F5F5F5] rounded-4xl shadow-lg overflow-hidden p-8">
                                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                                    <svg viewBox="0 0 100 100" className="absolute top-0 right-0 text-orange-500 opacity-20">
                                        <circle cx="70" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                                        <circle cx="90" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                                        <circle cx="60" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
                                        <circle cx="80" cy="80" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
                                    </svg>
                                </div>

                                <div className="text-center md:text-left manrope mb-8 relative z-10">
                                    <h3 className="text-4xl font-bold text-gray-900 my-2">
                                        <span className="text-5xl">$39</span> <span className='textarea-lg font-thin'>/month</span>
                                    </h3>
                                    <div className="text-black manrope font-semibold text-lg">
                                        Advanced Plan
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <IoSettingsSharp className='mr-2 text-[#FF9900]'></IoSettingsSharp>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="text-center">
                                    <button className="border-2 manrope cursor-pointer border-[#FF9900] text-black hover:bg-orange-500 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                                        Purchase Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 max-w-4xl mx-auto">
                            <div className="flex items-center justify-center md:justify-start">
                                <div className="text-orange-500 mr-4">
                                    <CiCalendar className='text-2xl'></CiCalendar>
                                </div>
                                <p className="text-sm manrope font-medium">Get 30 day free trial</p>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="text-orange-500 mr-4">
                                    <FaMoneyBills className='text-2xl'></FaMoneyBills>
                                </div>
                                <p className="text-sm manrope font-medium">No hidden fees</p>
                            </div>

                            <div className="flex items-center justify-center md:justify-end">
                                <div className="text-orange-500 mr-4">
                                    <CiClock2 className='text-2xl'></CiClock2>
                                </div>
                                <p className="text-sm manrope font-medium">You can cancel anytime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nineth_layer></Nineth_layer>
        </div>
    );
};

export default Eight_layer;