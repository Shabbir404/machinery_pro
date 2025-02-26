import '../css/main_all.css'
import { IoSettingsOutline } from "react-icons/io5";
const ASixLayer = () => {
    return (
        <div>
            <div className="max-w-6xl manrope mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
                    <div className="md:w-1/2 w-full">
                        <div className="text-2xl md:text-sm justify-center md:justify-start flex gap-2 font-medium uppercase tracking-wider mb-2">
                            <IoSettingsOutline className='mt-0.5 text-[#FF9900]'></IoSettingsOutline>
                            OUR KEY FEATURE
                        </div>
                        <div className="md:text-5xl md:text-start text-4xl md:mt-0 mt-4 text-center font-bold text-gray-800 mb-4">
                            <h1 className="font-light"> Core strengths in</h1>
                            <span className="text-gray-900">industrial innovation</span>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full md:text-start text-center -mt-4 md:mt-8">
                        <p className="text-gray-600">
                            Our expertise in industrial innovation combines advanced technology,
                            sustainable practices, and a skilled workforce to deliver efficient, future-
                            ready solutions that drive industry progress
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 border-r border-l border-t rounded-t-4xl border-gray-200 p-2">
                    <div className="bg-white rounded-lg p-8  ">
                        <div className="w-14 h-14 mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                                <rect x="20" y="40" width="60" height="40" fill="#FF9900" />
                                <polygon points="20,40 50,20 80,40" fill="#FF9900" />
                                <rect x="25" y="45" width="10" height="10" fill="#FFF" />
                                <rect x="40" y="45" width="10" height="10" fill="#FFF" />
                                <rect x="55" y="45" width="10" height="10" fill="#FFF" />
                                <rect x="70" y="45" width="10" height="10" fill="#FFF" />
                                <rect x="55" y="25" width="10" height="15" fill="#444" />
                                <circle cx="60" cy="15" r="5" fill="#888" />
                                <circle cx="65" cy="10" r="5" fill="#888" />
                                <circle cx="70" cy="5" r="5" fill="#888" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Advanced Technology Integration
                        </h3>
                        <p className="text-[#81848A] ">
                            We integrate cutting-edge technologies into every aspect of our
                            operations, enhancing efficiency, precision, and innovation to deliver
                            superior industrial solutions.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-8 md:border-l border-gray-200">
                        <div className="w-14 h-14 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                className="text-yellow-500" strokeWidth="2">
                                <path d="M6 9L12 3L18 9M4 12H20M6 15L12 21L18 15" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Uncompromising Quality Standards
                        </h3>
                        <p className="text-[#81848A]">
                            We uphold the highest quality standards across all processes, ensuring
                            consistency, reliability, and excellence in every product and service we
                            deliver.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-8 ">
                        <div className="w-14 h-14 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                className="text-yellow-500" strokeWidth="2">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                                <path d="M2 17L12 22L22 17" />
                                <path d="M2 12L12 17L22 12" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Continuous Innovation and R&D
                        </h3>
                        <p className="text-[#81848A]">
                            We prioritize ongoing research and development to drive continuous
                            innovation, staying ahead of industry trends and creating advanced
                            solutions that meet evolving market demands.
                        </p>
                    </div>

                    <div className="bg-[#C4C4C4] "></div>
                </div>
            </div>
        </div>
    );
};

export default ASixLayer;