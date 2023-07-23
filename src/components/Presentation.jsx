import React,{useContext, Fragment, useEffect, useState} from "react";
import {UserContext} from './UserContext'
import Nav from './Nav'

const Presentation = () => {
    const {userInfo} = useContext(UserContext);
   
    return(
        <>
            
            {userInfo ?
                <>
                    <header>
                        <Nav />
                        <p>Bonjour {userInfo.name}, déjà merci pour la visite, bienvenue chez moi si je puis dire.</p>
                        <p>L'utilitée de demander le prénom du visiteur n'est éssentielle, qu'on soit d'accord, néanmoins il me permettais de m'entrainer avec le localstorage, ce qui est toujours intéressant.</p>
                        {/* <p> 
                            Comment {userInfo.userLanguage ? "vas-tu ?" : "allez-vous ?" }
                        </p> */}
                        <h2>Comment sommes nous arrivés là ?</h2>
                    </header>
                    <section>
                        <img src={process.env.PUBLIC_URL + '/profil.jpg'} alt="Alexis" className="photo"/>  
                        <header>
                            <p>
                                Alexis Leray, 32 ans à l'heure actuelle, sauf si cette visite à lui après le 24 Octobre 2023 où là j'aurais 33 ans.
                            </p>
                        </header>
                        <main>
                            <p>
                                Issu d'une formation initiale en boulangerie, j'ai dû arrêter mon métier de base, car passionné de théâtre, j'ai un peu tiré sur la corde et le corps à dit stop.
                            </p>
                            <p>
                                Première session de chômage et je commence déjà à m'intéresser au métiers de l'informatique, mais mal renseingé et timing un peu cours pour se remettre de la santé et trouver ma voie je la laisse en suspend pendant 4 ans.
                            </p>
                            <p>
                                Tant d'années passée dans une métier qui ne me convenait pas, mais dans lequel j'ai pû apprendre l'importance et l'art subtil du travail en équipe il était temps pour moi de passer dans une autre entreprise pour voir de nouvelles choses et, vue que j'y suis resté que quelques mois, visiblement ça ne l'a pas fait.
                            </p>
                            <p>
                                Nouvelle session de chômage, nouvelles opportunités ! Retour aux sources et à ce qui m'intéressait principalement, l'informatique ! Beaucoup de choix possibles, alors pourquoi le développement web ?  
                            </p>
                            <p>
                                Simplement parce que j'ai un très bon ami dans le milieu, j'ai pû et j'en observe encore les tréfonds, sans forcément tout comprendre, mais en comprenant que ne pas tout comprendre fait aussi partie du métier.
                            </p>
                            <p>
                                Quand une opportunité se présente il faut savoir la saisir, un soir un mail automatique me propose une formation avec la <a href="https://3wa.fr/" target="_blank" rel="noreferrer">3W Academy</a>, l'occasion pour moi de commencer réellement mon apprentissage. 
                            </p>
                            <p>
                                Le diplôme obtenu avec la mention très bien , {userInfo.userLanguage ? "s'il te plaît" : "s'il vous plaît" }, il faut poursuivre sur la lancée avec un autre diplôme et d'autres connaissances ! 
                            </p>
                        </main>
                    </section>
                </>    
                : 
                <p>Bonjour çamarchepas</p>
            }
        </>
    )
}

export default Presentation