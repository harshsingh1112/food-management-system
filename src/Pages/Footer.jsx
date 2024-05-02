import { Link } from "react-router-dom";
import { BsInstagram, BsYoutube, BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { FaFax } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import { FiHome } from 'react-icons/fi';

const Footer = () => {
    return (
        // < !--Footer container-- >
        <footer className="bg-[#000B33] text-white lg:text-left ">
            <div
                className="flex items-center justify-center border-t-2 border-neutral-200 p-6 lg:justify-between">
                <div className="mr-12 font-medium text-lg hidden lg:block">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* <!-- Social network icons container --> */}
                <div className="grid grid-flow-col gap-4">
                    <Link to='https://www.linkedin.com/' > <BsLinkedin className="text-4xl text-blue-600"></BsLinkedin> </Link>
                    <Link to='https://www.facebook.com/' > <BsFacebook className="text-4xl text-blue-600"></BsFacebook> </Link>
                    <Link to='https://www.instagram.com/' > <BsInstagram className="text-4xl text-[#fa7e1e]"></BsInstagram> </Link>
                    <Link to='https://youtube.com/' > <BsYoutube className="text-4xl text-red-600"></BsYoutube> </Link>
                    <Link to='https://www.strava.com/' > <BsTwitter className="text-4xl text-blue-700"></BsTwitter> </Link>
                </div>
            </div>

            {/* <!-- Main container div: holds the entire content of the footer, including four sections (FoodieFleet, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* <!-- FoodieFleet section --> */}
                    <div className="">
                        <h6
                            className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            FoodieFleet</h6>
                        <p> Elevate Your Dining Experience with Precision Management. </p>
                    </div>
                    {/* <!-- Useful links section --> */}
                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Useful links
                        </h6>
                        <p className="mb-4">
                            <Link to='' className="text-white hover:text-blue-700 hover:underline"
                            >Book a reservation </Link>
                        </p>
                        <p className="mb-4">
                            <Link to='' className="text-white hover:text-blue-700 hover:underline"
                            >Newsletter </Link>
                        </p>
                        <p className="mb-4">
                            <Link to='' className="text-white hover:text-blue-700 hover:underline"
                            >Orders</Link>
                        </p>
                        <p>
                            <Link to='' className="text-white hover:text-blue-700 hover:underline"
                            >Menu</Link>
                        </p>
                    </div>
                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Useful links
                        </h6>
                        <p className="mb-4">
                            <Link to='' className="text-white hover:text-blue-700 hover:underline"
                            >Jobs/Careers </Link>
                        </p>
                        <p className="mb-4">
                            <Link to='' className="text-white hover:text-blue-700 hover:underline"
                            >Partnerships </Link>
                        </p>
                        <p className="mb-4">
                            <Link to='' className="text-white hover:text-blue-700 hover:underline"
                            >Privacy Policy</Link>
                        </p>
                        <p>
                            <Link to='' className="text-white hover:text-blue-700 hover:underline"
                            >Terms and Conditions</Link>
                        </p>
                    </div>
                    {/* <!-- Contact section --> */}
                    <div>
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        <p className="mb-4 flex items-center gap-4 justify-center md:justify-start">
                            <FiHome className="text-2xl"></FiHome>

                            9/A Satmasjid Road, Dhaka 1209
                        </p>
                        <p className="mb-4 flex items-center gap-4 justify-center md:justify-start">
                            <MdOutlineEmail className="text-2xl"></MdOutlineEmail>

                            info@example.com
                        </p>
                        <p className="mb-4 flex items-center gap-4 justify-center md:justify-start">
                            <IoMdCall className="text-2xl"></IoMdCall>
                            +8801700000000
                        </p>
                        <p className="flex items-center gap-4 justify-center md:justify-start">
                            <FaFax className="text-2xl"></FaFax>
                            +8801700000000
                        </p>
                    </div>
                </div>
            </div>

            {/* <!--Copyright section--> */}
            <div className="bg-[#000B33] text-white p-6 text-center ">
                <span>© 2023 Copyright </span>
                <Link to='/'
                    className="font-bold hover:text-blue-700 text-xl text-[#FAA916]">FoodieFleet</Link>
            </div>
        </footer>
    );
};

export default Footer;