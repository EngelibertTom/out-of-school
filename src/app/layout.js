"use client";
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import "./globals.css";
import NavBar from "@/components/Navbar";
import theme from './theme';

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
        <body style={{ marginLeft: "5%", marginRight: "5%" }}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Box
                component="main"
                sx={{
                    marginTop: {
                        xs: "20%",
                        sm: "15%",
                        md: "10%",
                        lg: "8%",
                    }
                }}
            >
                {children}
            </Box>
        </ThemeProvider>
        </body>
        </html>
    );
}
