import {ComposableMap, Geographies, Geography, Marker} from "react-simple-maps";
import {useState} from "react";

const geoUrl =
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
const Map = () => {
    const [selectedPoint, setSelectedPoint] = useState(null);

    // Points à afficher sur la carte (longitude, latitude, label, info)
    const points = [
        {
            coordinates: [13.1897, 32.8872],
            label: 'Libye',
            info: 'Les Turcs ont employé des drones de combat complètement autonomes, les Kargu, équipés de systèmes de reconnaissance faciale, pour attaquer "automatiquement", sans en avoir reçu l\'ordre, une colonne de rebelles du général Haftar qui battait retraite.',
            articles: [
                'https://information.tv5monde.com/international/robots-tueurs-des-drones-autonomes-turcs-ont-attaque-des-combattants-libyens-35843#:~:text=L\'arm%C3%A9e%20turque%20a%20en,la%20revue%20en%20ligne%20NewSCientist.',
                'https://www.france24.com/fr/%C3%A9co-tech/20210601-des-drones-tueurs-autonomes-ont-ils-%C3%A9t%C3%A9-d%C3%A9ploy%C3%A9s-en-libye',
            ]
        },
        {
            coordinates: [126.9780, 37.5665],
            label: 'Corée',
            info: 'La zone démilitarisée qui sépare Corée du Nord et Corée du Sud est surveillée en permanence par des sentinelles automatisées.',
            articles: [
                'https://www.rtbf.be/article/les-robots-tueurs-arrivent-peut-on-les-laisser-faire-10664130'
            ]
        },
        {
            coordinates: [35.2137, 31.7683],
            label: 'Palestine',
            info: 'Des informations spécifiques sur l\'utilisation de l\'IA et de l\'armement dans ce conflit.'
        },
        {
            coordinates: [30.5238, 50.4547],
            label: 'Ukraine',
            info: 'Des informations spécifiques sur l\'utilisation de l\'IA et de l\'armement dans ce conflit.'
        },
        {
            coordinates: [37.0902, 34.8021],
            label: 'Syrie',
            info: 'Utilisation de drones de surveillance et de combat pour effectuer des frappes précises contre des cibles spécifiques.',
            articles: ["https://www.areion24.news/2020/05/29/les-operations-de-drones-russes-en-syrie/"]
        },
        {
            coordinates: [43.6793, 33.2232],
            label: 'Irak',
            info: 'Les forces armées utilisent des systèmes d\'IA pour analyser les données de surveillance et de renseignement afin de localiser et cibler les militants de l\'État islamique.'
        },
        {
            coordinates: [47.5769, 40.1431],
            label: 'Azerbaïdjan et Arménie',
            info: 'Utilisation de drones autonomes et de technologies de reconnaissance pour cibler les positions ennemies dans le conflit du Nagorno-Karabakh.'
        },
        {
            coordinates: [48.5164, 15.5527],
            label: 'Yémen',
            info: 'Utilisation de drones et de technologies de surveillance pour cibler les rebelles Houthis et autres groupes militants.'
        },
        {
            coordinates: [69.2075, 34.5553],
            label: 'Afghanistan',
            info: 'Utilisation de drones armés et de systèmes de surveillance pour mener des frappes contre les talibans et autres groupes insurgés.'
        },
        {
            coordinates: [45.3182, 2.0469],
            label: 'Somalie',
            info: 'Utilisation de drones pour cibler les militants d\'Al-Shabaab.'
        }
    ];

    return (
        <div style={{ position: 'relative', width: '100%', height: '90%' }}>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 150 }}
                style={{ width: '100%', height: '500px' }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                stroke="#D6D6DA"
                                fill="#EAEAEC"
                            />
                        ))
                    }
                </Geographies>
                {points.map((point, index) => (
                    <Marker
                        key={index}
                        coordinates={point.coordinates}
                        onClick={() => setSelectedPoint(point)}
                    >
                        <circle r={5} fill="red" />
                        <text
                            textAnchor="middle"
                            y={-10}
                            style={{ fontFamily: 'system-ui', fill: '#5D5A6F' }}
                        >
                            {point.label}
                        </text>
                    </Marker>
                ))}
            </ComposableMap>
            {selectedPoint && (
                <div
                    style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'white',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    }}
                >
                    <h3>{selectedPoint.label}</h3>
                    <p>{selectedPoint.info}</p>
                </div>
            )}
        </div>
    );
};

export default Map;
