import React, {useContext} from 'react'
import {NavLink} from "react-router-dom"
import {UserContext} from './UserContext'

const Nav = () => {
    const {userInfo} = useContext(UserContext)
    return (
        <ul>
            <li>
                <NavLink to="/">
                    Accueil
                </NavLink>
            </li>
            <li>
                <NavLink to="/presentation">
                    Présentation
                </NavLink>
            </li>
            <li>
                <NavLink to="/motivation">
                    Pourquoi {userInfo.userLanguage ? "ton entreprise" : "votre entreprise"}
                </NavLink>
            </li>
            <li>
                <NavLink to="/technique">
                    Et d'un point de vue technique ?
                </NavLink>
            </li>
            <li>
                <NavLink to="/cv">
                    CV
                </NavLink>    
            </li>
        </ul>
    )
}

export default Nav