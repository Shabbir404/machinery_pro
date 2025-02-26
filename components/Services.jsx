import '../css/main_all.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { TbTooltip } from "react-icons/tb";
import { PiFactoryThin } from "react-icons/pi";
import { PiFactoryFill } from "react-icons/pi";
import { LuFactory } from "react-icons/lu";
import { GiFactoryArm } from "react-icons/gi";
import SsecondLayer from '../ServicesLayers/SsecondLayer';

const Services = () => {

    const serviceCategories = [
        'Custom Manufacturing Solution',
        'Industrial Automation And Robotics',
        'Product Design And Prototyping',
        'Equipment Maintenance Support',
        'Research And Development'
    ];

    return (
        <div>
            <div>
                <div className="manrope bg-[#C4C4C4] w-full">
                    <div className="w-11/12 md:w-10/12 mx-auto py-16 md:py-32">
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            <div className="text-center md:text-left mb-8 md:mb-0">
                                <div className="text-4xl md:text-6xl font-light text-white leading-tight">
                                    <div>
                                        Services
                                    </div>
                                    <span className="text-xl md:text-2xl mt-4 md:mt-0">
                                        Home
                                        <span className="text-[#FF9900] text-5xl md:text-7xl">.</span>
                                        <span className="text-[]">About</span>
                                        <span className="text-[#FF9900] text-5xl md:text-7xl">.</span>
                                        <span className="text-[#FF9900]">Services</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 md:w-8/12 mx-auto manrope ">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/3 space-y-6">
                            <div>
                                <div className="bg-[#FF9900] text-white font-medium py-3 px-4 rounded-t-2xl">
                                    Services Category
                                </div>
                                <div className="border border-gray-200 rounded-b-lg overflow-hidden">
                                    {serviceCategories.map((service, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center py-4 px-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                                        >
                                            <span className="text-gray-700">{service}</span>
                                            <FaAngleDown></FaAngleDown>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#C4C4C4] rounded-lg p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="bg-[#FF9900] text-black p-2 rounded-md">
                                        <TbTooltip className='text-2xl'></TbTooltip>
                                    </div>
                                    <span className="text-white text-2xl font-medium">Toplax</span>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-2xl font-light text-white mb-1">Need <span className="font-bold">help!</span></h3>
                                    <p className="text-white text-sm">
                                        Got questions or need assistance with your industry needs?
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-md bg-[#CDCDCD] text-[#FF9900]">
                                            <FaPhoneAlt></FaPhoneAlt>
                                        </div>
                                        <span className="text-white">+1 840 841 256</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-md bg-[#CDCDCD] text-[#FF9900]">
                                            <MdOutlineMail></MdOutlineMail>
                                        </div>
                                        <span className="text-white">info@domain.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="bg-[#C4C4C4] rounded-4xl h-72 md:h-96 w-full mb-6"></div>

                            <div className="space-y-4 ">
                                <p className="text-[#81848A]">
                                    Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential,
                                    overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve
                                    leadership skills, enhance team performance, and streamline business operations. Whether you're launching a
                                    startup, scaling an established business, or developing employees you to make informed decisions, set clear goals,
                                    and drive meaningful results. With a focus on both personal development and business success, we guide you
                                    toward building a thriving, purpose-driven enterprise.
                                </p>

                                <p className="text-[#81848A]">
                                    Through expert guidance, we focus on refining your vision, enhancing operations, and unlocking new opportunities
                                    for growth. With a collaborative approach, we empower you to make confident decisions and build a sustainable,
                                    thriving business.
                                </p>
                            </div>
                            <div>
                                <div className='mt-5 text-2xl md:text-4xl font-thin'>
                                    Why choose <span className='font-bold'>robotics services</span>
                                </div>
                                <p className='md:w-[750px] md:textarea-md mt-4 text-[#81848A]'>
                                    Through expert guidance, we focus on refining your vision, enhancing operations, and unlocking new opportunities
                                    for growth. With a collaborative approach, we empower you to make confident decisions and build a sustainable,
                                    thriving business.
                                </p>
                                <div className="mt-10">
                                    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6 md:gap-4">
                                        <div className="w-full md:w-[345px]  h-auto min-h-[200px] md:h-[230px] rounded-4xl p-4 border border-[#FFFFFF1A]">
                                            <div className='md:border-0 border-t border-gray-200'>
                                                <PiFactoryThin className="size-16 md:size-18 text-[#FF9900] mx-auto md:mx-0" />
                                                <h1 className="font-medium text-xl text-black mt-4 text-center md:text-left">Automation Solutions</h1>
                                                <p className="text-black font-thin mt-2 w-full md:w-[250px] text-center md:text-left">
                                                    Streamlining processes through
                                                    cutting-edge technology.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-[345px] bg-[#FFFFFF1A] h-auto min-h-[200px] md:h-[230px] rounded-4xl p-4 border border-[#FFFFFF1A]">
                                            <div className='md:border-0 border-t border-gray-200'>
                                                <PiFactoryFill className="size-16 md:size-18 text-[#FF9900] mx-auto md:mx-0" />
                                                <h1 className="font-medium text-xl text-black mt-4 text-center md:text-left">Quality Control</h1>
                                                <p className="text-black font-thin mt-2 w-full md:w-[250px] text-center md:text-left">
                                                    Ensuring product excellence through
                                                    rigorous testing.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col  md:flex-row mt-6 md:mt-4 justify-center md:justify-between gap-6 md:gap-4">
                                        <div className="w-full md:w-[345px] bg-[#FFFFFF1A]  h-auto min-h-[200px]
                                         md:h-[230px] rounded-4xl p-4 border border-[#FFFFFF1A]">
                                            <div className='border-t pt-3 border-gray-200'>
                                                <LuFactory className="size-16 md:size-18 text-[#FF9900] mx-auto md:mx-0" />
                                                <h1 className="font-medium text-xl text-black mt-4 text-center md:text-left">Process Engineering</h1>
                                                <p className="text-black mt-2 font-thin w-full md:w-[250px] text-center md:text-left">
                                                    Ensuring product excellence through
                                                    rigorous testing.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full  md:w-[345px] h-auto min-h-[200px] md:h-[230px] rounded-4xl p-4 border border-[#FFFFFF1A]">
                                            <div className='border-t pt-3 border-gray-200'>
                                                <GiFactoryArm className="size-16 md:size-18 text-[#FF9900] mx-auto md:mx-0" />
                                                <h1 className="font-medium text-xl text-black mt-4 text-center md:text-left">Product Development</h1>
                                                <p className="text-black font-thin mt-2 w-full md:w-[250px] text-center md:text-left">
                                                    Streamlining processes through
                                                    cutting-edge technology.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <SsecondLayer></SsecondLayer>

                        </div>

                    </div>


                </div>


            </div>

        </div>
    );
};

export default Services;