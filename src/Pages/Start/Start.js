import ResponsiveAppBar from '../../Components/Navbar/ResponsiveAppBar';
import Home from '../../Components/Home/Home';
import ScrollNavBar from '../../Components/Navbar/ScrollNavBar';
import Form from '../../Components/Forms/Form';
import PinkBrand from '../../Components/Home/PinkBrand';


export default function Start() {
    return (
        < >
            <ResponsiveAppBar />
            <ScrollNavBar />
            <Home />
            <PinkBrand />
            <Form />
        </>
    );
}