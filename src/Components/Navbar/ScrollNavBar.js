import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Person4Icon from '@mui/icons-material/Person4';
import BackpackIcon from '@mui/icons-material/Backpack';
import { Link } from 'react-scroll'


const pages = ['Products', 'Contact Us'];
const links = ["#Products", "#Contact"]
const icons = [
    <BackpackIcon fontSize="small" />,
    <Person4Icon fontSize="small" />,
]

const ScrollNavBar = () => {
    const StyledBreadcrumb = styled(Chip)(({ theme }) => {
        const backgroundColor = theme.palette.grey[300]

        return {
            backgroundColor,
            height: theme.spacing(3),
            color: 'black',
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover, &:focus': {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active': {
                boxShadow: theme.shadows[2],
                backgroundColor: emphasize(backgroundColor, 0.12),
            },
        };
    });

    return (
        <AppBar position='sticky'
            sx={{
                bgcolor: '#fff',
                color: 'black',
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters variant='dense'>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {pages.map((page, index) => (
                            <Link to={links[index]} smooth={true} duration={500}>
                                <StyledBreadcrumb
                                    key={page}
                                    component="a"
                                    label={page}
                                    icon={icons[index]}
                                />
                            </Link>
                        ))}
                    </Breadcrumbs>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ScrollNavBar;