import '../css/main_all.css'
import { IoSettingsSharp } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaMoneyBills } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { PiFactoryThin } from "react-icons/pi";
import { PiFactoryFill } from "react-icons/pi";
import { LuFactory } from "react-icons/lu";
import { GiFactoryArm } from "react-icons/gi";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaRegSun } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Pages = () => {

    const features = [
        "Standard Manufacturing Services",
        "Quality Control Checks",
        "Technical Support",
        "Monthly Progress Reports"
    ];

    return (
        <div className='manrope'>
            <div>
                <div className="manrope bg-[#C4C4C4] w-full">
                    <div className="w-11/12 md:w-10/12 mx-auto py-16 md:py-32">
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            <div className="text-center md:text-left mb-8 md:mb-0">
                                <div className="text-4xl md:text-6xl font-light text-white leading-tight">
                                    <div>
                                        Pricing
                                        <span className="font-bold ml-1">Plan</span>
                                    </div>
                                    <span className="text-xl md:text-2xl mt-4 md:mt-0">
                                        Home
                                        <span className="text-[#FF9900] text-5xl md:text-7xl">.</span>
                                        <span className="text-[#FF9900]">Pricing</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10 w-11/12 md:w-9/12 mx-auto'>
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
            <div className="md:mt-20 mt-15 manrope">
                <div className="flex flex-col md:flex-row justify-center">
                    <div className="bg-[#222222] min-h-[800px] md:h-[900px] w-full md:w-[50%]">
                        <div className="p-6 md:p-16">
                            <div>
                                <div className="flex gap-2 justify-center md:justify-start">
                                    <IoSettingsOutline className="text-2xl mt-1 md:text-lg text-[#FF9900]" />
                                    <h1 className="font-normal text-white text-xl md:text-lg tracking-[.20em]">
                                        What we do
                                    </h1>
                                </div>
                                <div className="w-full md:w-[720px] flex flex-col gap-3 md:gap-5 mt-8 text-center md:text-left">
                                    <h1 className="text-3xl md:text-5xl font-thin text-white">Innovative factory and industry</h1>
                                    <h1 className="text-3xl md:text-5xl font-bold text-white">solutions today</h1>
                                </div>
                                <div className="mt-10">
                                    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6 md:gap-4">
                                        <div className="w-full md:w-[345px] h-auto min-h-[200px] md:h-[230px] rounded-4xl p-4 border border-[#FFFFFF1A]">
                                            <div>
                                                <PiFactoryThin className="size-16 md:size-18 text-[#FF9900] mx-auto md:mx-0" />
                                                <h1 className="font-medium text-xl text-white mt-4 text-center md:text-left">Automation Solutions</h1>
                                                <p className="text-white font-thin mt-2 w-full md:w-[250px] text-center md:text-left">
                                                    Streamlining processes through
                                                    cutting-edge technology.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-[345px] bg-[#FFFFFF1A] h-auto min-h-[200px] md:h-[230px] rounded-4xl p-4 border border-[#FFFFFF1A]">
                                            <div>
                                                <PiFactoryFill className="size-16 md:size-18 text-[#FF9900] mx-auto md:mx-0" />
                                                <h1 className="font-medium text-xl text-white mt-4 text-center md:text-left">Quality Control</h1>
                                                <p className="text-white font-thin mt-2 w-full md:w-[250px] text-center md:text-left">
                                                    Ensuring product excellence through
                                                    rigorous testing.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row mt-6 md:mt-4 justify-center md:justify-between gap-6 md:gap-4">
                                        <div className="w-full md:w-[345px] bg-[#FFFFFF1A] h-auto min-h-[200px] md:h-[230px] rounded-4xl p-4 border border-[#FFFFFF1A]">
                                            <div>
                                                <LuFactory className="size-16 md:size-18 text-[#FF9900] mx-auto md:mx-0" />
                                                <h1 className="font-medium text-xl text-white mt-4 text-center md:text-left">Process Engineering</h1>
                                                <p className="text-white mt-2 font-thin w-full md:w-[250px] text-center md:text-left">
                                                    Ensuring product excellence through
                                                    rigorous testing.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-[345px] h-auto min-h-[200px] md:h-[230px] rounded-4xl p-4 border border-[#FFFFFF1A]">
                                            <div>
                                                <GiFactoryArm className="size-16 md:size-18 text-[#FF9900] mx-auto md:mx-0" />
                                                <h1 className="font-medium text-xl text-white mt-4 text-center md:text-left">Product Development</h1>
                                                <p className="text-white font-thin mt-2 w-full md:w-[250px] text-center md:text-left">
                                                    Streamlining processes through
                                                    cutting-edge technology.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mb-8 md:mb-0">
                            <h1 className="text-white text-center md:text-left md:ml-16">Let’s make something great work together.</h1>
                            <a className="md:ml-2 underline cursor-pointer hover:text-orange-500 text-[#FF9900]">Get Free Quote</a>
                        </div>
                    </div>
                    <div className="bg-[#C4C4C4] hidden md:block h-[400px] md:h-[900px] w-full md:w-[50%] relative">
                        {/* <div className="w-[80px] md:w-[126px] h-[80px] md:h-[126px] rounded-full bg-[#FF9900] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="flex justify-center items-center h-full">
                            <MdArrowOutward className="text-4xl md:text-5xl text-white"></MdArrowOutward>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>

            <div className='overleyImg md:h-[800px] md:-mt-10 min-h-screen w-full'>
                <div className="flex flex-col md:flex-row md:w-10/12 mx-auto w-full min-h-screen p-4 md:p-8">
                    <div className="w-full md:w-2/5 flex items-center justify-center p-4 md:p-6">
                        <div className=" shadow-md w-96 md:w-[510px] rounded-4xl md:h-[490px] h-96 bg-[#C4C4C4]">
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 flex md:mt-10 flex-col justify-center p-4 md:p-8">
                        <div className="text-xl  md:justify-start justify-center flex gap-2 md:text-sm font-medium uppercase tracking-wider text-black mb-2">
                            <IoSettingsOutline className='text-[#FF9900] mt-0.5'></IoSettingsOutline>  Our Client Say
                        </div>
                        <div className="text-3xl mt-4  text-center md:text-left md:text-2xl md:w-[610px]
                                     lg:text-3xl font-bold text-black mb-6 md:mb-6">
                            <h1 className='font-light'>What our satisfied clients</h1> are saying
                        </div>
                        <div className="relative md:w-[610px] md:mt-10 mb-8">
                            <p className="text-gray-700 text-base md:text-lg ">
                                "The team's attention to detail and commitment to quality
                                exceeded our expectations. They delivered on time, and their
                                innovative solutions improved our production efficiency by 30%.
                                Highly recommended!"
                            </p>
                            <div className='flex justify-between '>
                                <div className="mb-6 mt-8 flex gap-2">
                                    <div className='w-14 h-14 rounded-md bg-[#C4C4C4]'>

                                    </div>
                                    <div>
                                        <p className="text-gray-800 font-semibold text-lg">Brooklyn Simmons</p>
                                        <p className="text-gray-600 text-sm">Homeowner</p>
                                    </div>
                                </div>
                                <div className="mt-10 md:mt-8 flex justify-start space-x-3">
                                    <button className="w-10 cursor-pointer h-10 rounded-md bg-[#FF9900]
                                                 text-white flex items-center justify-center shadow-lg hover:bg-orange-500 
                                                 transition-colors duration-300 focus:outline-none">
                                        <FaArrowLeft></FaArrowLeft>
                                    </button>
                                    <button className="cursor-pointer w-10 h-10 rounded-md bg-[#FF9900]
                                                 text-white flex items-center justify-center shadow-lg hover:bg-orange-500 
                                                 transition-colors duration-300 focus:outline-none">
                                        <FaArrowRight></FaArrowRight>
                                    </button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className='hidden md:block w-9/12 mx-auto -mt-10'>
                    <div className=' grid grid-cols-4 '>
                        <div className='flex gap-2'>
                            <MdEnergySavingsLeaf className='text-4xl text-[#FF9900]'></MdEnergySavingsLeaf>
                            <h1 className='text-black text-2xl font-extrabold'>Logoipsum</h1>
                        </div>
                        <div className='flex gap-2'>
                            <FaRegSun className='text-4xl text-[#FF9900]'></FaRegSun>
                            <h1 className='text-black text-2xl font-extrabold'>Logoipsum</h1>
                        </div>
                        <div className='flex gap-2'>
                            <MdEnergySavingsLeaf className='text-4xl text-[#FF9900]'></MdEnergySavingsLeaf>
                            <h1 className='text-black text-2xl font-extrabold'>Logoipsum</h1>
                        </div>
                        <div className='flex gap-2'>
                            <MdEnergySavingsLeaf className='text-4xl text-[#FF9900]'></MdEnergySavingsLeaf>
                            <h1 className='text-black text-2xl font-extrabold'>Logoipsum</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pages;