import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function Lexique() {
    return (
        <Paper sx={{ backgroundColor: '#fff', padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Lexique
            </Typography>

            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Reinforcement Learning (Apprentissage par renforcement)
                </Typography>
                <Typography variant="body1">
                    En apprentissage automatique, l'apprentissage par renforcement consiste à apprendre les actions à prendre, à partir d'expériences, de façon à optimiser une récompense quantitative au cours du temps.
                </Typography>
            </Box>

            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Processus IFF (Identification Friend or Foes)
                </Typography>
                <Typography variant="body1">
                    Ce processus permettrait aux drones de différencier les drones ennemis et alliés. Ce système repose sur un échange de clés secrètes (cryptographie).
                </Typography>
            </Box>

            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Le Swarming
                </Typography>
                <Typography variant="body1">
                    Capacité d’un groupe de drones à se coordonner pour effectuer une mission en essaim (repérage, attaque, défense, port de charge, manipulation / action).
                </Typography>
            </Box>

            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Swarm Counter Swarm
                </Typography>
                <Typography variant="body1">
                    Combat aérien entièrement automatisé pour contrer une attaque. Un essaim de 200 drones m'attaque,
                    j'en envoie 300 qui iront exploser sur ces drones afin de défendre.
                </Typography>
            </Box>

            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Niveaux d'automatisation (définis par Thierry Berthier)
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <img
                        alt="description niveaux automatisations"
                        src='assets/images/automatisation1.webp'
                        style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
                    />
                    <img
                        alt="description niveaux automatisations"
                        src='assets/images/automatisation2.webp'
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Box>
            </Box>
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    LAD
                </Typography>
                <Typography variant="body1">
                    La lutte anti-drone, ou LAD, consiste à neutraliser tous les risques engendrés par les drones.
                </Typography>
            </Box>

            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Robots MTO
                </Typography>
                <Typography variant="body1">
                    Un drone MTO (munition téléopérée) est un type de drone conçu pour des missions militaires. Ce type de drone est équipé de systèmes de guidage et de contrôle à distance, permettant à un opérateur de le piloter vers une cible. Une fois arrivé à destination, le drone explose  pour neutraliser sa cible.
                </Typography>
            </Box>
        </Paper>
    );
}
