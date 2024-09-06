import React from "react";
import {Grid, Typography, Avatar, Fade, Paper, Button} from "@mui/material";
import { useInView } from "react-intersection-observer";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WarningIcon from "@mui/icons-material/Warning";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
// Enlève Slider si tu ne l'utilises pas
// import Slider from "react-slick";
// import SliderComponent from "@/components/slider/slider";

const PerceptionIA = ({handlePassee, handlePrevPasse}) => {
    // Détection de la visibilité pour chaque section
    const { ref: techRef, inView: techVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: fearsRef, inView: fearsVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: philRef, inView: philVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: historyRef, inView: historyVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: mythRef, inView: mythVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: renaissanceRef, inView: renaissanceVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: modernRef, inView: modernVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: popCultureRef, inView: popCultureVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: beyondRef, inView: beyondVisible } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <Grid container spacing={4} sx={{ padding: 4}}>
            <Grid item xs={12}>
                <Typography component="h1" variant="h4" align="center" sx={{ marginBottom: 4 }}>
                    Perception de l'IA et de la robotique avant sa concrétisation
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} ref={techRef} >
                <Fade in={techVisible} timeout={1000}>
                    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', minHeight:330}}>
                        <Avatar sx={{ bgcolor: '#1976d2', margin: 'auto', marginBottom: 2 }}>
                            <EngineeringIcon />
                        </Avatar>
                        <Typography variant="h6"><strong>Un progrès technologique</strong></Typography>
                        <Typography variant="body1">
                            L'IA et la robotique étaient perçues comme le prochain grand bond technologique qui allait améliorer la qualité de vie et résoudre des problèmes complexes. On imaginait des robots bienveillants aidant au quotidien, libérant les humains pour des activités plus créatives et intellectuelles.
                        </Typography>
                    </Paper>
                </Fade>
            </Grid>

            <Grid item xs={12} sm={6} md={4} ref={fearsRef}>
                <Fade in={fearsVisible} timeout={1000}>
                    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', minHeight:330 }}>
                        <Avatar sx={{ bgcolor: '#f44336', margin: 'auto', marginBottom: 2 }}>
                            <WarningIcon />
                        </Avatar>
                        <Typography variant="h6"><strong>Craintes et scepticisme</strong></Typography>
                        <Typography variant="body1">
                            Une peur courante était que les machines deviennent trop puissantes et autonomes, surpassant l'intelligence humaine. On craignait également que l'automatisation remplace les travailleurs humains, et que les machines prennent des décisions éthiques.
                        </Typography>
                    </Paper>
                </Fade>
            </Grid>

            <Grid item xs={12} sm={6} md={4} ref={philRef}>
                <Fade in={philVisible} timeout={1000}>
                    <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', minHeight:330 }}>
                        <Avatar sx={{ bgcolor: '#4caf50', margin: 'auto', marginBottom: 2 }}>
                            <PsychologyIcon />
                        </Avatar>
                        <Typography variant="h6"><strong>Aspect philosophique</strong></Typography>
                        <Typography variant="body1">
                            Avant même que l'IA soit réalisable, les philosophes se demandaient si une machine pouvait penser ou être consciente. Beaucoup doutaient que l'IA puisse imiter l'intelligence humaine en raison de la complexité de l'esprit humain et des émotions.
                        </Typography>
                    </Paper>
                </Fade>
            </Grid>

            <Grid item xs={12}>
                <Paper elevation={3} sx={{ padding: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} ref={historyRef}>
                            <Fade in={historyVisible} timeout={1000}>
                                <div>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Avatar sx={{ bgcolor: '#ff9800' }}>
                                                <HistoryEduIcon />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="h6"><strong>De l'antiquité à nos jours</strong></Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                                        L'idée de créer des êtres intelligents ou autonomes remonte à des millénaires, bien avant l'apparition du terme "intelligence artificielle" au 20ème siècle. Voici un aperçu de cette longue histoire :
                                    </Typography>
                                </div>
                            </Fade>
                        </Grid>


                        <Grid item xs={12} ref={mythRef}>
                            <Fade in={mythVisible} timeout={1000}>
                                <Grid container sx={{ marginBottom: 5 }}>
                                    <Grid item xs={12} md={6} sx={{ paddingRight: 2 }}>
                                        <Typography variant="h6"><strong>Mythologie ancienne :</strong></Typography>
                                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                                            Dans la mythologie grecque, Talos était un géant de bronze créé par Héphaïstos, le dieu forgeron, pour protéger l'île de Crète. Ce robot primitif représentait déjà l'idée d'une machine protectrice et autonome.
                                            Le Golem, une créature d'argile animée par des incantations, était censé protéger la communauté juive. Ce mythe explore les thèmes de la création et des limites du pouvoir humain.

                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{
                                        backgroundImage: "url('/assets/images/talos.jpeg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        height: "200px",
                                        borderRadius: 2
                                    }}>
                                    </Grid>
                                </Grid>

                            </Fade>
                        </Grid>

                        <Grid item xs={12} ref={renaissanceRef}>
                            <Fade in={renaissanceVisible} timeout={1000}>
                                <Grid container sx={{ marginBottom: 5 }}>
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        sx={{
                                            backgroundImage: "url('/assets/images/automate.jpg')",
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            height: "200px",
                                            borderRadius: 2,
                                            order: { xs: 2, md: 1 }
                                        }}
                                    >
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        sx={{
                                            paddingLeft: 2,
                                            order: { xs: 1, md: 2 }
                                        }}
                                    >
                                        <Typography variant="h6"><strong>Renaissance et lumières :</strong></Typography>
                                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                                            Au 16ème et 17ème siècles, les inventeurs européens créèrent des automates complexes, capables d'imiter les mouvements humains ou animaux. Le philosophe René Descartes considérait les animaux comme des "machines" complexes, un concept qui ouvrait la voie à l'idée que les humains pourraient, un jour, créer des êtres mécaniques pensants.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>

                        <Grid item xs={12} ref={modernRef}>
                            <Fade in={modernVisible} timeout={1000}>
                                <Grid container sx={{ marginBottom: 5 }}>
                                    <Grid item  xs={12} md={6} sx={{ paddingRight: 2 }}>
                                        <Typography variant="h6"><strong>Époque moderne :</strong></Typography>
                                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                                            Le roman "Frankenstein" de Mary Shelley est souvent considéré comme la première œuvre de science-fiction moderne. Le terme "intelligence artificielle" a été introduit par John McCarthy en 1956, et Isaac Asimov a popularisé l'idée de robots éthiques dans "I, Robot".
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{
                                        backgroundImage: "url('/assets/images/frankeinstein.jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        height: "200px",
                                        borderRadius: 2
                                    }}>
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>

                        <Grid item xs={12} ref={popCultureRef}>
                            <Fade in={popCultureVisible} timeout={1000}>
                                <Grid container sx={{ marginBottom: 5 }}>
                                    <Grid item xs={12} md={6} sx={{
                                        backgroundImage: "url('/assets/images/odyssey.jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        height: "200px",
                                        borderRadius: 2,
                                        order: { xs: 2, md: 1 }
                                    }}>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ paddingLeft: 2,  order: { xs: 1, md: 2} }}>
                                        <Typography variant="h6"><strong>Culture populaire du 20ème siècle :</strong></Typography>
                                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                                            Des œuvres comme "2001 : L'Odyssée de l'Espace" de Stanley Kubrick et "Blade Runner" de Ridley Scott ont approfondi les questions sur l'autonomie des machines et les limites de l'intelligence artificielle. JARVIS, l'assistant AI de Tony Stark dans les films Iron Man, montre une vision plus optimiste d'une IA au service des humains.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>

                        <Grid item xs={12} ref={beyondRef}>
                            <Fade in={beyondVisible} timeout={1000}>
                                <Grid container sx={{ marginBottom: 5 }}>
                                    <Grid item xs={12} md={6} sx={{ paddingRight: 2 }}>
                                        <Typography variant="h6"><strong>21ème siècle et au-delà :</strong></Typography>
                                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                                            Le jeu vidéo "Detroit: Become Human" montre un futur où les androïdes développent des émotions, posant des questions éthiques sur la nature humaine. De nos jours, l'IA est déjà intégrée dans la vie quotidienne grace a des assistants vocaux comme Siri ou Alexa, mais les débats sur l'éthique, la vie privée et l'impact social continuent.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{
                                        backgroundImage: "url('/assets/images/detroit.jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        height: "200px",
                                        borderRadius: 2
                                    }}>
                                    </Grid>
                                </Grid>
                            </Fade>
                        </Grid>
                        <Grid item sx={{marginBottom:3}} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sx={{textAlign:"left"}}>
                                    <Button sx={{
                                        color: 'black',
                                        border: 1,
                                        borderColor: 'lightgrey',
                                        borderRadius: 2,
                                        padding: 1,
                                        paddingLeft: 2,
                                        paddingRight: 2,
                                        backgroundColor: 'white',
                                        position: 'relative',
                                    }} onClick={handlePrevPasse}><strong>Précédent</strong></Button>
                                </Grid>
                                <Grid item xs={6} sx={{textAlign:"right"}}>
                                    <Button sx={{
                                        color: 'black',
                                        border: 1,
                                        borderColor: 'lightgrey',
                                        borderRadius: 2,
                                        padding: 1,
                                        paddingLeft: 2,
                                        paddingRight: 2,
                                        backgroundColor: 'white',
                                        position: 'relative',
                                    }} onClick={handlePassee}><strong>Suivant</strong></Button>
                                </Grid>


                            </Grid>

                        </Grid>


                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default PerceptionIA;
