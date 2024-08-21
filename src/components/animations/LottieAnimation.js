// animations.js
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottieAnimation = ({ src, width = 300, height = 300, loop = true, autoplay = true }) => {
    return (
        <Player
            autoplay={autoplay}
            loop={loop}
            src={src}
            style={{ width: `${width}px`, height: `${height}px` }}
        />
    );
};

export const HourglassAnimation = (props) => (
    <LottieAnimation src="https://lottie.host/af10c953-d5af-4049-bf93-4115d1b50fd6/Oo9DJI4fpz.json" {...props} />
);

export const MapAnimation = (props) => (
    <LottieAnimation src="https://lottie.host/e16b8265-bb0a-4fa3-bb1d-d26f2bab0822/kpXCnygCmV.json" {...props} />
);

export const EvolutionAnimation = (props) => (
    <LottieAnimation src="https://lottie.host/3879927a-1bd2-4c0d-b09b-d97676ff0668/sKKoKN5Aly.json" {...props} />
);

export const PerceptionAnimation = (props) => (
    <LottieAnimation src="https://lottie.host/4ade3f61-1448-45c0-a842-4d0f4b2a8250/p9ezIdEWPf.json" {...props} />
);
