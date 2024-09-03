import {Button, Grid, Typography} from "@mui/material";
import React from "react";
import Timeline from "@/components/timeline/Timeline";

const Historique = ({handleHistorique, handlePrevHistorique}) => {

    return(
        <>
            <Grid item xs={12}>
                <Typography sx={{ paddingLeft: 2, marginTop:6 }} component="h1" variant="h4">
                    <strong>Un petit retour en arrière...</strong>
                </Typography>
            </Grid>
            <Grid item sx={{minHeight:"100vh"}} xs={12}>
                <Timeline/>
            </Grid>
            <Grid item sx={{marginBottom:3}} xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{textAlign:"left"}}>
                        <Button sx={{
                            color: 'black',
                            border: 1,
                            borderColor: 'lightgrey',
                            borderRadius: 2,
                            padding: 1,
                            paddingLeft: 2,
                            paddingRight: 2,
                            backgroundColor: 'white',
                            position: 'relative',
                        }} onClick={handlePrevHistorique}><strong>Précédent</strong></Button>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign:"right"}}>
                        <Button sx={{
                            color: 'black',
                            border: 1,
                            borderColor: 'lightgrey',
                            borderRadius: 2,
                            padding: 1,
                            paddingLeft: 2,
                            paddingRight: 2,
                            backgroundColor: 'white',
                            position: 'relative',
                        }} onClick={handleHistorique}><strong>Suivant</strong></Button>
                    </Grid>


                </Grid>

            </Grid>
        </>
    )
}

export default Historique;