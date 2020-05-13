import React from 'react'

const Location = ({local}) => {
    return (

        
            <div className='is-child is-4 box'>
                <h2 className='title'><a href={local.website_url}>{local.name}</a></h2>
                <h3 className='subtitle'>{local.city}, {local.state}</h3>
        </div>

    )
}
export default Location