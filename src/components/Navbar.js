"use client";

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Anek_Devanagari } from 'next/font/google';

// Importation de la police Anek Devanagari
const anekDevanagari = Anek_Devanagari({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const NavBar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [subMenu, setSubMenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSubMenuClick = (event) => {
        setSubMenu(event.currentTarget);
    };

    const handleSubMenuClose = () => {
        setSubMenu(null);
    };

    return (
        <>
            <AppBar
                className={anekDevanagari.className}
                sx={{
                    backgroundColor: scrolling ? "white" : "transparent",
                    color: "black",
                    transition: 'background-color 0.3s ease',
                    boxShadow: scrolling ? 1 : 0,
                }}
                position="fixed"
            >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <strong>IA et armement</strong>
                    </Typography>
                    <Button className={anekDevanagari.className} color="inherit" href="/">
                        Accueil
                    </Button>
                    <Button color="inherit" href="/forum">
                        Forum INCYBER
                    </Button>
                    <Button color="inherit" onClick={handleMenuClick}>
                        Interview
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar;
