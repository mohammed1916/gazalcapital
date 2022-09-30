import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import EmailIcon from '@mui/icons-material/Email';
import email from '../../img/icons/email.png'
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
/*  */
export default function Footer() {

    return (
        <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor={'#050522'}
            color={'white'} >
            <Container sx={{ width: '100%' }}>
                <Divider sx={{
                    "&::before, &::after": {
                        borderColor: "#090081",
                    },
                }} pt={{ xs: 1, sm: 2 }}><Chip style={{
                    color: "white", backgroundColor: "#090081"
                }} label="Gazal Capital" /></Divider>
                <Grid container spacing={5} pt={{ xs: 2, sm: 4 }} pb={{ xs: 2, sm: 4 }}>
                    <Grid item xs={12} sm={6} pb={{ xs: 2, sm: 4 }}>
                        <Box borderBottom={2}>Website</Box>
                        <Box pt={{ xs: 2, sm: 4 }}>
                            <Link href="/site/The%20Pink%Dove" color="inherit" underline="hover">
                                The Pink Dove
                            </Link>
                        </Box>
                        <Box pt={{ xs: 2, sm: 4 }}>
                            <Link href="/" color="inherit" underline="hover">
                                Home
                            </Link>
                        </Box>
                        <Box pt={{ xs: 2, sm: 4 }}>
                            <Link href="/team" color="inherit" underline="hover">
                                Team
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box borderBottom={2}>Get In Touch</Box>
                        {/* <Box pt={{ xs: 2, sm: 4 }}>
                            <div>
                                <BusinessRoundedIcon />
                                <span className="pl-3 p-1 font-semibold">OFFICE ADDRESS:</span>
                            </div>
                            <div className="pl-9">
                                <span>69, 7th Cross, Hennur Main Road, Lingarajapuram, Bangalore 560051</span>
                            </div>
                        </Box> */}
                        <Box pt={{ xs: 2, sm: 4 }}>
                            <div>
                                <CallRoundedIcon />
                                <span className="pl-3 p-1">+91 77608 51058</span><br />
                            </div>
                        </Box>
                        <Box pt={{ xs: 2, sm: 4 }} >
                            <div>
                                <EmailRoundedIcon />
                                <span className="pl-3 p-1 font-semibold">Gazal Capital:</span>
                            </div>
                            <div className="pl-9">
                                <span >gazalcapitalgc@gmail.com</span>
                            </div>
                            <div>
                                <EmailRoundedIcon />
                                <span className="pl-3 p-1 font-semibold">The Pink Dove:</span>
                            </div>
                            <div className="pl-9">
                                <span >thepinkdovegc@gmail.com</span>
                            </div>
                        </Box>
                    </Grid>

                </Grid>
                <Divider sx={{
                    borderColor: "#090081",
                }} />
                <Typography textAlign="center" color={'white'} pt={{ xs: 1, sm: 2 }}>Copyright &copy; {new Date().getFullYear()} Gazal Capital</Typography>
            </Container>
        </Box >
    );
}