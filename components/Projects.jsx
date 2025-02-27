import '../css/main_all.css'

const Projects = () => {
    return (
        <div>
            <div className='manrope'>
                <div className="manrope bg-[#C4C4C4] w-full">
                    <div className="w-11/12 md:w-10/12 mx-auto py-16 md:py-32">
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            <div className="text-center md:text-left mb-8 md:mb-0">
                                <div className="text-4xl md:text-6xl font-light text-white leading-tight">
                                    <div>
                                        Our
                                        <span className="font-light ml-4">Projects</span>
                                    </div>
                                    <span className="text-xl md:text-2xl mt-4 md:mt-0">
                                        Home
                                        <span className="text-[#FF9900] text-5xl md:text-7xl">.</span>
                                        <span className="text-[#FF9900]">Projects</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 md:w-9/12 mx-auto mt-10'>
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

                <div className="w-11/12 md:w-9/12 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
                    <div className="group cursor-pointer">
                        <div className="bg-[#C4C4C4] w-full md:w-[600px] h-64 md:h-[400px] rounded-4xl overflow-hidden transition-all duration-300 hover:shadow-lg relative"> {/* Added w-full and md:w */}
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
                        <div className="bg-[#C4C4C4] w-full md:w-[600px] h-64 md:h-[400px] rounded-4xl overflow-hidden transition-all duration-300 hover:shadow-lg relative"> {/* Added w-full and md:w */}
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
                        <div className="bg-[#C4C4C4] w-full md:w-[600px] h-64 md:h-[400px] rounded-4xl overflow-hidden transition-all duration-300 hover:shadow-lg relative"> {/* Added w-full and md:w */}
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
                        <div className="bg-[#C4C4C4] w-full md:w-[600px] h-64 md:h-[400px] rounded-4xl overflow-hidden transition-all duration-300 hover:shadow-lg relative"> {/* Added w-full and md:w */}
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
                    <div className="group cursor-pointer">
                        <div className="bg-[#C4C4C4] w-full md:w-[600px] h-64 md:h-[400px] rounded-4xl overflow-hidden transition-all duration-300 hover:shadow-lg relative"> {/* Added w-full and md:w */}
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
                            Energy-Efficient Manufacturing Systems
                        </h3>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="bg-[#C4C4C4] w-full md:w-[600px] h-64 md:h-[400px] rounded-4xl overflow-hidden transition-all duration-300 hover:shadow-lg relative"> {/* Added w-full and md:w */}
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
                            Redesigning Factory Layouts for Efficiency
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;