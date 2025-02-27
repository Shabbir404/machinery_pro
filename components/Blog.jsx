import '../css/main_all.css'
import { MdArrowOutward } from "react-icons/md";

const Blog = () => {

    const tittles = [
        {
            "title": "Sustainable Practices Reducing Waste in Industrial Production"
        },
        {
            "title": "Advanced Robotics Revolutionizing Industrial Workflows"
        },
        {
            "title": "Top Benefits of the Robotics in Manufacturing"
        },
        {
            "title": "Leveraging Data Analytics for Smarter Production"
        },
        {
            "title": "Reducing Operational Costs Through Automation"
        },
        {
            "title": "The Advantages of Customized Manufacturing Solutions"
        }
    ]

    return (
        <div>
            <div className='manrope'>
                <div className="manrope bg-[#C4C4C4] w-full">
                    <div className="w-11/12 md:w-10/12 mx-auto py-16 md:py-32">
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            <div className="text-center md:text-left mb-8 md:mb-0">
                                <div className="text-4xl md:text-6xl font-light text-white leading-tight">
                                    <div>
                                        Latest
                                        <span className="font-light ml-4">posts</span>
                                    </div>
                                    <span className="text-xl md:text-2xl mt-4 md:mt-0">
                                        Home
                                        <span className="text-[#FF9900] text-5xl md:text-7xl">.</span>
                                        <span className="text-[#FF9900]">Blog</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='w-11/12 md:w-9/12 mx-auto py-8'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {tittles.map((item, index) => (
                                <div key={index} className='cursor-pointer'>
                                    <div className='w-full h-80 md:h-[330px] hover:scale-105 duration-200 bg-[#C4C4C4] rounded-4xl'>
                                    </div>
                                    <h1 className='font-bold tracking-wide mt-4 ml-2'>{item.title}</h1>
                                    <button className='flex gap-2 text-[#FF9900] hover:text-orange-600 p-2 mt-2 cursor-pointer'>
                                        Read more
                                        <MdArrowOutward className='text-[#FF9900] hover:text-orange-600 text-2xl'></MdArrowOutward>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;