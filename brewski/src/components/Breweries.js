import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBrews } from '../store/actions'
import Location from '../components/Location'

const Breweries = ({ isLoading, locations, state, city, zip, error, getBrews }) => {
    
    //Get default data on pageload
    useEffect(() => {
        getBrews()
    }, [getBrews])
    
    return (
        <main>
            <h1>Locations:</h1>

             {/* LOADING */}
             {isLoading && <h2>Loading data...</h2>}

             {/* DATA HAS ARRIVED */}
             {!isLoading && locations && (locations.map(local => <Location local={local} key={local.id}/>))}
            

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