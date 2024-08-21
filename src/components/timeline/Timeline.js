import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Grid} from "@mui/material";

const Timeline = () => {
    return (
        <>
            <div >
                <Grid container spacing={2} sx={{marginTop:1, marginBottom:8}}>
                    <Grid item sx={{display:"flex", alignItems:"center", gap:1}} xs={6}>
                        <span style={{ backgroundColor: 'rgb(33, 150, 243)', padding: '5px 10px', color: '#fff', borderRadius: '5px' }}>IA générale</span>
                        <p>: Événements majeurs liés à l'intelligence artificielle en général.</p>
                    </Grid>
                    <Grid item xs={6} sx={{display:"flex", alignItems:"center", gap:1}} >
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
                    <h4 className="vertical-timeline-element-subtitle">Monde</h4>
                    <p>
                        L'IA joue un rôle crucial dans la guerre électronique et les systèmes d'alerte précoce.
                    </p>
                </VerticalTimelineElement>

                {/* IA générale */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1997"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title">Deep Blue bat Garry Kasparov</h3>
                    <h4 className="vertical-timeline-element-subtitle">Monde</h4>
                    <p>
                        Le superordinateur d'IBM, Deep Blue, bat le champion du monde d'échecs Garry Kasparov.
                    </p>
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
                        Utilisation de l'IA pour créer des drones et des robots capables de missions autonomes.
                    </p>
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
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                />
            </VerticalTimeline>
        </>
    )
}

export default Timeline;
