import '../css/main_all.css'
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Tenth_layer from './Tenth_layer';
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaRegSun } from "react-icons/fa6";

const Nineth_layer = () => {
    return (
        <div>
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
            <Tenth_layer></Tenth_layer>
        </div>
    );
};

export default Nineth_layer;