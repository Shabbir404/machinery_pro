import '../css/main_all.css'
import { MdArrowOutward } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import AThirdLayer from '../AboutLayers/AThirdLayer';

const AboutUs = () => {
    return (
        <div>
            <div className="manrope bg-[#C4C4C4] w-full">
                <div className="w-11/12 md:w-10/12 mx-auto py-16 md:py-32">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="text-center md:text-left mb-8 md:mb-0">
                            <div className="text-4xl md:text-6xl font-light text-white leading-tight">
                                <div>
                                    About
                                    <span className="font-bold ml-1">Us</span>
                                </div>
                                <span className="text-xl md:text-2xl mt-4 md:mt-0">
                                    Home
                                    <span className="text-[#FF9900] text-5xl md:text-7xl">.</span>
                                    <span className="text-[#FF9900]">About</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-12 md:mt-30 w-11/12 md:w-8/12 mx-auto'>
                <div className='flex flex-col md:flex-row md:gap-20'>
                    <div className='hidden md:block'>
                        <div className='flex gap-8'>
                            <div className='bg-[#C4C4C4] rounded-3xl w-[300px] h-[208px]'></div>
                            <div className='mt-10 flex gap-8'>
                                <h1 className='text-[#FF9900] text-5xl manrope font-bold'>25+ </h1>
                                <div>
                                    <p className='manrope font-medium w-[90px]'>
                                        Year Of
                                        Experience
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='-mt-16 absolute ml-36'>
                            <div className='w-[300px] bg-[#C4C4C4] h-[360px] border-8 border-white rounded-4xl' alt="" />
                        </div>
                    </div>

                    <div className='w-full md:w-auto'>
                        <div>
                            <div className='flex gap-2 justify-center md:justify-start'>
                                <IoSettingsOutline className='mt-5 text-2xl md:text-lg text-[#FF9900]'></IoSettingsOutline>
                                <h1 className='font-medium text-2xl md:text-lg tracking-[.20em] mt-4'>About Us</h1>
                            </div>
                            <div className='text-center md:text-start text-[#222222] mt-6 flex flex-col gap-4 w-full md:w-[615px]'>
                                <h1 className='text-4xl md:text-5xl font-thin'>Building quality through</h1>
                                <h1 className='font-bold text-4xl md:text-5xl'>industrial innovation</h1>
                            </div>
                            <p className='w-full md:w-[545px] text-center md:text-start mt-8 text-gray-500 tracking-wide size-20 px-4 md:px-0'>
                                At the heart of our operations is a commitment to delivering
                                superior products through cutting-edge technology and innovative processes.
                            </p>
                            <div className='flex flex-col md:flex-row gap-4 '>
                                <div className='flex flex-col gap-5 px-4 md:px-0'>
                                    <div className="flex gap-2 mb-4 md:mb-0 justify-center md:justify-start">
                                        <MdVerified className="text-2xl mt-0.5 text-orange-500" />
                                        <h1 className="Manrope text-xl text-[#222222]">
                                            Sustainable Manufacturing</h1>
                                    </div>
                                    <div className="flex gap-2 mb-4 md:mb-0 justify-center md:justify-start">
                                        <MdVerified className="text-2xl mt-0.5 text-orange-500" />
                                        <h1 className="Manrope text-xl text-[#222222]">
                                            Advanced Automation</h1>
                                    </div>
                                    <div className="flex gap-2 mb-4 md:mb-0 justify-center md:justify-start">
                                        <MdVerified className="text-2xl mt-0.5 text-orange-500" />
                                        <h1 className="Manrope text-xl text-[#222222]">
                                            Efficient Production Processes</h1>
                                    </div>
                                    <div className="flex gap-2 mb-4 md:mb-0 justify-center md:justify-start">
                                        <MdVerified className="text-2xl mt-0.5 text-orange-500" />
                                        <h1 className="Manrope text-xl text-[#222222]">
                                            Reliable Delivery Services</h1>
                                    </div>
                                </div>
                                <div className='md:w-[250px] text-center md:text-start w-full h-[200px] md:h-[240px] mt-6 md:mt-4 bg-[#F5F5F5] rounded-3xl hidden md:block'>
                                    <div className='flex justify-center md:justify-start md:ml-18 text-[#FF9900] md:pt-0 pt-52 gap-1 md:mt-36'>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                    </div>
                                    <p className='text-[#81848A] text-center mt-4'>
                                        15.5K Genuine Rating
                                    </p>
                                </div>
                            </div>

                            <div className='cursor-pointer mt-8 md:-mt-10 flex justify-center md:justify-start p-0.5
                        bg-orange-400 rounded-lg w-[170px] mx-auto md:mx-0 hover:scale-105 transition-all hover:bg-orange-600'>
                                <div className='text-black font-bold px-4 py-2 bg-white rounded-md'>
                                    Explore More
                                </div>
                                <MdArrowOutward className='text-xl ml-2 mt-2.5'></MdArrowOutward>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AThirdLayer></AThirdLayer>

        </div>
    );
};

export default AboutUs;