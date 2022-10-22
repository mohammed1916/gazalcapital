import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import decoration from '../../img/logo/PinkHome.png'
/* fontSize={{ xs: '20px', sm: '26px', md: '34px', lg: '46px' }} */
export default function PinkBrand() {

    return (
        <div id="#Brand">
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 2, sm: 5 }}
                bgcolor={'#59032d'}
                color={'white'}
                height={'90vh'} >
                <Container sx={{ width: '100%' }}>
                    <Box className="rounded-2xl" display={'flex'} flexDirection={'column'} flexWrap={'wrap'} alignItems={'center'} justifyContent='center' margin={'10px'} boxShadow={'0px 2px 30px #c30164,0px 5px 10px rgba(0,0,0)'} padding={{ xs: 1, sm: 2 }} bgcolor={'black'}>
                        <Box className='rounded-2xl' boxShadow={5} alignSelf={'center'} component={'img'} src={decoration} />
                        <Box display={'flex'} flexDirection={'column'} alignSelf={'center'} padding={{ xs: 3, sm: 5 }} >
                            <Typography className='drop-shadow-xl' textAlign="center" fontFamily={'ZCOOL XiaoWei'} fontWeight='bold' variant="h6" pt={{ xs: 1, sm: 2 }}>Gazal Capital Presents</Typography>
                            <Typography className='drop-shadow-xl' textAlign="center" fontFamily={'ZCOOL XiaoWei'} variant="h3" pt={{ xs: 1, sm: 2 }}>The Pink Dove</Typography>
                            {/* <Typography className='drop-shadow-xl' textAlign="center" fontFamily={'Righteous'} variant="p" pt={{ xs: 1, sm: 2 }}> </Typography> */}
                        </Box>
                        <Box color='white'>
                            <Link href="/thepinkdove" color="inherit" underline="none" className="font-extrabold text-2xl bg-pink-800 p-3 rounded-lg transition delay-100 hover:-translate-y-1 hover:bg-pink-600 duration-300">
                                Learn More
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}