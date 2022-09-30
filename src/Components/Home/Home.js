import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import decoration from '../../img/logo/GazalLogoOnly.jpg'
/* fontSize={{ xs: '20px', sm: '26px', md: '34px', lg: '46px' }} */
export default function Home() {

    return (
        <div id="#Home">
            <Box
                mx={{ xs: 3, sm: 10 }}
                my={{ xs: 2, sm: 5 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Box className="rounded-2xl" display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent='center' margin={'10px'} boxShadow={5} padding={{ xs: 1, sm: 2 }} bgcolor={'#fed812'}>
                        <Box display={'flex'} flexDirection={'column'} alignSelf={'center'} padding={{ xs: 3, sm: 5 }} >
                            <Typography className='drop-shadow-xl' textAlign="center" fontFamily={'Righteous'} variant="h3" pt={{ xs: 1, sm: 2 }}>Gazal Capital</Typography>
                            <Typography className='drop-shadow-xl' textAlign="center" fontFamily={'Righteous'} variant="h6" pt={{ xs: 1, sm: 2 }}>A subsidiary of Bluechip Constructions</Typography>
                            <Typography className='drop-shadow-xl' textAlign="center" fontFamily={'Righteous'} variant="p" pt={{ xs: 1, sm: 2 }}>Serving at Chennai, Bengaluru and Tirunelveli</Typography>
                        </Box>
                        <Box className='rounded-2xl' boxShadow={5} alignSelf={'center'} sx={{ height: "20rem" }} component={'img'} src={decoration} />
                    </Box>
                </Container>
            </Box>
        </div>
    );
}