'use client'
import { Button, Grid, Typography } from '@mui/material';
import Fade from '@mui/material/Fade';
import React, { useState } from 'react';
import AnimatedHourglass from "@/components/animations/AnimatedHourglass";
import Accueil from "@/components/parts/Accueil";
import Historique from "@/components/parts/Historique";
import Present from "@/components/parts/Present";
import Evolutions from "@/components/parts/Evolutions";
import AnimatedMap from "@/components/animations/AnimatedMap";
import AnimatedEvolution from "@/components/animations/AnimatedEvolution";
import Passe from "@/components/parts/Passe";
import AnimatedPerception from "@/components/animations/AnimatedPerception";

export default function Home() {
    const [showAccueil, setShowAccueil] = useState(true);
    const [showPasse, setShowPasse] = useState(false);
    const [showHistorique, setShowHistorique] = useState(false);
    const [showPresent, setShowPresent] = useState(false);
    const [showEvolutions, setShowEvolutions] = useState(false);
    // Gestion des animations
    const [showAnimationHistorique, setShowAnimationHistorique] = useState(false);
    const [showAnimationPresent, setShowAnimationPresent] = useState(false);
    const [showAnimationEvolutions, setShowAnimationEvolutions] = useState(false);
    const [showAnimationPerception, setShowAnimationPerception] = useState(false);


    const handleClick = () => {
        setShowAccueil(false);
        setShowAnimationPerception(true);
        setTimeout(() => {
            setShowAnimationPerception(false);
            setShowPasse(true);
        }, 1500);
        window.scrollTo(0, 0)

    };

    const handlePassee = () => {
        setShowPasse(false);
        setShowAnimationHistorique(true);
        setTimeout(() => {
            setShowAnimationHistorique(false);
            setShowHistorique(true);
        }, 1500);
        window.scrollTo(0, 0)
    };

    const handlePrevPasse = () => {
        setShowPasse(false);
        setShowAnimationPerception(true)
        setTimeout(() => {
            setShowAnimationPerception(false);
            setShowAccueil(true)
        }, 1500)
        window.scrollTo(0, 0)
    }

    const handlePrevHistorique = () => {
        setShowHistorique(false);
        setShowAnimationPerception(true)
        setTimeout(() => {
            setShowAnimationPerception(false);
            setShowPasse(true)
        }, 1500)
        window.scrollTo(0, 0)
    }

    const handlePrevPresent = () => {
        setShowPresent(false);
        setShowAnimationHistorique(true)
        setTimeout(() => {
            setShowAnimationHistorique(false);
            setShowHistorique(true)
        }, 1500)
        window.scrollTo(0, 0)
    }

    const handlePrevEvolutions = () => {
        setShowEvolutions(false);
        setShowAnimationPresent(true)
        setTimeout(() => {
            setShowAnimationPresent(false);
            setShowPresent(true)
        }, 1500)
        window.scrollTo(0, 0)
    }

    const handleHistorique = () => {
        setShowHistorique(false);
        setShowAnimationPresent(true);
        setTimeout(() => {
            setShowAnimationPresent(false);
            setShowPresent(true);
        }, 1500);
        window.scrollTo(0, 0)
    };

    const handlePresent = () => {
        setShowPresent(false);
        setShowAnimationEvolutions(true);
        setTimeout(() => {
            setShowAnimationEvolutions(false);
            setShowEvolutions(true);
        }, 1500);
        window.scrollTo(0, 0)

    };

    return (
        <Grid container sx={{ position: 'relative', minHeight: "100vh" }}>
            {/*Gestion des animations */}
            <Fade in={showAnimationPerception} timeout={500}>
                <div>
                    <AnimatedPerception show={showAnimationPerception} duration={1100} />
                </div>
            </Fade>

            <Fade in={showAnimationHistorique} timeout={500}>
                <div>
                    <AnimatedHourglass show={showAnimationHistorique} duration={1100} />
                </div>
            </Fade>

            <Fade in={showAnimationPresent} timeout={500}>
                <div>
                    <AnimatedMap show={showAnimationPresent} duration={1100} />
                </div>
            </Fade>

            <Fade in={showAnimationEvolutions} timeout={500}>
                <div>
                    <AnimatedEvolution show={showAnimationEvolutions} duration={1100} />
                </div>
            </Fade>
            {/*Gestion des différentes parties*/}
            <Fade in={showAccueil} unmountOnExit={true}>
                <Grid item xs={12}>
                    <Grid container sx={{ gap: 60 }}>
                        <Accueil handleClick={handleClick} />
                    </Grid>
                </Grid>
            </Fade>

            <Fade in={showPasse} unmountOnExit={true}>
                <Grid item xs={12}>
                    <Grid container sx={{ gap: 60 }}>
                        <Passe handlePassee={handlePassee} handlePrevPasse={handlePrevPasse} />
                    </Grid>
                </Grid>
            </Fade>

            <Fade in={showHistorique} mountOnEnter={true} unmountOnExit={true}>
                <Grid item xs={12}>
                    <Grid container>
                        <Historique handleHistorique={handleHistorique} handlePrevHistorique={handlePrevHistorique} />
                    </Grid>
                </Grid>
            </Fade>

            <Fade in={showPresent} mountOnEnter={true} unmountOnExit={true}>
                <Grid item xs={12}>
                    <Grid container>
                        <Present handlePresent={handlePresent} handlePrevPresent={handlePrevPresent} />
                    </Grid>
                </Grid>
            </Fade>

            <Fade in={showEvolutions} mountOnEnter={true} unmountOnExit={true}>
                <Grid item xs={12}>
                    <Grid container>
                        <Evolutions handlePrevEvolutions={handlePrevEvolutions} />
                    </Grid>
                </Grid>
            </Fade>
        </Grid>
    );
}
