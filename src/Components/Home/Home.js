import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import decoration from '../../img/logo/GazalLogoOnly.jpg'
/* fontSize={{ xs: '20px', sm: '26px', md: '34px', lg: '46px' }} */
export default function Home() {

    return (
        <div id="#Home">
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 2, sm: 5 }}
                bgcolor={'#333333'}
                color={'white'}
                height={'90vh'} >
                <Container className='w-full'>
                    <Box className="mt-8 rounded-t-2xl flex flex-col flex-wrap justify-center" boxShadow={5} padding={{ xs: 1, lg: 2 }} paddingBottom={'30px'} bgcolor={'#000'}>
                        <Box className='rounded-2xl' boxShadow={5} alignSelf={'center'} sx={{ height: "20rem" }} component={'img'} src={decoration} />
                        <Typography className='drop-shadow-xl' textAlign="center" fontWeight={'bold'} color={'#d5d47e'} fontFamily={'Be Vietnam Pro'} variant="h3" pt={{ xs: 1, sm: 2 }} paddingBottom={'30px'} >GAZAL CAPITAL</Typography>
                    </Box>
                    <Box className="rounded-b-2xl p-7 bg-white w-full">
                        <Typography className='drop-shadow-xl text-gray-800 text-2xl font-sans' textAlign={'center'} fontFamily={'Be Vietnam Pro'} pt={{ xs: 1, sm: 2 }}>The Family Company</Typography>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}