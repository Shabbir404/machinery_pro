import { IoSettingsOutline } from "react-icons/io5";
import '../css/main_all.css'
import { PiFactoryThin } from "react-icons/pi";
import { PiFactoryFill } from "react-icons/pi";
import { LuFactory } from "react-icons/lu";
import { GiFactoryArm } from "react-icons/gi";
import ASixLayer from "./ASixLayer";
const AFithLayer = () => {
    return (
        <div>
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
            <ASixLayer></ASixLayer>
        </div>
    );
};

export default AFithLayer;