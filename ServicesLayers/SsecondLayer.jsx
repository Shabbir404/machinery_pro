import { MdVerified } from "react-icons/md";
import '../css/main_all.css'
import SthirdLayer from "./SthirdLayer";

const SsecondLayer = () => {

    const services = [
        { id: 1, name: 'Needs Assessment' },
        { id: 2, name: 'Timeline and Milestones' },
        { id: 3, name: 'Feasibility and ROI' },
        { id: 4, name: 'Technology Selection' },
        { id: 5, name: 'Process Optimization' },
        { id: 6, name: 'Scalability Planning' }
    ];

    const renderGearIcon = () => (
        <div className="w-6 h-6 text-[#FF9900]">
            <MdVerified className="text-2xl"></MdVerified>
        </div>
    );

    return (
        <div>
            <div className="manrope -mt-10">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="font-light">Planning & </span>
                            <span className="font-bold">strategy</span>
                        </h2>
                        <p className="text-gray-600 md:w-[720px]">
                            Our Industrial Automation and Robotics planning and strategy services focus on designing tailored automation
                            solutions that align with your business goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {services.map((service) => (
                            <div key={service.id} className="flex items-center gap-1">
                                {renderGearIcon()}
                                <span className="text-gray-800">{service.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#C4C4C4] rounded-4xl aspect-square"></div>
                        <div className="bg-[#C4C4C4] rounded-4xl aspect-square"></div>
                    </div>
                </div>

                <SthirdLayer></SthirdLayer>

            </div>

        </div>
    );
};

export default SsecondLayer;