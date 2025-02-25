import '../css/main_all.css'
import { IoSettingsOutline } from "react-icons/io5";
import { BsArrowUpRightSquareFill } from "react-icons/bs";


const Tenth_layer = () => {
    return (
        <div>
            <div className='md:mt-10 manrope md:w-9/12 w-11/12 mx-auto'>
                <div className="bg-white ">
                    <div className='flex gap-2 justify-center md:justify-start'>
                        <IoSettingsOutline className='text-xl mt-0.5 text-[#FF9900]'></IoSettingsOutline>
                        <h1 className='font-bold manrope tracking-[0.30rem]'>Latest Blog</h1>
                    </div>
                    <hr className='md:hidden mt-2 text-gray-200' />
                    <div className='md:flex md:justify-between'>
                        <div className='w-[450px]'>
                            <h1 className='text-5xl text-center md:text-left font-light mt-4 flex flex-col gap-2'>Insights from our <br />
                                <span className='font-bold text-center md:text-left'>latest blogs</span>
                            </h1>
                        </div>
                        <div className='w-[547px] mt-8'>
                            <p className='text-[#81848A]'>
                                Stay updated with the latest trends, innovations, and expert insights in the
                                manufacturing and industrial sectors
                            </p>
                        </div>
                    </div>

                    <div className='mt-20'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
                            <div className="group cursor-pointer">
                                <div className="bg-[#C4C4C4] w-full md:w-[600px] h-64 md:h-[400px] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg relative"> {/* Added w-full and md:w */}
                                    <div className="w-full h-full flex items-center justify-center absolute inset-0">
                                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Project
                                        </span>

                                    </div>
                                </div>
                                <div className='flex md:w-[590px] justify-between'>
                                    <h3 className="mt-4 md:w-[388px] font-bold md:text-left text-center text-lg text-[#222222] group-hover:text-[#FF9900]">
                                        Sustainable Practices Reducing Waste in
                                        Industrial Production
                                    </h3>
                                    <BsArrowUpRightSquareFill className='text-4xl hidden md:block hover:text-orange-600 mt-4 text-[#FF9900]'></BsArrowUpRightSquareFill>
                                </div>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="bg-[#C4C4C4] w-full md:w-[600px] h-64 md:h-[400px] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg relative"> {/* Added w-full and md:w */}
                                    <div className="w-full h-full flex items-center justify-center absolute inset-0">
                                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Project
                                        </span>
                                    </div>
                                </div>
                                <div className='flex md:w-[590px] justify-between'>
                                    <h3 className="mt-4 md:w-[388px] font-bold md:text-left text-center text-lg text-[#222222] group-hover:text-[#FF9900]">
                                        Advanced Robotics Revolutionizing
                                        Industrial Workflows
                                    </h3>
                                    <BsArrowUpRightSquareFill className='text-4xl hidden md:block hover:text-orange-600 mt-4 text-[#FF9900]'></BsArrowUpRightSquareFill>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tenth_layer;