import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

// import { products } from '../../store/products.js'
import { brocher } from '../../store/brochers.js'
import { carousal } from '../../store/carousal.js'
import Carousal from '../../Components/Carousal/Carousal';
import ResponsiveAppBar from '../../Components/Navbar/ResponsiveAppBar';
import Form from '../../Components/Forms/Form.js';


function getURLUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1) : siteName;
}
function getUsername(siteName) {
    const n = siteName.lastIndexOf('/');
    return (n != -1) ? siteName.substring(n + 1).replace("%20", " ") : siteName;
}

export default function Site() {
    var siteName = getUsername(window.location.pathname);
    var siteURLName = getURLUsername(window.location.pathname);

    return (
        <>
            <Box className="bg-gray-100">
                <ResponsiveAppBar />
                <Box bgcolor={'#59032d'} padding={'10px'} boxShadow={5}>
                    <Typography textAlign="center" fontFamily={'ZCOOL XiaoWei'} fontWeight='bold' variant={'h3'} color={'white'} pt={{ xs: 0.5, sm: 1 }}>{siteName}</Typography>
                    <Typography textAlign="center" fontFamily={'ZCOOL XiaoWei'} variant={'h5'} color={'white'} pt={{ xs: 0.5, sm: 2 }}>Product Overview</Typography>
                </Box>
                <div >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                        {(typeof (carousal[siteURLName]) !== 'undefined')
                            ?
                            <div>
                                <div className=" bg-white mt-6 border-4 gradient-box gradient-box-purple" >
                                    <Carousal />
                                </div>
                            </div>
                            :
                            <div>
                            </div>
                        }
                        {/* {(typeof (products["products"][siteURLName]) !== 'undefined')
                        ?
                        <div className="max-w-2xl mx-auto pt-16 pb-3 sm:pt-24 sm:pb-5 lg:pt-32 lg:pb-7 lg:max-w-none">
                            <h2 className="text-5xl font-extrabold text-gray-900 text-center"> Product Features</h2>
                        </div>
                        :
                        <div>
                        </div>
                    }
                    {(typeof (products["products"][siteURLName]) !== 'undefined')
                        ?
                        <div className="mt-6 mb-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                            {products["products"][siteURLName].map((cardImg, index) => (
                                <div key={cardImg}>
                                    <div className="bg-gray-200 rounded-md overflow-hidden aspect-none">
                                        <img
                                            src={cardImg}
                                            className=" w-full object-center"
                                        />
                                    </div>
                                </div>
                            ))}

                        </div>
                        :
                        <div>
                        </div>
                    } */}
                        {(typeof (brocher["brocher"][siteURLName]) !== 'undefined')
                            ?
                            <div className="max-w-2xl mx-auto pt-16 pb-3 sm:pt-24 sm:pb-5 lg:pt-32 lg:pb-7 lg:max-w-none">
                                <h2 className="text-5xl font-extrabold text-gray-900 text-center">Specifications</h2>
                            </div>
                            :
                            <div>
                            </div>
                        }
                        {(typeof (brocher["brocher"][siteURLName]) !== 'undefined')
                            ?
                            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none ">
                                {brocher["brocher"][siteURLName].map((cardImg, index) => (
                                    <div key={cardImg}>
                                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                                            <img
                                                src={cardImg}
                                                className=" w-full object-center hover:object-scale-down"
                                                alt='Image View is not compatible with this browser'
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            :
                            <div>
                            </div>
                        }
                        <Form order={true} />
                    </div>
                </div>
            </Box>
        </>
    );
}