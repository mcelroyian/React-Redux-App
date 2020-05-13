import React from 'react'

const Location = ({local}) => {
    return (

        <div>
            <p>Name: {local.name}</p>
            <p>City: {local.city}</p>
            <p>Website: {local.website_url}</p>
        </div>

    )
}
export default Location