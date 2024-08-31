import Map from "@/components/map/Map";
import {Button, Grid, Typography} from "@mui/material";
import React from "react";
const Present = ({handlePresent}) => {

    return (
        <>
            <Grid item xs={12}>
                <Typography sx={{ paddingLeft: 2, marginTop:6 }} component="h1" variant="h4">
                    <strong>La situation actuelle dans le monde</strong>
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{marginBottom:6}}>
                <Typography sx={{ paddingLeft: 2}} component="legend">
                  Clique sur un des points pour obtenir des informations sur la façon dont l'IA et l'armement est utilisée.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Map/>
            </Grid>
            <Grid item xs={12} sx={{textAlign:"right", marginTop:3, marginBottom:3}}>
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
                }} onClick={handlePresent}><strong>Suivant</strong></Button>
            </Grid>

        </>
    )

}

export default Present;