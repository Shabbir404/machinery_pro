import '../css/main_all.css'
import { IoSettingsOutline } from "react-icons/io5";
import AEightLayer from './AEightLayer';

const ASaventhLayer = () => {
    return (
        <div>
            <div className='manrope'>
                <div className="w-full min-h-screen bg-[#F5F5F5] p-12 font-sans">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-col md:flex-row mb-16 gap-8">
                            <div className="md:w-1/2">
                                <div className="text-orange-400 flex gap-2 font-medium uppercase text-sm tracking-wide mb-2">
                                    <IoSettingsOutline className='mt-0.5'></IoSettingsOutline>
                                    OUR PROCESS
                                </div>
                                <div className="text-3xl md:text-5xl md:w-[610px] font-bold text-gray-900 leading-tight">
                                    <h1 className='font-thin'>Streamlined processes <span className='font-bold'>for</span></h1> optimal efficiency
                                </div>
                            </div>

                            <div className="md:w-1/2 md:mt-10">
                                <p className="text-gray-800 leading-relaxed">
                                    Our process is designed to maximize efficiency and quality at every stage
                                    of production. By integrating advanced technologies and best practices,
                                    we ensure seamless workflows. </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="bg-gray-200 w-full aspect-square rounded-4xl flex items-center justify-center">

                                </div>
                            </div>
                            <div className="md:w-1/2 space-y-10">
                                <div className="flex gap-6 p-1 md:p-4">
                                    <div>
                                        <span className="text-orange-400 font-bold text-3xl">01</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2 text-gray-900">Understanding Your Needs</h3>
                                        <p className="text-gray-800">
                                            We begin with a thorough consultation to understand your specific requirements
                                            and objectives, allowing us to tailor our approach to your unique situation.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6 bg-[#FF9900] text-white p-2 md:p-4 rounded-4xl">
                                    <div>
                                        <span className="font-bold text-3xl">02</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2 ">Design and Planning</h3>
                                        <p className="">
                                            Our team collaborates with you to create a detailed plan, outlining milestones,
                                            resources, and timelines for your project.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 p-2 md:p-4">
                                    <div>
                                        <span className="text-orange-400 font-bold text-3xl">03</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2 text-gray-900">Implementation</h3>
                                        <p className="text-gray-800">
                                            With a clear roadmap in place, we implement your solution using advanced
                                            technologies and our skilled personnel to bring your project to successful completion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AEightLayer></AEightLayer>
        </div>
    );
};

export default ASaventhLayer;