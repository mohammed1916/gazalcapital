import MdPhone from '@mui/icons-material/Phone';
import ResponsiveAppBar from '../../Components/Navbar/ResponsiveAppBar';
import Box from '@mui/material/Box'
import decoration1 from '../../img/Assets/3372216.jpg'
import decoration3 from '../../img/Assets/5154267.jpg'
import decoration2 from '../../img/Assets/20945469.jpg'

export default function About() {
    return (
        < >
            <ResponsiveAppBar />
            <div className='p-5'>
                <div className="text-center font-extrabold text-5xl p-6 pb-0">
                    Gazal Capital
                </div>
                <div className="text-center text-lg text-pink-500 p-2">
                    Our Vision
                </div>
                <div className="p-4 lg:pr-16 lg:pl-16 xl:pr-32 xl:pl-32">
                    <div className="text-semibold text-justify pb-4 font-medium">
                        We are a family company. We believe in the spirit of love, unity, and affection that a family has. We have started "Gazal Capital" and intend to grow on the concept of family. We ensure that the brands and products we build now and in the future will serve all members of a family i.e-- the parents and the children. Our brands will be of top quality and reasonable prices. Once you use our brand, you become our family. Let us grow together to a bright and rewarding future.
                    </div>
                    <div className="text-semibold text-justify">
                        Welcome to the Gazal Family.
                    </div>
                </div>
            </div>
            <div className='p-5'>
                <div className="text-center font-bold text-5xl p-2">
                    Team
                </div>
                <div className="flex flex-row flex-wrap justify-evenly">
                    <div className="pb-5  p-6 m-3">
                        <Box className='rounded-2xl' boxShadow={5} alignSelf={'center'} sx={{ height: "20rem" }} component={'img'} src={decoration1} />
                        <div className='font-extrabold mt-3 sm:lg:text-base lg:text-xl xl:lg:text-2xl '>Founder</div>
                        <div className='font-normal text-gray-800 mt-3 sm:lg:text-sm lg:text-base xl:lg:text-xl '>Mohammed Furqaan</div>
                    </div>
                    <div className="pb-5  p-6 m-3">
                        <Box className='rounded-2xl' boxShadow={5} alignSelf={'center'} sx={{ height: "20rem" }} component={'img'} src={decoration2} />
                        <div className='font-extrabold mt-3 sm:lg:text-base lg:text-xl xl:lg:text-2xl '>Co-Founder</div>
                        <div className='font-normal text-gray-800 mt-3 sm:lg:text-sm lg:text-base xl:lg:text-xl '></div>
                    </div>
                    <div className="pb-5  p-6 m-3">
                        <Box className='rounded-2xl' boxShadow={5} alignSelf={'center'} sx={{ height: "20rem" }} component={'img'} src={decoration3} />
                        <div className='font-extrabold mt-3 sm:lg:text-base lg:text-xl xl:lg:text-2xl '>Technical Support</div>
                        <div className='font-normal text-gray-800 mt-3 sm:lg:text-sm lg:text-base xl:lg:text-xl '>Mohammed Abdullah</div>
                    </div>
                </div>

            </div>
        </>
    );
}