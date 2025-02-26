import { FaCog } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import '../css/main_all.css'
const AForthLayer = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="manrope md:mt-10 -mt-20">
                        <div className="max-w-6xl md:w-9/12 mx-auto p-4 md:p-0 md:flex justify-between items-center">
                            <div>
                                <h3 className="text-sm text-black flex items-center gap-2">
                                    <IoSettingsOutline className="text-xl text-[#FF9900]"></IoSettingsOutline> OUR HISTORY
                                </h3>
                                <div className="">
                                    <h1 className="text-4xl font-light mt-2">
                                        Foundation of excellences <br />
                                        <span className="font-bold">in industry</span>
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-600 mt-4 md:w-[550px]">
                                    Built on a legacy of quality and innovation, we have established a strong
                                    foundation in the industrial sector, consistently delivering reliable
                                    solutions that drive progress and set industry standards.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-6xl md:w-9/12 mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        <div>
                            <div className="mt-6 bg-[#0000000A] font-medium shadow-md h-[410px] text-center rounded-4xl overflow-hidden">
                                <div className="bg-[#FF9900] text-white p-4 font-semibold">In 1920 - Planning</div>
                                <div className="divide-y divide-gray-200 ">
                                    {[
                                        "In 1922 - Journey Started",
                                        "In 1925 - Journey Progress",
                                        "In 1930 - Global Reach",
                                        "In 1940 - Industry Leadership",
                                    ].map((item, index) => (
                                        <div key={index} className="p-4 mt-6 hover:bg-gray-100 cursor-pointer">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="md:mt-8">
                            <h2 className="text-4xl font-light">
                                Company <span className="font-bold">started</span>
                            </h2>
                            <p className="text-gray-600 mt-4">
                                Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for
                                precision and a commitment to quality, we have been empowering industries and driving progress.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {["Quality Control System", "Building Quality Industrial", "Environmental Responsibility", "Building Quality Industrial"].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <FaCog className="text-orange-500" /> <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex justify-center md:mt-10 items-center">
                            <div className="bg-gray-300 w-full h-48 md:w-[420px] md:h-[360px] rounded-4xl"></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AForthLayer;