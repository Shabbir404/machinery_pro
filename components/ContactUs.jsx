import '../css/main_all.css'
import { IoSettingsOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const ContactUs = () => {

    return (
        <div>
            <div className='manrope'>
                <div className="manrope bg-[#C4C4C4] w-full">
                    <div className="w-11/12 md:w-9/12 mx-auto py-16 md:py-32">
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            <div className="text-center md:text-left mb-8 md:mb-0">
                                <div className="text-4xl md:text-6xl font-light text-white leading-tight">
                                    <div>
                                        Contact
                                        <span className="font-bold ml-2">Us</span>
                                    </div>
                                    <span className="text-xl md:text-2xl mt-4 md:mt-0">
                                        Home
                                        <span className="text-[#FF9900] text-5xl md:text-7xl">.</span>
                                        <span className="text-[#FF9900]">Contat US</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 md:w-9/12 md:flex justify-between mx-auto md:mt-10'>
                    <div className=''>
                        <div className='flex gap-2 justify-center md:justify-start'>
                            <IoSettingsOutline className='text-[#FF9900] mt-1'></IoSettingsOutline>
                            <h1 className='tracking-wider'>Contact us</h1>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-4xl font-light'>Get in touch <span className='font-bold'>with us</span></h1>
                            <p className='text-[#81848A] md:w-[451px] mt-4'>
                                Reach out for any inquiries, support, or to discuss how we can
                                meet your industrial needs.
                            </p>
                            <div className='flex flex-col p-4 gap-6 mt-4'>
                                <div className='flex gap-4 border-b border-[#EBEBEB] p-2 mt-4'>
                                    <div className='bg-[#FF9900] mt-1 w-10 h-10 rounded-md flex items-center justify-center'>
                                        <FaPhoneAlt className='text-white'></FaPhoneAlt>
                                    </div>
                                    <div className='font-medium '>
                                        <h1> Contact</h1>
                                        <span className='font-light mt-2'>+1.809.120.670</span>
                                    </div>
                                </div>
                                <div className='flex gap-4 border-b p-2 border-[#EBEBEB] mt-4'>
                                    <div className='bg-[#FF9900] mt-1 w-10 h-10 rounded-md flex items-center justify-center'>
                                        <MdOutlineMail className='text-white'></MdOutlineMail>
                                    </div>
                                    <div className='font-medium '>
                                        <h1> E-mail</h1>
                                        <span className='font-light mt-2'>info@domainname.com</span>
                                    </div>
                                </div>
                                <div className='flex p-2 gap-4 mt-4'>
                                    <div className='bg-[#FF9900] mt-1 w-10 h-10 rounded-md flex items-center justify-center'>
                                        <CiLocationOn className='text-2xl text-white'></CiLocationOn>
                                    </div>
                                    <div className='font-medium '>
                                        <h1> Our Address</h1>
                                        <span className='font-light mt-2'>+1.809.120.670</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white md:mt-0 mt-4 rounded-[45px] shadow-2xl p-8 w-full md:w-[600px] mx-auto">
                            <h1 className="text-3xl mb-6 font-normal">
                                Contact <span className="font-bold ">me</span>
                            </h1>
                            <form>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter first name"
                                            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Enter last name"
                                            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your e-mail"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
                                    />
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone no."
                                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
                                    />
                                </div>

                                <div className="mb-6">
                                    <textarea
                                        placeholder="Write Message"
                                        rows="5"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
                                    />
                                </div>
                                <button
                                    className="px-6 py-2 bg-white text-black border border-[#FF9900] rounded-xl
                                     hover:bg-orange-50 transition-colors duration-300 font-medium"
                                >
                                    Submit Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <iframe width="1920" height="508" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1920&amp;height=508&amp;hl=en&amp;q=37%20San%20Juan%20Lane%20Usa+(San)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.pferdeversicherung.at/pferdelebensversicherung/'>Lebensversicherung Pferd</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=86bddece756fc2143828dd83c93ea4ac42954ba6'></script>
            </div>

        </div>
    );
};

export default ContactUs;