import React from 'react'
import { connect } from 'react-redux'
import { handleChanges, handleSubmit } from '../store/actions'
import { Container } from '@material-ui/core'

const Search = ({ search, handleChanges, handleSubmit, state }) => {

    return (
        <Container>
            <label>View Breweries by State:
                <select name='state' value={state} onChange={handleChanges}>
                    <option value="">Select a State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="District_Of_Columbia">District Of Columbia</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New_Hampshire">New Hampshire</option>
                    <option value="New_Jersey">New Jersey</option>
                    <option value="New_Mexico">New Mexico</option>
                    <option value="New_York">New York</option>
                    <option value="North_Carolina">North Carolina</option>
                    <option value="North_Dakota">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="Ohio">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode_Island">Rhode Island</option>
                    <option value="South_Carolina">South Carolina</option>
                    <option value="South_Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West_Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                </select>
            </label>
            <label>View Breweries by City
                <input type='text' name='search' value={search} onChange={handleChanges} />
            </label>
            <button name='submit' onClick={() => handleSubmit(search)}>Get a beer</button>
        </Container>
            


    )
}

const mapStateToProps = state => {
    return {
        search: state.search,
        state: state.state,
    }
}

export default connect(mapStateToProps, {handleChanges, handleSubmit})(Search)