import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import gazalLogo from '../../img/logo/GazalCapitalNavLogo.png'
import { pages } from '../../store/pages.js';
import { icons } from '../../store/pages.js';

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    var s = window.location.pathname.split('/');
    var siteURLName = s[1];
    const [pageObj, setpageObj] = React.useState(pages[siteURLName]);
    const [iconObj, seticonObj] = React.useState(icons[siteURLName]);
    React.useEffect(() => {
        setpageObj(pages[siteURLName]);
        seticonObj(icons[siteURLName])
    }, [window.location.pathname]);
    console.log(iconObj);
    console.log(gazalLogo);

    return (
        <AppBar position="static" variant='outlined'
            sx={{
                bgcolor: '#0101',
                color: 'black',
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pageObj.map((page, index) => (
                                <Link to={page["path"]} key={page + index}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        {page["icon"]}
                                        <Typography textAlign="center" padding={"5px"}>
                                            {page["label"]}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignSelf: 'right', marginLeft: 'auto' }} >
                        {
                            pageObj.map((page, index) => (
                                <Link
                                    to={page["path"]}
                                    className="shadow-lg rounded-lg mr-2 transition hover:bg-gray-700   hover:-translate-y-1 duration-[2500]">
                                    <Button
                                        key={page + index}
                                        onClick={handleCloseNavMenu}
                                        className="hover:fill-current hover:text-white"
                                    >
                                        {/* {page["icon"]} */}
                                        {/* <div className="p-1" /> */}

                                        {page["label"]}
                                    </Button>
                                </Link>
                            ))
                        }
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <img alt="Icon" src={iconObj} className="h-9" />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;