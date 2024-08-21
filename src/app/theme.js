// src/theme.js

import { createTheme } from '@mui/material/styles';
import { Anek_Devanagari } from 'next/font/google';

const anekDevanagari = Anek_Devanagari({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: anekDevanagari.style.fontFamily,
        h6: {
            fontFamily: anekDevanagari.style.fontFamily,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: anekDevanagari.style.fontFamily,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: anekDevanagari.style.fontFamily,
                },
            },
        },
    },
});

export default theme;
