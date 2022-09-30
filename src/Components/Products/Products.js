import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box'
import {
    useNavigate
} from "react-router-dom";

import diaperbag from '../../img/products/diaperbag/Views/1.jpg'

const cards = [diaperbag];
const cardName = ["Diaper Bag"];
const cardAddress = ["A multi-pocket, water resistent bag with luxurious space to make your motherhood beautiful"];

export default function Products() {
    let navigate = useNavigate();
    const nav = (index) => {
        navigate(`/site/${index}`)
    }

    return (
        <div id='#Completed'>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor={'white'}
                color={'white'} >
                <Container sx={{ width: '100%' }}>
                    <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'34px'} color={'orange'} pt={{ xs: 1, sm: 2 }}>Our Products</Typography>
                    {/* <Typography textAlign="center" fontFamily={'Righteous'} fontSize={'44px'} color={'#ddd'} pt={{ xs: 1, sm: 2 }}>Completed</Typography> */}
                    <Box display={'flex'} flexWrap={'wrap'} justifyContent='space-evenly' borderRadius={'20px'} padding={'10px'}>
                        {cards.map((cardImg, index) => (
                            <Card sx={{ maxWidth: 310, padding: '10px', margin: '20px', ":hover": "boxShadow: 0 15px 70px -12px rgba(0,0,0,0.3)", boxShadow: 6 }} onClick={() => nav(cardName[index])} className="transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 hover:bg-black hover:shadow-fuchsia-900 hover:shadow-xl hover:text-white duration-[2500]">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={cardImg}
                                    />
                                    <CardContent className='flex items-center flex-col'>
                                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                            {cardName[index]}
                                        </Typography>
                                        <Typography variant="body2" className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                                            <span className="relative text-white">
                                                {cardAddress[index]}
                                            </span>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        </div>
    );
}