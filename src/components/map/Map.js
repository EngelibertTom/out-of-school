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
                image: 'https://s.france24.com/media/display/4eb3c7ea-c2f0-11eb-bcb7-005056a917b9/w:246/p:16x9/drone-seb-2.webp'
            }
        ]
    },
    {
        coordinates: [126.9780, 37.5665],
        label: 'Corée',
        info: 'La zone démilitarisée qui sépare Corée du Nord et Corée du Sud est surveillée en permanence par des sentinelles automatisées.',
        articles: [
            {
                url: 'https://cnes.fr/projets/geoimage/corees-du-nordcoree-du-sud-une-des-frontieres-les-plus-fermees-et-militarisees-du-monde',
                image: 'https://cnes.fr/sites/default/files/styles/native_format/public/2024-07/em_coree-20180722-s2b-leg.jpg?itok=-muOs9CG'
            }
        ]
    },
    {
        "coordinates": [35.2137, 31.7683],
        "label": "Palestine",
        "info": "L'IA est utilisée pour la surveillance par drones, la reconnaissance faciale, et les systèmes de défense autonomes, notamment à Gaza pendant la guerre Israël-Hamas ",
        "articles": [
            {
                "url": "https://www.middleeasteye.net/fr/reportages/gaza-palestine-israel-drones-pression-surveillance-angoisse-traumatisme#:~:text=En%202021%2C%20pendant%20l'offensive,%2C%20selon%20l'armée%20israélienne.",
                "image": "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/images-story/000_Nic6362861.jpg.webp?itok=AFq7hECx"
            }
        ]
    },
    {
        "coordinates": [30.5238, 50.4547],
        "label": "Ukraine",
        "info": "En Ukraine, l'IA est utilisée pour les frappes ciblées, la surveillance, la guerre électronique, et les cyberattaques.",
        "articles": [
            {
                "url": "https://fr.euronews.com/next/2024/09/01/guerre-en-ukraine-la-nouvelle-donne-des-drones-presque-indetectables",
                "image": "https://static.euronews.com/articles/stories/07/90/18/58/384x216_cmsv2_cc293972-ce8e-5205-a595-0eaebb41f829-7901858.jpg"
            }
        ]
    },
    {
        coordinates: [37.0902, 34.8021],
        label: 'Syrie',
        info: 'Utilisation de drones de surveillance et de combat pour effectuer des frappes précises contre des cibles spécifiques.',
        articles: [
            {
                url: 'https://www.lemonde.fr/international/article/2023/10/05/en-syrie-une-attaque-de-drones-contre-l-academie-militaire-de-homs-fait-de-nombreux-morts_6192653_3210.html',
                image: 'https://img.lemde.fr/2023/10/05/0/0/8640/5760/556/0/75/0/86aec56_096df99f4368483e98fcc862511b7d24-0-1ecf339cfe6943efa66e822fbd657ada.jpg'
            }
        ]
    },
    {
        coordinates: [43.6793, 33.2232],
        label: 'Irak',
        info: 'Les forces armées utilisent des systèmes d\'IA pour analyser les données de surveillance et de renseignement afin de localiser et cibler les militants de l\'État islamique.',
        // articles: [
        //     {
        //         url: 'https://www.example.com/irak-article1',
        //         image: 'https://www.example.com/image7.jpg'
        //     }
        // ]
    },
    {
        coordinates: [47.5769, 40.1431],
        label: 'Azerbaïdjan et Arménie',
        info: 'Utilisation de drones autonomes et de technologies de reconnaissance pour cibler les positions ennemies dans le conflit du Nagorno-Karabakh.',
        articles: [
            {
                url: 'https://www.numerama.com/tech/1506392-haut-karabakh-lazerbaidjan-attaque-de-nouveau-avec-des-drones-video.html',
                image: 'https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2023/09/design-sans-titre-26-1-1024x576.jpg?avif=1&key=87087adc'
            }
        ]
    },
    {
        coordinates: [48.5164, 15.5527],
        label: 'Yémen',
        info: 'Utilisation de drones et de nissiles pour mener des frappes, notamment a Tel Aviv.',
        articles: [
            {
                url: 'https://www.lesechos.fr/monde/afrique-moyen-orient/le-coeur-de-tel-aviv-touche-par-un-drone-des-houthis-2109014',
                image: 'https://media.lesechos.com/api/v1/images/view/669a4e4c58ea0a7939492479/976x549-webp/01102996031131-web-tete.webp'
            }
        ]
    },
    {
        coordinates: [69.2075, 34.5553],
        label: 'Afghanistan',
        info: 'Utilisation de drones armes pour soutenir les troupes au sol.',
        articles: [
            {
                url: 'https://shs.cairn.info/revue-defense-nationale-2018-9-page-126?lang=fr#',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Kabul_Skyline.jpg/260px-Kabul_Skyline.jpg'
            }
        ]
    },
    {
        coordinates: [45.3182, 2.0469],
        label: 'Somalie',
        info: "Frappes militaires menées à l'aide de drones",
        articles: [
            {
                url: 'https://www.amnesty.org/fr/latest/news/2024/05/somalia-death-of-23-civilians-in-military-strikes-with-turkish-drones-may-amount-to-war-crimes-new-investigation/',
                image: 'https://www.amnesty.org/en/wp-content/uploads/2024/05/Satellite-imagery-from-12-September-2022-shows-a-Turkish-built-Bayraktar-TB2-drone-at-the-Aden-Adde-International-Airport-in-Mogadishu-Somalia-1024x608.jpg'
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
