import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import decoration from '../../img/logo/PinkHome.png'
/* fontSize={{ xs: '20px', sm: '26px', md: '34px', lg: '46px' }} */
export default function PinkHome() {

    return (
        <div id="#Home">
            <Box
                mx={{ xs: 3, sm: 10 }}
                my={{ xs: 2, sm: 5 }}
                height="90vh"
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Box className="rounded-2xl" display={'flex'} flexDirection={'column'} flexWrap={'wrap'} alignItems={'center'} justifyContent='center' margin={'10px'} boxShadow={5} padding={{ xs: 1, sm: 2 }} bgcolor={'black'}>
                        <Box className='rounded-2xl' boxShadow={5} alignSelf={'center'} component={'img'} src={decoration} />
                        <Box display={'flex'} flexDirection={'column'} alignSelf={'center'} padding={{ xs: 3, sm: 5 }} >
                            <Typography className='drop-shadow-xl' textAlign="center" fontFamily={'ZCOOL XiaoWei'} fontWeight='bold' variant="h6" pt={{ xs: 1, sm: 2 }}>Gazal Capital Presents</Typography>
                            <Typography className='drop-shadow-xl' textAlign="center" fontFamily={'ZCOOL XiaoWei'} variant="h3" pt={{ xs: 1, sm: 2 }}>The Pink Dove</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}