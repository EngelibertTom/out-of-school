import React from 'react';
import { Button, Grid, Typography, Paper, Box } from '@mui/material';
import AnimatedHourglass from '@/components/animations/AnimatedHourglass';

const Accueil = ({ handleClick }) => {
    return (
        <Grid container spacing={4} sx={{ padding: 4, height:"100vh" }}>

            {/* Main Content */}
            <Grid item xs={12}  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h3" component="h1" sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}>
                    <strong>IA et Armement : Un voyage interactif</strong>
                </Typography>

            </Grid>

            <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                        <strong>Bienvenue dans notre exploration de l'intelligence artificielle et de son impact sur l'armement.</strong>
                    </Typography>
                    <Typography variant="body1">
                        L'IA transforme profondément le domaine militaire, avec des applications allant des drones autonomes aux systèmes de défense intelligents. Ces évolutions apportent des opportunités significatives mais soulèvent également des défis éthiques et sécuritaires importants.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Ce site a pour objectif de vous informer et de vous sensibiliser sur les implications de ces technologies avancées. Nous vous invitons à explorer les différents aspects de l'IA dans le domaine militaire, à participer à des simulations interactives et à réfléchir aux choix qui façonneront l'avenir.
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Box sx={{ textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            borderRadius: 2,
                            padding: '12px 24px',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            backgroundColor: '#007bff',
                            '&:hover': {
                                backgroundColor: '#0056b3',

                            }
                        }}
                        onClick={handleClick}
                    >
                        <strong>Commencer</strong>
                    </Button>
                </Box>
            </Grid>

            {/* Additional Content or Sections */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {/* Add any additional content or sections here if needed */}
            </Grid>
        </Grid>
    );
};

export default Accueil;
