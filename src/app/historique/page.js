"use client"; // Assurez-vous que ce fichier est un composant client

import React from 'react';
import { Anek_Devanagari } from 'next/font/google';
import {Grid, Typography} from "@mui/material";

// Importation de la police Anek Devanagari
const anekDevanagari = Anek_Devanagari({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export default function Historique() {
    return (
        <>
            <Grid container sx={{height:"100vh", alignItems:"center"}}>
                <Grid item xs={6} sx={{textAlign:"center"}}>
                    <Typography component="h1" variant="h4">IA et Armement : Exploration d'une Nouvelle Époque</Typography>
                </Grid>
                <Grid item xs={6} sx={{backgroundColor:"red", height:"100%"}}></Grid>
            </Grid>
        </>
    );
}
