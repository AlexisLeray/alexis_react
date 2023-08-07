import React,{useContext, Fragment, useEffect, useState} from "react"
import {UserContext} from './UserContext'
import {useNavigate} from 'react-router-dom'

const Home= () => {

    const [name, setName] = useState('');
    const [userLanguage, setUserLanguage] = useState(false)
    const {setUserInfo} = useContext(UserContext);
    const navigate = useNavigate()

    const handleNameChange = (e) => {
        setName(e.target.value);
        
    }
    const handleLanguageChange = (e) => {
        setUserLanguage(!userLanguage)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trim() !== '') {
            // setUserInfo({name: name.trim(), age: age.trim()});
            // sessionStorage.setItem('user_info', JSON.stringify({name: name.trim(), age: age.trim()}))
            setUserInfo({name: name.trim(), userLanguage: userLanguage});
            sessionStorage.setItem('user_info', JSON.stringify({name: name.trim(), userLanguage: userLanguage}))
            navigate("/presentation")
            
        } else {
            setUserInfo({name: ""})
            navigate("/presentation")
        }
    }

    return(
        <>
            <header>
                
                <h1>Alexis Leray</h1>
                <h2>Développeur Web</h2>
            </header> 
            <section>
                <p>
                    Suite à l'obtention d'un titre RNCP Développeur intégrateur en réalisation d'application web, j'ai souhaité poursuivre avec une alternance.
                </p>
                <p>
                    Étant à la recherche d'un alternance pour un Bachelor Concepteur Développeur d'Application, j'ai décidé de cultiver ma pratique tout en étant utile pour ma recherche de créer ce petit site à mon image.
                </p>
                <p>Pour une expérience personnalisée, veuillez renseigner votre prénom</p>
                <div>
                    <form>
                        <label>Prénom</label>
                            <input type="text" value={name} onChange={handleNameChange} />
                        <label>On se tutoie ?</label>
                            <input type="checkbox" value={userLanguage} onChange={handleLanguageChange} />
                        <button onClick={handleSubmit}>Entrer</button>
                    </form>
                </div>
           </section> 
        </>
    )
}

export default Home