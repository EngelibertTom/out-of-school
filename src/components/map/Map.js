import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZW5nZWxpYmVydHRvbSIsImEiOiJjbHhqM3RrY3AxazFuMnBzanR0cG15cnh2In0.s67XGhcaeWqxR8bNd1xe5Q'; // Remplace par ton token Mapbox

const points = [
    // Points avec articles et images mis à jour
    {
        coordinates: [13.1897, 32.8872],
        label: 'Libye',
        info: 'Les Turcs ont employé des drones de combat complètement autonomes, les Kargu, équipés de systèmes de reconnaissance faciale, pour attaquer "automatiquement", sans en avoir reçu l\'ordre, une colonne de rebelles du général Haftar qui battait retraite.',
        articles: [
            {
                url: 'https://information.tv5monde.com/international/robots-tueurs-des-drones-autonomes-turcs-ont-attaque-des-combattants-libyens-35843#:~:text=L\'arm%C3%A9e%20turque%20a%20en,la%20revue%20en%20ligne%20NewSCientist.',
                image: 'https://information.tv5monde.com/sites/tv5-info/files/styles/entete/public/2021-12/field_media_image-58385-capture-Kargu-2.webp?itok=SB_Vr2IX'
            },
            {
                url: 'https://www.france24.com/fr/%C3%A9co-tech/20210601-des-drones-tueurs-autonomes-ont-ils-%C3%A9t%C3%A9-d%C3%A9ploy%C3%A9s-en-libye',
                image: 'https://example.com/image2.jpg' // Remplace par une URL valide
            }
        ]
    },
    {
        coordinates: [126.9780, 37.5665],
        label: 'Corée',
        info: 'La zone démilitarisée qui sépare Corée du Nord et Corée du Sud est surveillée en permanence par des sentinelles automatisées.',
        articles: [
            {
                url: 'https://www.rtbf.be/article/les-robots-tueurs-arrivent-peut-on-les-laisser-faire-10664130',
                image: 'https://information.tv5monde.com/sites/tv5-info/files/styles/entete/public/2021-12/field_media_image-58385-capture-Kargu-2.webp?itok=SB_Vr2IX'
            }
        ]
    },
    {
        coordinates: [35.2137, 31.7683],
        label: 'Palestine',
        info: 'Des informations spécifiques sur l\'utilisation de l\'IA et de l\'armement dans ce conflit.',
        articles: [
            {
                url: 'https://www.example.com/palestine-article1',
                image: 'https://www.example.com/image4.jpg'
            }
        ]
    },
    {
        coordinates: [30.5238, 50.4547],
        label: 'Ukraine',
        info: 'Des informations spécifiques sur l\'utilisation de l\'IA et de l\'armement dans ce conflit.',
        articles: [
            {
                url: 'https://www.example.com/ukraine-article1',
                image: 'https://www.example.com/image5.jpg'
            }
        ]
    },
    {
        coordinates: [37.0902, 34.8021],
        label: 'Syrie',
        info: 'Utilisation de drones de surveillance et de combat pour effectuer des frappes précises contre des cibles spécifiques.',
        articles: [
            {
                url: 'https://www.areion24.news/2020/05/29/les-operations-de-drones-russes-en-syrie/',
                image: 'https://www.example.com/image6.jpg'
            }
        ]
    },
    {
        coordinates: [43.6793, 33.2232],
        label: 'Irak',
        info: 'Les forces armées utilisent des systèmes d\'IA pour analyser les données de surveillance et de renseignement afin de localiser et cibler les militants de l\'État islamique.',
        articles: [
            {
                url: 'https://www.example.com/irak-article1',
                image: 'https://www.example.com/image7.jpg'
            }
        ]
    },
    {
        coordinates: [47.5769, 40.1431],
        label: 'Azerbaïdjan et Arménie',
        info: 'Utilisation de drones autonomes et de technologies de reconnaissance pour cibler les positions ennemies dans le conflit du Nagorno-Karabakh.',
        articles: [
            {
                url: 'https://www.example.com/azerbaidjan-armenie-article1',
                image: 'https://www.example.com/image8.jpg'
            }
        ]
    },
    {
        coordinates: [48.5164, 15.5527],
        label: 'Yémen',
        info: 'Utilisation de drones et de technologies de surveillance pour cibler les rebelles Houthis et autres groupes militants.',
        articles: [
            {
                url: 'https://www.example.com/yemen-article1',
                image: 'https://www.example.com/image9.jpg'
            }
        ]
    },
    {
        coordinates: [69.2075, 34.5553],
        label: 'Afghanistan',
        info: 'Utilisation de drones armés et de systèmes de surveillance pour mener des frappes contre les talibans et autres groupes insurgés.',
        articles: [
            {
                url: 'https://www.example.com/afghanistan-article1',
                image: 'https://www.example.com/image10.jpg'
            }
        ]
    },
    {
        coordinates: [45.3182, 2.0469],
        label: 'Somalie',
        info: 'Utilisation de drones pour cibler les militants d\'Al-Shabaab.',
        articles: [
            {
                url: 'https://www.example.com/somalie-article1',
                image: 'https://www.example.com/image11.jpg'
            }
        ]
    }
];

const MapComponent = () => {
    const [selectedPoint, setSelectedPoint] = useState(null);
    const [visitedPoints, setVisitedPoints] = useState(new Set());

    const handleMarkerClick = (point) => {
        setSelectedPoint(point);
        setVisitedPoints((prev) => new Set(prev).add(point.label));
    };

    const handleClose = () => {
        setSelectedPoint(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '90vh' }}>
            <Map
                initialViewState={{
                    longitude: 0,
                    latitude: 20,
                    zoom: 2
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                {points.map((point, index) => (
                    <Marker
                        key={index}
                        longitude={point.coordinates[0]}
                        latitude={point.coordinates[1]}
                        onClick={() => handleMarkerClick(point)}
                    >
                        <div className={`point-marker ${visitedPoints.has(point.label) ? 'visited' : 'blinking'}`} />
                    </Marker>
                ))}
            </Map>

            <Dialog
                open={!!selectedPoint}
                TransitionComponent={Fade}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-fade-description"
            >
                {selectedPoint && (
                    <>
                        <DialogTitle><strong>{selectedPoint.label}</strong></DialogTitle>
                        <DialogContent>
                            <p style={{marginBottom:8}}>{selectedPoint.info}</p>
                            {selectedPoint.articles && selectedPoint.articles.length > 1 ? (
                                <Slider {...settings}>
                                    {selectedPoint.articles.map((article, index) => (
                                        <div key={index}>
                                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                                <img src={article.image} alt={`Article ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                                            </a>
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                selectedPoint.articles && selectedPoint.articles.length === 1 && (
                                    <a href={selectedPoint.articles[0].url} target="_blank" rel="noopener noreferrer">
                                        <img src={selectedPoint.articles[0].image} alt="Article unique" style={{ width: '100%', height: 'auto' }} />
                                    </a>
                                )
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button sx={{color: 'black',
                                border: 1,
                                borderColor: 'lightgrey',
                                borderRadius: 2,
                                padding: 1,
                                paddingLeft: 2,
                                paddingRight: 2,
                                backgroundColor: 'white',
                                position: 'relative'}} onClick={handleClose} color="primary">
                                Fermer
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>

            <style>{`
                .point-marker {
                    border-radius: 50%;
                    width: 10px;
                    height: 10px;
                    cursor: pointer;
                }

                .blinking {
                    animation: colorChange 2s infinite;
                }

                @keyframes colorChange {
                    0% { background-color: red; }
                    50% { background-color: orange; }
                    100% { background-color: red; }
                }

                .visited {
                    background-color: green;
                }
            `}</style>
        </div>
    );
};

export default MapComponent;
