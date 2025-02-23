import '../css/main_all.css'
import { MdArrowOutward } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import exp1 from '../src/images/exp1.jpeg'
import exp2 from '../src/images/exp2.webp'

const Home = () => {
    return (
        <div className='mb-60'>
            <div className='overleyImg h-[700px] md:h-[800px] w-full'>
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
            <div className='md:mt-10 mt-5 w-8/12 mx-auto'>
                <div>
                    <div className=''>
                        <img className='rounded-3xl w-[300px] h-[208px] ' src={exp1} alt="" />
                    </div>
                    <div className='-mt-16 absolute ml-36'>
                        <img className='w-[300px] h-[360px] border-8 border-white rounded-4xl' src={exp2} alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;