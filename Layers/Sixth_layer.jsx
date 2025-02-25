
import { IoSettingsOutline } from 'react-icons/io5';
import Saventh_layer from './Saventh_layer';

const Sixth_layer = () => {
    return (
        <div>
            <div className="w-full bg-white font-manrope py-16 md:py-24">
                <div className="w-11/12 md:w-9/12 mx-auto">

                    <div className="mb-12">
                        <div className="flex justify-center md:justify-start gap-2">
                            <IoSettingsOutline className="text-2xl mt-1 md:text-lg text-[#FF9900]" />
                            <h1 className="font-medium text-xl md:text-lg tracking-[.20em] text-[#222222]">
                                Our Work
                            </h1>
                        </div>

                        <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-center
                         md:items-start text-center md:text-left">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-thin text-[#222222] mb-4">
                                    Our successful project
                                    <h1 className='font-bold'>
                                        initiatives
                                    </h1>
                                </h2>
                            </div>
                            <p className="text-gray-600 md:w-[545px] tracking-wider  mt-4 md:mt-0">
                                Our successful project initiatives showcase our commitment to excellence and innovation across various industries.
                            </p>
                        </div>

                        {/* Category sections */}
                        <div className="mt-8 md:mt-10 flex flex-col items-center">
                            <div className="flex flex-wrap justify-center md:gap-5 gap-3">
                                <button className="text-[#FF9900] font-medium cursor-pointer hover:underline">All</button>
                                <span className="hidden md:inline text-gray-400">/</span>
                                <button className="text-gray-900 cursor-pointer hover:text-[#FF9900] hover:underline">Development</button>
                                <span className="hidden md:inline text-gray-400">/</span>
                                <button className="text-gray-900 cursor-pointer  font-medium hover:underline">Automation</button>
                                <span className="hidden md:inline text-gray-400">/</span>
                                <button className="text-gray-900 cursor-pointer hover:text-[#FF9900] hover:underline">Development</button> {/* Duplicate, consider removing */}
                                <span className="hidden md:inline text-gray-400">/</span>
                                <button className="text-gray-900 cursor-pointer hover:text-[#FF9900] hover:underline">Infrastructure</button>
                                <span className="hidden md:inline text-gray-400">/</span>
                                <button className="text-gray-900 cursor-pointer hover:text-[#FF9900] hover:underline">Manufacturing</button>
                                <span className="hidden md:inline text-gray-400">/</span>
                                <button className="text-gray-900 cursor-pointer hover:text-[#FF9900] hover:underline">Sustainability</button>
                            </div>
                        </div>
                    </div>
                    {/* box section start */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
                        <div className="group cursor-pointer">
                            <div className="bg-[#C4C4C4] w-full md:w-[600px] h-64 md:h-[400px] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg relative"> {/* Added w-full and md:w */}
                                <div className='bg-[#B4B4B4] mt-4 ml-4 rounded-md w-[120px] h-[37px]'>
                                    <p className='text-white text-center pt-2'>Development</p>
                                </div>
                                <div className="w-full h-full flex items-center justify-center absolute inset-0">
                                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Project
                                    </span>

                                </div>
                            </div>
                            <h3 className="mt-4 font-bold text-center text-lg text-[#222222] group-hover:text-[#FF9900]">
                                Total Quality Management Implementation
                            </h3>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="bg-[#C4C4C4] w-full md:w-[600px] h-64 md:h-[400px] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg relative"> {/* Added w-full and md:w */}
                                <div className='bg-[#B4B4B4] mt-4 ml-4 rounded-md w-[120px] h-[37px]'>
                                    <p className='text-white text-center pt-2'>Automation</p>
                                </div>
                                <div className="w-full h-full flex items-center justify-center absolute inset-0">
                                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Project
                                    </span>
                                </div>
                            </div>
                            <h3 className="mt-4 font-bold text-center text-lg text-[#222222] group-hover:text-[#FF9900]">
                                Advanced Research in Material Science
                            </h3>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="bg-[#C4C4C4] w-full md:w-[600px] h-64 md:h-[400px] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg relative"> {/* Added w-full and md:w */}
                                <div className='bg-[#B4B4B4] mt-4 ml-4 rounded-md w-[120px] h-[37px]'>
                                    <p className='text-white text-center pt-2'>Infrastructure</p>
                                </div>
                                <div className="w-full h-full flex items-center justify-center absolute inset-0">
                                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Project
                                    </span>
                                </div>
                            </div>
                            <h3 className="mt-4 font-bold text-center text-lg text-[#222222] group-hover:text-[#FF9900]">
                                Workplace Safety Enhancement Initiative
                            </h3>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="bg-[#C4C4C4] w-full md:w-[600px] h-64 md:h-[400px] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg relative"> {/* Added w-full and md:w */}
                                <div className='bg-[#B4B4B4] mt-4 ml-4 rounded-md w-[120px] h-[37px]'>
                                    <p className='text-white text-center pt-2'>Infrastructure</p>
                                </div>
                                <div className="w-full h-full flex items-center justify-center absolute inset-0">
                                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Project
                                    </span>
                                </div>
                            </div>
                            <h3 className="mt-4 font-bold text-center text-lg text-[#222222] group-hover:text-[#FF9900]">
                                Robotic Process Automation Deployment
                            </h3>
                        </div>
                    </div>
                    {/* box section end */}

                </div>
            </div>
            <Saventh_layer></Saventh_layer>
        </div>
    );
};

export default Sixth_layer;