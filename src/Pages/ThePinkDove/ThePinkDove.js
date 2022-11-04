import ResponsiveAppBar from '../../Components/Navbar/ResponsiveAppBar';
import PinkHome from '../../Components/Home/PinkHome';
import Products from '../../Components/Products/Products';
import ScrollNavBar from '../../Components/Navbar/ScrollNavBar';
import { styled } from '@mui/material/styles';
import Form from '../../Components/Forms/Form';


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
export default function ThePinkDove() {
    return (
        < >
            <ResponsiveAppBar />
            <ScrollNavBar />
            <Offset />
            <PinkHome />
            <Products />
            <Form order={false} />
        </>
    );
}