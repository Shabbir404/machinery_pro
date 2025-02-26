import '../css/main_all.css'
import { IoSettingsOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import ANinethLayer from './ANinethLayer';

const AEightLayer = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Ronald Richards',
            position: 'Manufacturing Executive'
        },
        {
            id: 2,
            name: 'Brooklyn Simmons',
            position: 'Industrial Engineer'
        },
        {
            id: 3,
            name: 'Cameron Williamson',
            position: 'Production Supervisor'
        },
        {
            id: 4,
            name: 'Darlene Robertson',
            position: 'Manufacturing Executive'
        }
    ];

    return (

        <div>
            <div className='manrope'>
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="md:flex justify-between items-center mb-12">
                        <div>
                            <div className="md:text-sm text-2xl md:justify-start justify-center flex gap-2 font-medium uppercase tracking-wider mb-2">
                                <IoSettingsOutline className='md:mt-0.5 text-[#FF9900] ' ></IoSettingsOutline>
                                OUR TEAM
                            </div>
                            <div className="text-4xl flex flex-col gap-2 font-bold text-gray-800">
                                <h1 className='font-thin md:text-start text-center'> Core strengths in</h1>
                                <span className="text-gray-900 md:text-start text-center">industrial innovation</span>
                            </div>
                        </div>
                        <div>
                            <div className='mt-8 cursor-pointer flex justify-center md:justify-start p-0.5
                                               bg-orange-400 rounded-lg w-[181px] mx-auto md:mx-0 hover:scale-105 transition-all hover:bg-orange-600'>
                                <div className='text-black font-bold px-5 py-2 bg-white rounded-md'>
                                    All Members
                                </div>
                                <MdArrowOutward className='text-xl ml-2 mt-2.5'></MdArrowOutward>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map(member => (
                            <div key={member.id} className="flex flex-col items-center">
                                <div className="w-full h-[342px] bg-[#C4C4C4] rounded-4xl mb-4"></div>
                                <h3 className="font-medium text-gray-900">{member.name}</h3>
                                <p className="text-sm text-[#81848A]">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ANinethLayer></ANinethLayer>
        </div>

    );
};

export default AEightLayer;