import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

const pages = [
    { title: 'Все котики', link: '/' },
    { title: 'Любимые котики', link: '/favorite' }
];

interface INavBar { }

const NavBar: React.FC<INavBar> = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        {pages.map((page) => (
                            <Link href={page.link} key={page.title}>
                                <Button
                                    key={page.title}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;