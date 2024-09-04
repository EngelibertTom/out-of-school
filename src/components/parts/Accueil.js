'use client'
import React from 'react';
import { Button, Grid, Typography, Paper, Box } from '@mui/material';
import AnimatedHourglass from '@/components/animations/AnimatedHourglass';
import { useRouter } from 'next/navigation'

const Accueil = ({ handleClick}) => {
    const router = useRouter();
    return (
        <Grid container spacing={4} sx={{ padding: 4}}>

            {/* Main Content */}
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h3" component="h1" sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}>
                    <strong>Exploration de l'IA et l'armement</strong>
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                        <strong>Bienvenue dans notre exploration de l'intelligence artificielle et de son impact sur l'armement.</strong>
                    </Typography>
                    <Typography variant="body1">
                        L'IA transforme profondément le domaine militaire, avec des applications allant des drones autonomes aux systèmes de défense intelligents. Ces évolutions apportent de nombreuses opportunités mais soulèvent également des défis éthiques importants.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Ce site a pour objectif de vous informer et de vous sensibiliser sur les utilisations de ces technologies avancées. Nous vous invitons à appuyer sur le bouton <strong>Commencer</strong> afin de commencer la présentation qui présentera la perception que l'on avait de l'IA avant sa concrétisation, en passant par la situation actuelle dans le monde et en finissant par les possibles évolutions. Nous vous invitons également à visionner notre interview avec Thierry Berthier (expert dans le domaine de l'IA) et aussi la conférence sur ce sujet qui a eu lieu lors du Forum InCyber. Pour ces deux vidéos, vous retrouverez un compte-rendu écrit en dessous de ces dernières.
                    </Typography>
                </Paper>
            </Grid>

            {/* Interview Section */}
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                        <strong>Interview Exclusive : L'IA dans le domaine militaire</strong>
                    </Typography>
                    <Typography variant="body1">
                        Découvrez une interview approfondie avec un expert en intelligence artificielle qui discute des enjeux et des perspectives d'avenir de l'IA dans le domaine militaire.
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                borderRadius: 2,
                                padding: '12px 24px',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                backgroundColor: '#6c757d',
                                '&:hover': {
                                    backgroundColor: '#5a6268',
                                }
                            }}
                            onClick={() => router.push('/interview')}
                        >
                            <strong>Voir l'interview</strong>
                        </Button>
                    </Box>
                </Paper>
            </Grid>

            {/* Conference Section */}
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                        <strong>Conférence : L'avenir de l'IA et de l'armement</strong>
                    </Typography>
                    <Typography variant="body1">
                        Assistez à une conférence passionnante sur les implications de l'intelligence artificielle dans le futur des conflits armés et la sécurité internationale.
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                borderRadius: 2,
                                padding: '12px 24px',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                backgroundColor: '#6c757d',
                                '&:hover': {
                                    backgroundColor: '#5a6268',
                                }
                            }}
                            onClick={() => router.push('/forum')}
                        >
                            <strong>Voir la conférence</strong>
                        </Button>
                    </Box>
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
