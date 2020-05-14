import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBrews } from '../store/actions'
import Location from '../components/Location'
import { Grid } from '@material-ui/core'

const Breweries = ({ isLoading, locations, state, city, zip, error, getBrews }) => {
    
    //Get default data on pageload
    useEffect(() => {
        getBrews()
        if (city) {
            getBrews('by_city', city)
        }
    }, [getBrews, city])

    useEffect(() => {
        console.log('entered second useEffect')
        if (state) {
            console.log('entered if statement')
         getBrews('by_state', state)
        }
    }, [state, getBrews])
    
    return (
        <main>
            <div className='container'>

             {/* LOADING */}
             {isLoading && <h2>Loading data...</h2>}

             {/* DATA HAS ARRIVED */}
             
             <Grid container spacing={2}>
                {!isLoading && locations && (locations.map(local => <Location local={local} key={local.id}/>))}
             </Grid>
             
            
            </div>
        </main>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        locations: state.locations,
        state: state.state,
        city: state.city,
        zip: state.zip,
        error: state.error,
    }
}

export default connect(mapStateToProps, {getBrews})(Breweries)