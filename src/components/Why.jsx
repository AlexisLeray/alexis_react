import React, {useContext} from 'react'
import {UserContext} from './UserContext'
import Nav from './Nav'



const Why = () => {
    const {userInfo} = useContext(UserContext)
    return (
        <>
            <header>
                <Nav />
                <h2>
                    Quels sont les avantages que je peux proposer ?
                </h2>
            </header>
            <main>
                <p>
                    On va parler qualité humaine dans un premier temps. Six mois de formation c'est court pour une métier aussi dense et j'en ai conscience.
                </p>
                <p>
                    
                </p>
            </main>
        </>
    )
}
export default Why
