import MdPhone from '@mui/icons-material/Phone';
import ResponsiveAppBar from '../../Components/Navbar/ResponsiveAppBar';

export default function About() {
    return (
        < >
            <ResponsiveAppBar />
            <div className='p-5'>
                <div className="text-center font-extrabold text-5xl p-6 pb-0">
                    Gazal Capital
                </div>
                <div className="text-center text-lg text-cyan-500 p-2">
                    The Family Company
                </div>
                <div className="p-4 lg:pr-16 lg:pl-16 xl:pr-32 xl:pl-32">
                    <div className="text-semibold text-justify pb-4 font-medium">
                        Welcome to Gazal Capital, a subsidiary of Bluechip Constructions, a leading construction company started in the year 1995 in the cities of Chennai, bangalore and Tirunelveli. The firm has many years of experience in the building industry, having built several buildings since inception. Given the immense scope in the housing industry in India, the company has been focussing on promoting a series of large residential and commercial buildings in several areas in these cities. all the ventures promoted by the firm so far have been highly successful. Now it has successfully launched "Momin Elan" a luxurious residential apartment building in the heart of Bangalore with all modern amenities necessary for a luxurious living.
                    </div>
                    <div className="text-semibold text-justify">
                        Feel free to contact us for a detailed information about the project and its inspection.
                    </div>
                </div>
            </div>
            <div className='p-5'>
                <div className="text-center font-bold text-5xl p-2">
                    Contact Us
                </div>
                <div className="text-center textlgl text-cyan-500 p-2 pb-9">
                    Providing Service Since 1995
                </div>
                <div className="flex flex-row flex-wrap justify-evenly">
                    <div className="pb-5 bg-black rounded-full p-6 m-3">
                        <MdPhone sx={{ fontSize: 120, color: "white" }} /><span className='font-semibold sm:lg:text-base lg:text-xl xl:lg:text-xl text-white'>+91 98450 41161</span>
                    </div>
                    <div className="pb-5 bg-black rounded-full p-6 m-3">
                        <MdPhone sx={{ fontSize: 120, color: "white" }} /><span className='font-semibold sm:lg:text-base lg:text-xl xl:lg:text-xl text-white'>+91 99453 16717</span>
                    </div>
                    <div className="pb-5 bg-black rounded-full p-6 m-3">
                        <MdPhone sx={{ fontSize: 120, color: "white" }} /><span className='font-semibold sm:lg:text-base lg:text-xl xl:lg:text-xl text-white'>+91 90943 64248</span>
                    </div>
                </div>

            </div>
        </>
    );
}