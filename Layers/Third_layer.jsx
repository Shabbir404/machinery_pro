import { IoSettingsOutline } from "react-icons/io5";
import '../css/main_all.css'
import { MdOutlineFactory } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { TbBuildingFactory } from "react-icons/tb";
import { BiSolidFactory } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import Forth_layer from "./Forth_layer";
const Third_layer = () => {


    const services = [
        {
            icon: <MdOutlineFactory className="text-[#FF9900] text-6xl" />,
            title: "Custom Manufacturing Solution",
        },
        {
            icon: <GiFactory className="text-[#FF9900] text-6xl" />,
            title: "Industrial Automation And Robotics",
        },
        {
            icon: <TbBuildingFactory className="text-[#FF9900] text-6xl" />,
            title: "Product Design And Prototyping",
        },
        {
            icon: <BiSolidFactory className="text-[#FF9900] text-6xl" />,
            title: "Equipment Maintenance Support",
        },
    ];


    return (
        <div className="md:-mt-70 -mt-40 manrope">
            <div className="bg-[#222222] h-screen md:h-[541px] w-full">
                <div className="w-11/12 md:w-9/12 mx-auto pt-8 md:pt-30 opacity-30">
                    <div className="flex flex-col md:flex-row md:justify-between md:gap-20 space-y-6 md:space-y-0">
                        <div>
                            <div className="flex gap-2 justify-center md:justify-start">
                                <IoSettingsOutline className="text-2xl mt-1 md:text-lg text-orange-900" />
                                <h1 className="font-medium text-gray-400 text-xl md:text-lg tracking-[.20em]">
                                    Services
                                </h1>
                            </div>
                            <div className="mt-4 text-center md:text-left">
                                <h1 className="text-3xl md:text-5xl font-thin text-gray-400">
                                    Comprehensive solutions
                                </h1>
                                <h1 className="text-3xl md:text-5xl font-bold text-gray-400 mt-2">
                                    for industrial excellence
                                </h1>
                            </div>
                        </div>
                        <div className="w-full md:w-[530px] md:mt-16">
                            <p className="text-sm text-gray-400 text-center md:text-left px-4 md:px-0">
                                We provide a wide range of services tailored to meet the unique needs of
                                modern industries. From precision manufacturing and advanced
                                automation to custom product design and efficient logistics.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-11/12 md:w-9/12 mx-auto bg-white rounded-4xl drop-shadow-sm min-h-[300px] mt-6 md:mt-30">
                    <div className="p-4 md:pt-15 md:ml-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`p-4 md:w-[280px] md:h-[238px] border-b md:border-b-0 ${index !== services.length - 1 ? 'md:border-r' : ''
                                        } border-gray-200`}
                                >
                                    <div className="flex flex-col items-start">
                                        <div className="ml-3">
                                            {service.icon}
                                        </div>
                                        <h1 className="text-gray-900 ml-2 font-bold mt-4 text-lg md:w-[220px]">
                                            {service.title}
                                        </h1>
                                        <button className="ml-2 mt-6 md:mt-10 cursor-pointer bg-gray-100 hover:bg-gray-300 rounded-md px-8 py-3 transition-colors">
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Forth_layer></Forth_layer>
        </div>
    );
};

export default Third_layer;