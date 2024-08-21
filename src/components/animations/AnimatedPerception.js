// AnimatedHourglass.js
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import {HourglassAnimation, PerceptionAnimation} from './LottieAnimation';

const AnimatedPerception = ({ show, duration }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                setFadeOut(true);
            }, duration);
            return () => clearTimeout(timer);
        } else {
            setFadeOut(false);
        }
    }, [show, duration]);

    const styles = useSpring({
        opacity: show && !fadeOut ? 1 : 0,
        zoom: show && !fadeOut ? 1 : 0,
        config: { duration: 500 },
    });

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none', // Ignore pointer events
                zIndex: 10,
            }}
        >
            <animated.div
                style={{
                    ...styles,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <PerceptionAnimation width={300} height={300} />
            </animated.div>
        </div>
    );
};

export default AnimatedPerception;
