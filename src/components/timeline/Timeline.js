import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Timeline = () => {
    return (
        <>
            <div>
                <Grid container spacing={2} sx={{ marginTop: 1, marginBottom: 8 }}>
                    <Grid item sx={{ display: "flex", alignItems: "center", gap: 1 }} xs={12} sm={12} lg={6}>
                        <span style={{ backgroundColor: 'rgb(33, 150, 243)', padding: '5px 10px', color: '#fff', borderRadius: '5px' }}>IA générale</span>
                        <p>: Événements majeurs liés à l'intelligence artificielle en général.</p>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <span style={{ backgroundColor: 'rgb(233, 30, 99)', padding: '5px 10px', color: '#fff', borderRadius: '5px' }}>IA dans l'armement</span>
                        <p>: Développements de l'IA dans les applications militaires.</p>
                    </Grid>
                </Grid>
            </div>

            <VerticalTimeline animate={true}>
                {/* IA générale */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    date="1956"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title">Naissance de l'IA</h3>
                    <h4 className="vertical-timeline-element-subtitle">Conférence de Dartmouth</h4>
                    <p>
                        Le terme "intelligence artificielle" est officiellement introduit.
                    </p>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Details
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                La conférence de Dartmouth, organisée en 1956 par John McCarthy, est largement considérée comme le point de départ officiel de la recherche sur l'intelligence artificielle. Ce fut lors de cette conférence que le terme "intelligence artificielle" a été utilisé pour la première fois.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </VerticalTimelineElement>

                {/* IA dans l'armement */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1960s"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title">Premiers usages militaires de l'IA</h3>
                    <h4 className="vertical-timeline-element-subtitle">États-Unis</h4>
                    <p>
                        L'IA est utilisée dans les systèmes de contrôle des missiles et les simulations de guerre.
                    </p>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Details
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Durant les années 1960, les États-Unis ont commencé à intégrer des systèmes d'IA rudimentaires dans les technologies militaires, notamment pour le contrôle des missiles balistiques et les simulations de stratégie militaire.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </VerticalTimelineElement>

                {/* IA générale */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1970s"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title">Avancées dans le traitement du langage naturel</h3>
                    <h4 className="vertical-timeline-element-subtitle">Monde</h4>
                    <p>
                        Développement des premiers systèmes de compréhension du langage naturel.
                    </p>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Details
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Les années 1970 ont vu des progrès importants dans le traitement du langage naturel (NLP), avec le développement de systèmes capables de comprendre et de répondre à des commandes en langage humain.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </VerticalTimelineElement>

                {/* IA dans l'armement */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1980s"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title">Intégration de l'IA dans les armes avancées</h3>
                    <h4 className="vertical-timeline-element-subtitle">États-Unis</h4>
                    <p>
                        Développement des systèmes d'armement avancés comme les missiles guidés et les radars.
                    </p>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Details
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Les années 1980 ont vu une augmentation de l'intégration de l'IA dans les systèmes d'armes, comme les missiles guidés et les radars capables de détecter et de suivre des cibles avec précision.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </VerticalTimelineElement>

                {/* IA dans l'armement */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1990s"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title">Guerre électronique et systèmes d'alerte</h3>
                    <p>
                        L'IA joue un rôle crucial dans la guerre électronique et les systèmes d'alerte précoce.
                    </p>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Details
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Durant les années 1990, l'IA est devenue un élément clé dans les guerre, améliorant les capacités de brouillage, de détection et de réponse rapide aux menaces.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </VerticalTimelineElement>


                {/* IA dans l'armement */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2000s"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title">Développement de drones et robots militaires</h3>
                    <h4 className="vertical-timeline-element-subtitle">Monde</h4>
                    <p>
                        Utilisation de l'IA pour créer des drones et des robots capables de missions.
                    </p>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Details
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Les années 2000 ont été marquées par le développement rapide de drones et de robots militaires utilisant l'IA pour effectuer des missions complexes avec un haut degré d'autonomie.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </VerticalTimelineElement>

                {/* IA dans l'armement */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010s"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title">Émergence des systèmes autonomes</h3>
                    <h4 className="vertical-timeline-element-subtitle">Monde</h4>
                    <p>
                        Intégration de l'IA dans les véhicules autonomes militaires et les systèmes de gestion de bataille.
                    </p>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Details
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                L'IA est désormais intégrée dans des véhicules autonomes militaires, permettant des opérations sans intervention humaine directe, ainsi que dans des systèmes de gestion de bataille automatisés.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </VerticalTimelineElement>

                {/* IA générale */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020s"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title">Sophistication accrue des technologies d'IA</h3>
                    <h4 className="vertical-timeline-element-subtitle">Monde</h4>
                    <p>
                        Amélioration des capacités d'apprentissage automatique et de traitement du langage naturel.
                    </p>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Details
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Les années 2020 ont vu une augmentation de la sophistication des technologies d'IA, notamment dans les domaines de l'apprentissage automatique et du traitement du langage naturel, conduisant à des applications plus avancées et plus intégrées dans divers secteurs.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </VerticalTimelineElement>

                {/* IA dans l'armement */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2023"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title">Débats sur les armes autonomes</h3>
                    <h4 className="vertical-timeline-element-subtitle">Monde</h4>
                    <p>
                        Discussions internationales sur la régulation des armes autonomes.
                    </p>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                           Details
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                En 2023, les débats sur la régulation des armes autonomes ont pris de l'ampleur, avec des discussions sur les implications éthiques et juridiques de l'utilisation de systèmes d'armes capables de prendre des décisions de manière indépendante.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </VerticalTimelineElement>

                {/* IA générale */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2024"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title">IA générative et créativité artificielle</h3>
                    <h4 className="vertical-timeline-element-subtitle">Monde</h4>
                    <p>
                        Avancées significatives dans les IA génératives, transformant la création de contenu et la créativité humaine.
                    </p>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Details
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                En 2024, les IA génératives ont atteint un niveau de sophistication tel qu'elles ont commencé à transformer non seulement la création de contenu numérique, mais aussi la manière dont la créativité humaine est perçue et utilisée dans divers domaines.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                />
            </VerticalTimeline>
        </>
    )
}

export default Timeline;
