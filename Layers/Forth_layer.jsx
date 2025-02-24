import '../css/main_all.css'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router";
import Fifth_layer from './Fifth_layer';
const Forth_layer = () => {
    return (

        <div>
            <div className="manrope w-11/12 md:w-9/12 mx-auto mt-20 md:mt-60">
                <div className='flex flex-col md:flex-row md:gap-14'>
                    <div>
                        <div className="flex gap-2 justify-center md:justify-start">
                            <IoSettingsOutline className="text-2xl mt-1 md:text-lg text-orange-600" />
                            <h1 className="font-medium text-black text-xl md:text-lg tracking-[.20em]">
                                Our Story
                            </h1>
                        </div>
                        <div>
                            <div className='w-full md:w-[580px] md:text-start text-center mt-8 flex flex-col gap-5'>
                                <h1 className='font-thin text-3xl md:text-5xl'>Transforming industries</h1>
                                <h1 className='font-bold text-3xl md:text-5xl'>
                                    with innovative efficient
                                    solutions
                                </h1>
                            </div>
                            <div className='mx-auto md:mx-0 w-full max-w-[400px] md:w-[600px] mt-52 md:mt-20 h-[300px] md:h-[400px] bg-[#C4C4C4] rounded-4xl'>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='flex justify-center md:justify-start gap-5'>
                            <div className='w-[150px] h-[150px] md:w-[280px] md:h-[200px] rounded-4xl bg-[#C4C4C4]'></div>
                            <div className='w-[150px] h-[150px] md:w-[280px] md:h-[200px] rounded-4xl bg-[#C4C4C4]'></div>
                        </div>
                        <div className='mt-10 md:mt-20'>
                            <p className='text-md w-full md:w-[615px] text-center md:text-left text-[#4F4F4F]'>
                                We specialize in revolutionizing industries by delivering innovative, efficient
                                solutions that enhance productivity and streamline processes. Through advanced
                                technologies, precision engineering, and sustainable practices.
                            </p>
                        </div>
                        <div className='flex flex-wrap justify-center md:justify-start gap-8 md:gap-20 mt-16 md:mt-28'>
                            <div className='text-center md:text-left'>
                                <h1 className='text-3xl text-[#FF9900] font-bold'>10k+</h1>
                                <p className='font-medium text-black'>Completed Project</p>
                            </div>
                            <div className='text-center md:text-left'>
                                <h1 className='text-3xl text-[#FF9900] font-bold'>15k+</h1>
                                <p className='font-medium text-black'>Satisfied Customer</p>
                            </div>
                            <div className='text-center md:text-left'>
                                <h1 className='text-3xl text-[#FF9900] font-bold'>10k+</h1>
                                <p className='font-medium text-black'>Year Of Mastery</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start'>
                            <div className='flex mt-10 md:mt-16'>
                                <div className='h-[60px] w-[60px] bg-[#C4C4C4] rounded-full'></div>
                                <div className='h-[60px] -ml-3 w-[60px] bg-[#C4C4C4] rounded-full'></div>
                                <div className='h-[60px] -ml-3 w-[60px] bg-[#C4C4C4] rounded-full'></div>
                            </div>
                            <Link className='mt-8 md:ml-16 md:mt-16 flex gap-3 items-center justify-center'>
                                <FaRegCirclePlay className='size-12 md:size-14 text-[#FF9900]'></FaRegCirclePlay>
                                <p className='text-md font-medium text-[#222222]'>
                                    Watch Intro
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Fifth_layer></Fifth_layer>
        </div>


    );
};

export default Forth_layer;