'use client'
import React from 'react';
import { Grid, Typography, Box, Chip, Divider } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useInView } from 'react-intersection-observer';

export default function Interview() {
    // Hook pour gérer l'apparition des sections
    const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ukraineRef, inView: ukraineInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: dronesRef, inView: dronesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: antiDroneRef, inView: antiDroneInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: futureWarfareRef, inView: futureWarfareInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <Grid
            container
            sx={{
                minHeight: "100vh",
                padding: 4,
                backgroundColor: "#f9f9f9",
                marginTop: 4
            }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12}>
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        mb: 1,
                        fontWeight: 'bold',
                        color: '#333',
                        textAlign: 'center'
                    }}
                >
                    Interview avec Thierry Berthier
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Divider>
                    <Chip label="Interview" size="small" />
                </Divider>
            </Grid>

            <Grid item xs={12} sm={10} md={8}>
                <Box
                    sx={{
                        position: 'relative',
                        paddingBottom: '56.25%', // Ratio 16:9
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: 2,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        mb: 2,
                        '& iframe': {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }
                    }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/jtoVTOJu8X0"
                        title="Interview avec Thierry Berthier"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>
            </Grid>

            <Grid item sx={{marginBottom: 3}} xs={12}>
                <Divider>
                    <Chip label="Compte-rendu" size="small" />
                </Divider>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <Fade in={introInView} timeout={1000}>
                    <div ref={introRef}>
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', textAlign:'center' }}>
                            Compte-rendu de notre interview avec Thierry Berthier
                        </Typography>
                    </div>
                </Fade>

                <Fade in={ukraineInView} timeout={1000}>
                    <div ref={ukraineRef}>
                        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                            Utilisation de l'IA et de la robotique dans la guerre en Ukraine
                        </Typography>
                        <Typography paragraph>
                            *00:03:32 (temps vidéo)*
                        </Typography>
                        <Typography paragraph>
                            **Philippe** : Comment la guerre en Ukraine utilise-t-elle l’IA et la robotique dans ses combats ?
                        </Typography>
                        <Typography paragraph>
                            **Thierry Berthier** : La guerre en Ukraine se distingue par une utilisation massive des drones et de la robotique. Des deux côtés du conflit, les armées déploient divers types de robots, principalement aériens, mais aussi navals et terrestres. Les drones aériens sont utilisés pour le renseignement, le marquage de cibles, et même comme munitions téléopérées (MTO), capables de transporter une charge explosive pour frapper des cibles spécifiques. Le coût relativement faible de ces petits drones contraste avec les dégâts considérables qu’ils peuvent infliger à des équipements bien plus coûteux.
                        </Typography>
                        <Typography paragraph>
                            Philippe mentionne les différents niveaux d’automatisation des armes, allant de L0 (téléopérée) à L5 (entièrement autonome), ce qui conduit à une discussion approfondie sur l’impact de cette automatisation dans le contexte des conflits actuels et futurs.
                        </Typography>
                    </div>
                </Fade>

                <Fade in={dronesInView} timeout={1000}>
                    <div ref={dronesRef}>
                        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                            Identification ami/ennemi et défis des drones autonomes
                        </Typography>
                        <Typography paragraph>
                            *00:25:46 (temps vidéo)*
                        </Typography>
                        <Typography paragraph>
                            **Tom** : Les drones peuvent-ils différencier les ennemis des alliés ?
                        </Typography>
                        <Typography paragraph>
                            **Thierry Berthier** : Depuis la Seconde Guerre mondiale, les avions de chasse utilisent l’Identification Friend or Foe (IFF) pour distinguer les amis des ennemis. Cependant, l’intégration de cette technologie dans les petits drones pose encore des défis considérables. Sur le front ukrainien, par exemple, il n'est pas rare que des drones russes soient abattus par leurs propres troupes, faute de pouvoir être identifiés correctement. Bien que des transpondeurs soient progressivement adaptés aux petits drones, le risque de falsification d’identification demeure, ce qui nécessite des solutions cryptographiques robustes.
                        </Typography>
                    </div>
                </Fade>

                <Fade in={antiDroneInView} timeout={1000}>
                    <div ref={antiDroneRef}>
                        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                            Défense contre les attaques de drones
                        </Typography>
                        <Typography paragraph>
                            *00:32:15 (temps vidéo)*
                        </Typography>
                        <Typography paragraph>
                            **Philippe** : L'armée française est-elle capable de nous protéger contre une attaque de drones, qu’ils soient kamikazes ou téléopérés ?
                        </Typography>
                        <Typography paragraph>
                            **Thierry Berthier** : La lutte anti-drone (LAD) est un défi mondial, que ce soit en France ou ailleurs. Il est bien plus facile de mener une attaque avec des drones que de la contrer. Bien que la France soit l’un des leaders mondiaux dans le domaine de la défense anti-drone, les attaques saturantes de petits drones restent extrêmement difficiles à contrer. L’avenir réside probablement dans le développement de drones intercepteurs capables de contrer des essaims ennemis par des essaims de drones défensifs, une approche reposant sur des algorithmes d’apprentissage automatique et de vision par ordinateur.
                        </Typography>
                    </div>
                </Fade>

                <Fade in={futureWarfareInView} timeout={1000}>
                    <div ref={futureWarfareRef}>
                        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                            L'avenir des conflits : robots contre robots ?
                        </Typography>
                        <Typography paragraph>
                            *00:40:38 (temps vidéo)*
                        </Typography>
                        <Typography paragraph>
                            **Philippe** : Que nous réserve l'avenir des conflits armés ? Verrons-nous des guerres où seuls des robots s'affrontent en première ligne ?
                        </Typography>
                        <Typography paragraph>
                            **Thierry Berthier** : Il est fort probable que les futurs conflits voient l'utilisation massive de robots en première ligne. Un drone kamikaze, par exemple, peut détruire un char d’assaut avec une petite charge explosive, rendant la défense humaine presque impossible. Les combats futurs opposeront très probablement des essaims de robots contrôlés par des IA spécialisées en apprentissage par renforcement, vision par ordinateur, et autres technologies de pointe. Le soldat humain sera progressivement remplacé par des systèmes robotisés plus rapides, agressifs et furtifs.
                        </Typography>
                    </div>
                </Fade>
            </Grid>
        </Grid>
    );
}
