import React, { useState } from "react";
import { Grid, Typography, Button, Card, CardContent } from "@mui/material";

const Evolutions = () => {
    const [choices, setChoices] = useState([]);
    const [evaluation, setEvaluation] = useState(null);

    const questions = [
        {
            question: "Autoriser les armes autonomes sans supervision humaine",
            options: ["Autoriser", "Interdire"],
            details: {
                "Autoriser": {
                    advantages: "Peut augmenter l'efficacité des opérations militaires et réduire les pertes humaines pour les forces armées.",
                    disadvantages: "Risques de réactions imprévisibles, pertes civiles, et problèmes éthiques liés à la délégation de décisions létales à des machines."
                },
                "Interdire": {
                    advantages: "Réduit les risques de bavures et de violations des droits de l'homme, et facilite la responsabilité légale.",
                    disadvantages: "Peut limiter les avancées technologiques et les avantages stratégiques des forces armées."
                }
            }
        },
        {
            question: "Utiliser l'IA pour la surveillance de masse",
            options: ["Utiliser", "Interdire"],
            details: {
                "Utiliser": {
                    advantages: "Améliore la sécurité publique et aide à prévenir le crime et le terrorisme.",
                    disadvantages: "Risque d'empiéter sur les libertés individuelles et la vie privée, et potentiels abus de pouvoir."
                },
                "Interdire": {
                    advantages: "Protège les droits de la vie privée et prévient les abus de surveillance par les gouvernements.",
                    disadvantages: "Peut réduire l'efficacité des forces de l'ordre dans la prévention et la réponse aux menaces."
                }
            }
        },
        {
            question: "Développer des systèmes de défense autonome",
            options: ["Développer", "Interdire"],
            details: {
                "Développer": {
                    advantages: "Peut offrir des avantages stratégiques et améliorer la réactivité des systèmes de défense.",
                    disadvantages: "Risque d'accidents et d'erreurs, coûts élevés de développement et de maintenance."
                },
                "Interdire": {
                    advantages: "Réduit les risques de défaillance technologique et les coûts associés.",
                    disadvantages: "Peut limiter les capacités de défense et les avantages technologiques."
                }
            }
        },
        {
            question: "Réguler strictement les algorithmes de prise de décision",
            options: ["Réguler", "Laisser Libre"],
            details: {
                "Réguler": {
                    advantages: "Assure la transparence, l'équité et la responsabilité des algorithmes.",
                    disadvantages: "Peut ralentir l'innovation et imposer des coûts de conformité élevés aux entreprises."
                },
                "Laisser Libre": {
                    advantages: "Favorise l'innovation rapide et réduit les coûts de conformité.",
                    disadvantages: "Risque de biais, d'injustice et de manque de responsabilité dans les décisions algorithmiques."
                }
            }
        },
        {
            question: "Investir dans la recherche sur l'éthique de l'IA",
            options: ["Investir", "Ne pas investir"],
            details: {
                "Investir": {
                    advantages: "Encourage une utilisation responsable et éthique de l'IA, améliore l'acceptation publique.",
                    disadvantages: "Coûts élevés et potentiels retards dans le développement technologique."
                },
                "Ne pas investir": {
                    advantages: "Réduit les coûts immédiats et accélère le développement technologique.",
                    disadvantages: "Peut mener à des abus, des violations éthiques et une faible acceptation publique."
                }
            }
        },
        {
            question: "Permettre aux entreprises privées de développer des IA militaires",
            options: ["Permettre", "Interdire"],
            details: {
                "Permettre": {
                    advantages: "Accélère l'innovation et le développement technologique par les ressources du secteur privé.",
                    disadvantages: "Risque de priorisation du profit sur la sécurité et l'éthique, et problèmes de contrôle."
                },
                "Interdire": {
                    advantages: "Assure un contrôle strict et réduit les risques de fuite de technologies sensibles.",
                    disadvantages: "Peut ralentir l'innovation et limiter les ressources disponibles pour le développement."
                }
            }
        },
        {
            question: "Créer des accords internationaux pour le contrôle des IA militaires",
            options: ["Créer", "Ne pas créer"],
            details: {
                "Créer": {
                    advantages: "Favorise la coopération mondiale, réduit les risques de conflits et promeut la paix.",
                    disadvantages: "Nécessite un engagement et une conformité mondiale, ce qui peut être difficile à obtenir."
                },
                "Ne pas créer": {
                    advantages: "Évite les complications diplomatiques et les engagements internationaux contraignants.",
                    disadvantages: "Augmente les risques de conflits et de développement non contrôlé des IA militaires."
                }
            }
        }
    ];

    const handleChoice = (questionIndex, choice) => {
        const newChoices = [...choices];
        newChoices[questionIndex] = choice;
        setChoices(newChoices);
    };

    const handleEvaluation = () => {
        // Detailed evaluation logic
        let stability = "Neutre";
        let ethics = "Neutre";
        let conflict = "Neutre";

        if (choices.includes("Interdire") && choices.includes("Réguler") && choices.includes("Investir")) {
            stability = "Plus stable";
            ethics = "Plus éthique";
            conflict = "Moins conflictuel";
        } else if (choices.includes("Autoriser") || choices.includes("Permettre")) {
            stability = "Moins stable";
            ethics = "Moins éthique";
            conflict = "Plus conflictuel";
        } else if (choices.includes("Ne pas investir")) {
            ethics = "Moins éthique";
        }

        // Detailed results
        const stabilityDetail = stability === "Plus stable"
            ? "L'interdiction des armes autonomes, la régulation stricte et l'investissement dans l'éthique contribuent à une plus grande stabilité internationale en réduisant les risques d'escalade militaire."
            : "L'autorisation de l'IA militaire et le manque de régulation peuvent entraîner une instabilité en augmentant les tensions et les risques de conflits.";

        const ethicsDetail = ethics === "Plus éthique"
            ? "La régulation, l'investissement dans l'éthique et la surveillance contribuent à une utilisation plus responsable et éthique de l'IA dans les armements."
            : "Les choix permettant le développement non régulé et l'absence d'investissement dans l'éthique peuvent mener à des abus et des violations des droits de l'homme.";

        const conflictDetail = conflict === "Plus conflictuel"
            ? "Permettre le développement non contrôlé des IA militaires peut intensifier les conflits et les tensions géopolitiques."
            : "La régulation et la coopération internationale aident à réduire les risques de conflits et favorisent la paix.";

        setEvaluation({ stability, ethics, conflict, stabilityDetail, ethicsDetail, conflictDetail });
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ marginBottom: 6 }}>
                    <Typography sx={{ paddingLeft: 2, marginTop: 6 }} component="h1" variant="h4">
                        <strong>Les évolutions</strong>
                    </Typography>
                    <Typography sx={{ paddingLeft: 2, marginTop: 2 }} component="p" variant="body1">
                        L'intelligence artificielle (IA) joue un rôle de plus en plus important dans le domaine militaire.
                        Des drones autonomes aux systèmes de défense intelligents, les applications de l'IA dans l'armement
                        présentent des avantages mais aussi des défis éthiques et de sécurité.
                        Cette évolution rapide soulève des questions cruciales sur la régulation et l'éthique,
                        qui détermineront l'avenir de l'IA et des armements.
                    </Typography>
                    <Typography sx={{ paddingLeft: 2, marginTop: 4 }} component="h2" variant="h5">
                        <strong>Le futur de l'IA et des armements dépendra de nos choix actuels en matière de régulation et d'éthique.</strong>
                    </Typography>
                </Grid>
                {questions.map((question, index) => (
                    <Grid item xs={12} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{question.question}</Typography>
                                {question.options.map((option, optionIndex) => (
                                    <Button
                                        key={optionIndex}
                                        variant={choices[index] === option ? "contained" : "outlined"}
                                        color="primary"
                                        onClick={() => handleChoice(index, option)}
                                        sx={{ marginRight: 2, marginTop: 2 }}
                                    >
                                        {option}
                                    </Button>
                                ))}
                                {choices[index] && (
                                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                                        <strong>Avantages :</strong> {question.details[choices[index]].advantages}
                                    </Typography>
                                )}
                                {choices[index] && (
                                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                                        <strong>Inconvénients :</strong> {question.details[choices[index]].disadvantages}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        onClick={handleEvaluation}
                        sx={{ marginTop: 4 }}
                    >
                        Évaluation Finale
                    </Button>
                </Grid>
                {evaluation && (
                    <Grid item xs={12} sx={{ marginTop: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Résumé du monde futur</Typography>
                                <Typography variant="body1">Stabilité : {evaluation.stability}</Typography>
                                <Typography variant="body1">Éthique : {evaluation.ethics}</Typography>
                                <Typography variant="body1">Conflit : {evaluation.conflict}</Typography>
                                <Typography variant="body1" sx={{ marginTop: 2 }}>
                                    <strong>Détails sur la Stabilité :</strong> {evaluation.stabilityDetail}
                                </Typography>
                                <Typography variant="body1" sx={{ marginTop: 2 }}>
                                    <strong>Détails sur l'Éthique :</strong> {evaluation.ethicsDetail}
                                </Typography>
                                <Typography variant="body1" sx={{ marginTop: 2 }}>
                                    <strong>Détails sur le Conflit :</strong> {evaluation.conflictDetail}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default Evolutions;
