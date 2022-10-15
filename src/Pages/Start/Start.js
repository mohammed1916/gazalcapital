import ResponsiveAppBar from '../../Components/Navbar/ResponsiveAppBar';
import MainAppBar from '../../Components/Navbar/MainAppBar';
import Home from '../../Components/Home/Home';
import Products from '../../Components/Products/Products';
import ScrollNavBar from '../../Components/Navbar/ScrollNavBar';
import { styled } from '@mui/material/styles';
import Form from '../../Components/Forms/Form';


export default function Start() {
    return (
        < >
            <MainAppBar />
            <ResponsiveAppBar />
            <ScrollNavBar />
            <Home />
            <Form />
        </>
    );
}