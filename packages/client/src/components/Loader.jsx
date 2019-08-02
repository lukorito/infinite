import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

export default () => {
    return (
    <div className="loader">
            <Dimmer active>
                <Loader>Loading Photos</Loader>
            </Dimmer>
    </div>
)}


