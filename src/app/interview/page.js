'use client'
import React from 'react';
import { Grid, Typography, Box, Chip, Divider } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useInView } from 'react-intersection-observer';

export default function Interview() {
    // Hook pour gérer l'apparition des sections
    const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: definitionRef, inView: definitionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: challengesRef, inView: challengesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: techRef, inView: techInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: impactsRef, inView: impactsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: conclusionRef, inView: conclusionInView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
                        overflow: 'hidden',
                        borderRadius: 2,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        mb: 2,
                        height: 0,
                    }}
                >
                    <video
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover', // permet à la vidéo de remplir la Box tout en gardant son ratio
                        }}
                        controls
                    >
                        <source src="/assets/interview/interview.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
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
                            Compte-rendu de la table ronde sur les armes autonomes et la régulation militaire
                        </Typography>
                    </div>
                </Fade>

                <Fade in={definitionInView} timeout={1000}>
                    <div ref={definitionRef}>
                        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                            <strong>Introduction</strong>
                        </Typography>
                        <Typography paragraph>
                            Cette table ronde, animée par Fanny Tan, une journaliste spécialisée en technologie, réunit trois experts : le général Jean-Claude Palomeros, Thierry Berthier, et Bart Vanhove (en visioconférence). Ce débat a pour objectif d’informer sur le thème des armes autonomes et des défis associés à leur régulation.
                        </Typography>
                    </div>
                </Fade>

                <Fade in={definitionInView} timeout={1000}>
                    <div ref={definitionRef}>
                        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                            <strong>Définition et contexte</strong>
                        </Typography>
                        <Typography paragraph>
                            Lors de la première partie de cette conférence, les intervenants prennent le temps de définir les armes autonomes pour mieux comprendre ce qui sera abordé par la suite.
                        </Typography>
                        <Typography paragraph>
                            Le général Jean-Claude Palomeros commence par expliquer l’évolution des technologies militaires, en prenant comme exemple les drones. Il définit une arme autonome comme un système d’arme conçu avec des objectifs pensés par des experts. Il insiste sur l’importance de bien comprendre ces systèmes dans un contexte global : un contexte qui inclut les capteurs, la communication en temps réel, et l’intelligence embarquée. En soulignant le rôle crucial de l’IA dans ces systèmes, il met en avant la notion d’hybridation et de coopération homme-machine.
                        </Typography>
                        <Typography paragraph>
                            Thierry Berthier poursuit en expliquant la classification des armes autonomes en six niveaux, de L0 à L5. L0 étant un niveau d’arme sans intelligence autre que celle humaine, L1 possède une faible capacité d’autonomie, jusqu’à L5 qui est totalement autonome, fait de la recherche de cibles, et n’en réfère à personne, ce qui empêche toute reprise de contrôle. Il prend comme exemple la guerre en Ukraine, où des systèmes autonomes doivent naviguer dans des environnements complexes, où des techniques comme le brouillage technique sont mises en place pour empêcher la communication avec le robot. C’est donc une raison pour laquelle un niveau d’autonomie élevé peut être très utile.
                        </Typography>
                        <Typography paragraph>
                            Bart Vanhove prend ensuite la parole. Représentant de la société Destinus, il souligne l’importance d’avoir une approche rationnelle et éthique dans le développement de systèmes autonomes. Il explique que la régulation est essentielle pour protéger les civils, mais aussi pour assurer un développement efficace et sécurisé des technologies.
                        </Typography>
                    </div>
                </Fade>

                <Fade in={challengesInView} timeout={1000}>
                    <div ref={challengesRef}>
                        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                            <strong>Défis de la régulation</strong>
                        </Typography>
                        <Typography paragraph>
                            La table ronde aborde ensuite les défis de la régulation. En effet, Fanny Tan évoque la volonté des États-Unis de réguler l’intelligence artificielle militaire à l’échelle mondiale, avec la possibilité que son utilisation soit interdite dans les armes autonomes d’ici 2026. Elle souligne l’importance de cette régulation afin de prévenir les abus et garantir une utilisation éthique de cette technologie.
                        </Typography>
                        <Typography paragraph>
                            Le général Jean-Claude Palomeros poursuit et exprime ses doutes quant à cette régulation qui serait appliquée universellement. Il cite des exemples passés où des accords ont été signés mais non respectés, comme les accords de désarmement nucléaire, par exemple. Cependant, il reconnaît que l’établissement de standards, même imparfaits, pourrait fournir une base et donc une direction à suivre pour la majorité des nations, et ainsi encourager un accord mondial sur cette régulation.
                        </Typography>
                        <Typography paragraph>
                            Thierry Berthier et le général expliquent que les États-Unis, la Chine, et la Russie sont des acteurs majeurs dans le domaine de l’IA et l’armement, et que ces derniers pourraient ne pas signer d’accords concernant l’IA militaire. En effet, ces puissances mondiales sont engagées dans une compétition où l’innovation technologique, comme l’IA et la robotique, joue un rôle majeur. Les militaires américains commencent à changer d’avis concernant l’IA, la voyant comme un outil stratégique pour contrer les menaces robotiques adverses. Ce contexte crée des tensions et complique la mise en place d’une régulation internationale.
                        </Typography>
                        <Typography paragraph>
                            Bart Vanhove ajoute que la régulation doit prendre en compte non seulement les aspects techniques, mais aussi les conséquences éthiques et humanitaires des armes autonomes. Il insiste également sur la nécessité de développer des normes communes et sur la coopération internationale afin d’éviter une course à l’armement dans ce domaine.
                        </Typography>
                    </div>
                </Fade>

                <Fade in={techInView} timeout={1000}>
                    <div ref={techRef}>
                        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                            <strong> Développements technologiques et perspectives futures</strong>
                        </Typography>
                        <Typography paragraph>
                            Thierry Berthier explique que les avancées technologiques dans le domaine des armes autonomes ne se limitent pas seulement à l’IA, mais incluent aussi les développements des capteurs, des algorithmes de décision, et de la robotique. Il revient sur l’arrivée de systèmes hybrides qui combinent intelligence humaine et artificielle pour améliorer les capacités de prise de décisions sur le terrain. Thierry met ainsi en garde contre le risque de voir ces technologies évoluer plus rapidement que notre capacité à les réguler.
                        </Typography>
                        <Typography paragraph>
                            Bart Vanhove souligne aussi que les perspectives futures comprennent des discussions sur la transparence et la traçabilité des décisions prises par des systèmes autonomes. Il souhaite qu’il y ait une collaboration entre les chercheurs, développeurs, et régulateurs pour définir des critères précis de performances et de sécurité. Il insiste aussi sur le fait que des normes communes doivent être établies pour que les systèmes autonomes respectent les principes humanitaires et les lois de la guerre.
                        </Typography>
                    </div>
                </Fade>

                <Fade in={impactsInView} timeout={1000}>
                    <div ref={impactsRef}>
                        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                            <strong> Impacts et réponses régionales </strong>
                        </Typography>
                        <Typography paragraph>
                            Le général Palomeros note que l'utilisation de telles armes pourrait modifier la nature des conflits en introduisant de nouveaux types de menaces et de vulnérabilités. Il évoque également les défis en matière de responsabilité et de conformité aux règles du droit international humanitaire.
                        </Typography>
                        <Typography paragraph>
                            Thierry Berthier ajoute que l’impact des armes autonomes pourrait influencer la dynamique des alliances internationales et les équilibres de pouvoir. Il mentionne que les nations possédant des technologies avancées pourraient dominer les conflits, créant ainsi une inégalité stratégique. Il revient sur l’importance de la mise en place de coopérations concernant les normes pour atténuer ces déséquilibres.
                        </Typography>
                        <Typography paragraph>
                            Avant de conclure, Bart Vanhove met en avant les initiatives nationales prises par certains pays pour réguler les armes autonomes. Il cite l’exemple de certains pays européens qui ont déjà commencé à mettre en place des directives et des régulations concernant ces technologies.
                        </Typography>
                        <Typography paragraph>
                            Le général évoque aussi les réponses régionales, en soulignant que des pays comme les États-Unis, la Chine, et la Russie pourraient adopter des approches différentes concernant la régulation des armes autonomes. Il met en garde contre le risque d’une fragmentation des régulations internationales et appelle à un effort pour trouver des solutions globales et acceptables par tous.
                        </Typography>
                    </div>
                </Fade>

                <Fade in={conclusionInView} timeout={1000}>
                    <div ref={conclusionRef}>
                        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                            <strong> Conclusion</strong>
                        </Typography>
                        <Typography paragraph>
                            Fanny Tan conclut la discussion en soulignant la complexité du sujet et l’importance d’avoir une communication continue entre les décideurs politiques, militaires, et chercheurs. Bart Vanhove et Thierry Berthier encouragent les discussions sur les codes de conduite et les principes pour assurer que les armes autonomes soient utilisées de manière responsable et éthique. Ils recommandent également de renforcer la coopération internationale pour développer des standards communs. Le général conclut en réaffirmant que, malgré les défis et les incertitudes, il est important d’établir des principes de régulation pour encadrer le développement. Il réaffirme également que le dialogue et la collaboration sont essentiels pour garantir la sécurité et une utilisation qui respecte les normes humanitaires.
                        </Typography>
                    </div>
                </Fade>
            </Grid>
        </Grid>
    );
}
