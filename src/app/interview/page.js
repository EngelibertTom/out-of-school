'use client'
import React from 'react';
import { Grid, Typography, Box, Chip, Divider } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useInView } from 'react-intersection-observer';

const div = React.memo(({ children, inView, ref }) => (
    <Fade in={inView} timeout={1000}>
        <div ref={ref}>{children}</div>
    </Fade>
));

export default function Interview() {
    const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: contextRef, inView: contextInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: firstQuestionRef, inView: firstQuestionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: secondQuestionRef, inView: secondQuestionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: thirdQuestionRef, inView: thirdQuestionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: fourthQuestionRef, inView: fourthQuestionInView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: 2,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        mb: 2,
                        '& iframe': {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }
                    }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/jtoVTOJu8X0"
                        title="Interview avec Thierry Berthier"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>
            </Grid>

            <Grid item sx={{ marginBottom: 3 }} xs={12}>
                <Divider>
                    <Chip label="Compte-rendu" size="small" />
                </Divider>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <Fade in={introInView} timeout={1000}>
                <div  ref={introRef}>
                    <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
                        Compte rendu de l’interview
                    </Typography>
                </div>
                </Fade>

                <Fade in={contextInView} timeout={1000}>
                <div ref={contextRef}>
                    <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Contexte
                    </Typography>
                    <Typography paragraph>
                        Lors de cette interview, nous avons eu la chance de recevoir Thierry Berthier, expert en technologies militaires. Cet échange de 40 minutes explore l’impact de l’intelligence artificielle et de la robotique dans le conflit en Ukraine et permet d’en apprendre davantage sur leur utilisation dans plusieurs aspects de la guerre.
                    </Typography>
                </div>
                </Fade>

                <Fade in={firstQuestionInView} timeout={1000}>
                <div  ref={firstQuestionRef}>
                    <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Comment la guerre en Ukraine utilise-t-elle l’IA et la robotique dans ses combats ?
                    </Typography>
                    <Typography paragraph>
                        Monsieur Berthier commence par nous donner du contexte en précisant que dans ce conflit, deux armées s’opposent. D’un côté, l’armée russe, qui est du côté Est, et de l’autre côté, l’armée ukrainienne soutenue par l’OTAN.
                    </Typography>
                    <Typography paragraph>
                        Il poursuit en expliquant que l’utilisation de la robotique est la plus présente dans la robotique aérienne. Elle est aussi utilisée dans la robotique navale de surface et dans la robotique terrestre. La robotique terrestre est un sujet dont on entend moins parler, mais qui reste aussi très utilisée. Il illustre cela en prenant l’exemple des tranchées et des zones de front où il y a une réelle profusion de robots terrestres. Dans la plupart des cas, les robots terrestres sont utilisés pour déloger les soldats des tranchées.
                    </Typography>
                    <Typography paragraph>
                        Pour résumer ces différentes utilisations, il utilise l’expression « robot multi-domaine ».
                    </Typography>
                    <Typography paragraph>
                        Monsieur Berthier réaffirme ensuite que l’utilisation la plus fréquente est dans le domaine aérien, dans le but d’obtenir des renseignements sur le terrain, de faire du marquage de cibles ou encore dans le domaine de l’aviation.
                    </Typography>
                    <Typography paragraph>
                        Il évoque également les robots MTO (Munition Téléopérée) : des drones de petite taille transportant une charge explosive dans le but de percuter une cible afin de provoquer une explosion et la détruire.
                    </Typography>
                    <Typography paragraph>
                        Il poursuit en expliquant qu’aujourd’hui, la technologie a tellement avancé que tout dans ces drones est de plus en plus miniaturisé, ce qui coûte très cher à produire.
                    </Typography>
                    <Typography paragraph>
                        Philippe rappelle ensuite les différents niveaux d’automatisation d’une arme, de L0 à L5 : L0 pour une arme téléopérée et L5 pour une arme entièrement autonome.
                    </Typography>
                </div>
                </Fade>

                <Fade in={secondQuestionInView} timeout={1000}>
                <div ref={secondQuestionRef}>
                    <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Est-ce que les drones sont capables de différencier les ennemis et les alliés lors du ciblage ?
                    </Typography>
                    <Typography paragraph>
                        Monsieur Berthier répond à cela en expliquant que les avions de chasse, depuis la Seconde Guerre mondiale, utilisent un système appelé IFF (Identification Friend or Foe).
                    </Typography>
                    <Typography paragraph>
                        Cela correspond à l’identification allié/ennemi. Les avions de chasse utilisent des transpondeurs pour ce système. Le fonctionnement de l’IFF repose sur un processus cryptographique d’échange de clés secrètes qui permet de prouver que l’autre est soit un ennemi soit un allié.
                    </Typography>
                    <Typography paragraph>
                        Ce processus est très connu depuis les années 1970, tout comme les transpondeurs aériens depuis la fin de la Seconde Guerre mondiale. Les transpondeurs sont des boîtiers qui utilisent les liaisons entre avions et les bases de contrôle. Ces transpondeurs sont désormais adaptés à la taille des drones pour reproduire ce processus.
                    </Typography>
                    <Typography paragraph>
                        Monsieur Berthier poursuit en expliquant que cette utilisation avec les drones est un sujet d’actualité très important. Actuellement, entre 10 % et 20 % des drones sont lancés par les Russes, et il arrive que, lorsque les drones arrivent sur le terrain, un autre drone russe tire sur les drones arrivés, car il ne sait pas, sans transpondeur, faire la différence sans identifiants.
                    </Typography>
                    <Typography paragraph>
                        Il explique que même avec un transpondeur, il y a des risques que l’ennemi essaie de s’identifier en tant que drone ami ; c’est pour cela qu’un échange robuste de clés est mis en place pour prouver qu’il n’y a pas d’usurpation d’identité.
                    </Typography>
                    <Typography paragraph>
                        Monsieur Berthier précise que les drones MTO ne sont pas, généralement, dotés de transpondeurs.
                    </Typography>
                </div>
                </Fade>

                <Fade in={thirdQuestionInView} timeout={1000}>
                <div ref={thirdQuestionRef}>
                    <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                        L’armée française est-elle en mesure de nous protéger contre une attaque de drone MTO ?
                    </Typography>
                    <Typography paragraph>
                        Monsieur Berthier explique que ce qui est évoqué est la LAD, la lutte anti-drone, et que pour tous les pays, la LAD est un sujet compliqué.
                    </Typography>
                    <Typography paragraph>
                        Il précise ensuite qu’il est plus facile de mener une attaque de drone que de défendre contre ces attaques, en termes d’algorithmique, de physique, d’aérologie et d’organisation.
                    </Typography>
                    <Typography paragraph>
                        Il continue en rappelant que la France est actuellement le numéro deux mondial grâce aux grands groupes tels que Dassault, Thales, Nexter, etc., qui vendent partout dans le monde.
                    </Typography>
                    <Typography paragraph>
                        Concernant nos défenses, aujourd’hui, il précise qu’il est plus facile de détecter de petits drones dans des situations non saturantes, mais dès que celle-ci est saturante, pour tous les pays, c’est plus difficile.
                    </Typography>
                    <Typography paragraph>
                        En effet, aujourd’hui, contrôler une zone contre de gros drones reste simple. Ce sont les plus petits drones, qui volent à basse altitude et à grande vitesse, qui sont beaucoup plus difficiles à intercepter. Il poursuit en prévenant que face à 50 drones ou plus, aucun système actuel ne peut les arrêter.
                    </Typography>
                    <Typography paragraph>
                        Il explique ensuite que des avancées seront faites dans le futur pour contrôler les attaques de drones en essaim et que pour contrer ces attaques en essaim, il sera nécessaire de déployer un essaim encore plus grand, contrôlé par des systèmes automatisés. Ces systèmes utiliseront des techniques comme l’apprentissage par renforcement, le machine learning, la vision par ordinateur, l’optimisation combinatoire et l’ordonnancement de tâches.
                    </Typography>
                </div>
                </Fade>

                <Fade in={fourthQuestionInView} timeout={1000}>
                <div ref={fourthQuestionRef}>
                    <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Qu’est-ce que la guerre en Ukraine va engendrer pour les prochaines guerres ?
                    </Typography>
                    <Typography paragraph>
                        Monsieur Berthier explique qu’aujourd’hui, lorsqu’on est la cible d’un drone kamikaze, il n’y a rien qu’un humain puisse faire pour se défendre. En effet, le combat étant entre un humain et un robot est totalement déséquilibré, et l’humain est condamné sans aucune chance de s’échapper.
                    </Typography>
                    <Typography paragraph>
                        Il poursuit en expliquant que cette situation ne fera que s’aggraver avec le temps, et que la solution pour contrer cela sera l’utilisation d’autres drones.
                    </Typography>
                    <Typography paragraph>
                        C’est pourquoi la première ligne de confrontation sera constituée exclusivement de robots s'affrontant entre eux. La victoire reviendra à celui qui disposera des systèmes robotisés les plus performants, plus agressifs, plus rapides et plus furtifs.
                    </Typography>
                </div>
                </Fade>
            </Grid>
        </Grid>
    );
}
