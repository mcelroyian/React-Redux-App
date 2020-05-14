import React from 'react'
import { Grid, Paper } from '@material-ui/core'

const Location = ({local}) => {
    return (

        
            <Grid item xs={4}>
                <Paper >
                <h2 className='title'>{local.website_url ? <a href={local.website_url}>{local.name}</a> : local.name}</h2>
                <h3 className='subtitle'>{local.city}, {local.state}</h3>
                </Paper>

        </Grid>

    )
}
export default Location