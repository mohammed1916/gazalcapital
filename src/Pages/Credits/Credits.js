import MdPhone from '@mui/icons-material/Phone';
import ResponsiveAppBar from '../../Components/Navbar/ResponsiveAppBar';
import Box from '@mui/material/Box'
import decoration1 from '../../img/Assets/3372216.jpg'
import decoration2 from '../../img/Assets/5154267.jpg'
import decoration3 from '../../img/Assets/20945469.jpg'

export default function Credits() {
    return (
        < >
            <ResponsiveAppBar />
            <div className='p-5'>
                <div className="text-center font-bold text-5xl">
                    CREDITS
                </div>
                <div className="flex flex-col flex-wrap items-center text-center">
                    <div className="pb-5  p-6 m-3">
                        <div className='font-extrabold mt-3 sm:lg:text-base lg:text-xl xl:lg:text-2xl '>Founder Image</div>
                        <div className='font-normal text-gray-800 mt-3 sm:lg:text-sm lg:text-base xl:lg:text-xl '>
                            <a href="http://www.freepik.com">Designed by slidesgo / Freepik</a>
                        </div>
                    </div>
                    <div className="pb-5  p-6 m-3">
                        <div className='font-extrabold mt-3 sm:lg:text-base lg:text-xl xl:lg:text-2xl '>Co-Founder Image</div>
                        <div className='font-normal text-gray-800 mt-3 sm:lg:text-sm lg:text-base xl:lg:text-xl '>
                            <a href="http://www.freepik.com">Designed by vectorjuice / Freepik</a>
                        </div>
                    </div>
                    <div className="pb-5  p-6 m-3">
                        <div className='font-extrabold mt-3 sm:lg:text-base lg:text-xl xl:lg:text-2xl '>Technical Support Image</div>
                        <div className='font-normal text-gray-800 mt-3 sm:lg:text-sm lg:text-base xl:lg:text-xl '>
                            <a href="http://www.freepik.com">Designed by Freepik</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}