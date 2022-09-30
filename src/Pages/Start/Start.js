import ResponsiveAppBar from '../../Components/Navbar/ResponsiveAppBar';
import Home from '../../Components/Home/Home';
import Products from '../../Components/Products/Products';
import ScrollNavBar from '../../Components/Navbar/ScrollNavBar';
import { styled } from '@mui/material/styles';


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
export default function Start() {
    return (
        < >
            <ResponsiveAppBar />
            <ScrollNavBar />
            <Offset />
            <Home />
            <Products />
        </>
    );
}