import '../css/main_all.css'
import { MdArrowOutward } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
const Home = () => {
    return (
        <div className='mb-60 Manrope'>
            <div className='bg-[#C4C4C4] h-[700px] md:h-[800px] w-full'>
                <div className='w-10/12 mx-auto'>
                    <div>
                        <div className='text-center md:text-start text-white pt-40 md:pt-60'>
                            <h1 className='font-thin text-5xl '>
                                Excellence innovating
                            </h1>
                            <br />
                            <h1 className='text-bold text-5xl '>
                                Industry for today</h1>
                            <p className='md:w-[696px] md:p-0  mt-5 '>
                                At the heart of our operations is a commitment to delivering superior products through cutting-
                                edge technology and innovative processes.
                            </p>
                            <div className='mt-8 cursor-pointer flex md:ml-0 ml-28 md:justify-start p-0.5
                             bg-orange-400 rounded-lg w-[181px] hover:scale-105 transition-all hover:bg-orange-600 '>
                                <div className='  text-black font-bold px-5 py-2 bg-white rounded-md'>
                                    Explore More
                                </div>
                                <MdArrowOutward className='text-xl ml-2  mt-2.5'></MdArrowOutward>
                            </div>
                        </div>
                        <div className="md:mt-36 mt-10 mx-auto w-10/12">
                            <div className="md:h-[247px] flex md:gap-40 flex-col md:flex-row">
                                <div className="flex gap-3 mb-4 md:mb-0">
                                    <MdVerified className=" text-2xl text-orange-500" />
                                    <h1 className="Manrope text-white">Advanced Manufacturing Solutions</h1>
                                </div>
                                <div className="flex gap-3 mb-4 md:mb-0">
                                    <MdVerified className="text-2xl text-orange-500" />
                                    <h1 className="Manrope text-white">Quality Assurance Systems</h1>
                                </div>
                                <div className="flex gap-3">
                                    <MdVerified className=" text-2xl text-orange-500" />
                                    <h1 className="Manrope text-white">State-of-the-Art Technology</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='md:mt-30 mt-5 w-8/12 mx-auto'>
                <div className='flex gap-30'>
                    <div>
                        <div className='flex gap-8'>
                            <div className='bg-[#C4C4C4] rounded-3xl w-[300px] h-[208px]'></div>
                            <div className='mt-10 flex gap-8'>
                                <h1 className='text-[#FF9900] text-5xl manrope font-bold'>25 + </h1>
                                <div>
                                    <p className='manrope font-medium w-[90px]'>
                                        Year Of
                                        Experience
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='-mt-16 absolute ml-36'>
                            <div className='w-[300px] bg-[#C4C4C4] h-[360px] border-8 border-white rounded-4xl' alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-2 '>
                            <IoSettingsOutline className='mt-5 text-md text-[#FF9900]'></IoSettingsOutline>
                            <h1 className=' font-medium tracking-[.20em] mt-4'>About Us</h1>
                        </div>
                        <div className=' text-[#222222] mt-6 flex flex-col gap-4 w-[615px]'>
                            <h1 className='text-5xl font-thin'>Building quality through</h1>
                            <h1 className='font-bold text-5xl'>industrial innovation</h1>
                        </div>
                        <p className='w-[545px] mt-8 text-gray-500 tracking-wide size-20'>
                            At the heart of our operations is a commitment to delivering
                            superior products through cutting-edge technology and innovative processes.
                        </p>
                        <div className='flex flex-col gap-5 mt-5'>
                            <div className="flex gap-2 mb-4 md:mb-0">
                                <MdVerified className=" text-2xl mt-0.5 text-orange-500" />
                                <h1 className="Manrope text-xl text-[#222222]">
                                    Sustainable Manufacturing</h1>
                            </div>
                            <div className="flex gap-2 mb-4 md:mb-0">
                                <MdVerified className=" text-2xl mt-0.5 text-orange-500" />
                                <h1 className="Manrope text-xl text-[#222222]">
                                    Advanced Automation</h1>
                            </div>
                            <div className="flex gap-2 mb-4 md:mb-0">
                                <MdVerified className=" text-2xl mt-0.5 text-orange-500" />
                                <h1 className="Manrope text-xl text-[#222222]">
                                    Efficient Production Processes</h1>
                            </div>
                            <div className="flex gap-2 mb-4 md:mb-0">
                                <MdVerified className=" text-2xl mt-0.5 text-orange-500" />
                                <h1 className="Manrope text-xl text-[#222222]">
                                    Reliable Delivery Services</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;