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
                    On va parler qualité humaine dans un premier temps. 
                    Six mois de formation c'est court pour un métier aussi dense et j'en ai conscience, 
                    mais on parlera <a href="/technical">technique</a> dans la partie dédiée.
                </p>
                <p>
                    La boulangerie, le théâtre m'ont permis d'avoir une notion forte du travail, 
                    on a rien sans rien, tant que le but n'est pas accompli alors on essaye et recommence inlassablement jusqu'à 
                    avoir le produit ou la pièce à succès.
                    Un boulanger n'est pas qu'un gars qui fait du pain, c'est un éleveur microbiotique,
                     un commédien n'est pas qu'un gars qui débite un texte mais un spécialiste de l'émmotion qui 
                     {userInfo.userLanguage ? "te" : "vous"} transmettra celles qu'il veut transmettre.
                </p>
                <p>
                    Sur le même principe je considère que le développeur est un "traducteur pour machines" 
                    qui parlent toutes plusieurs langues et ce sont ces languages que j'ai envie d'apprendre. 
                </p>
                <p>
                    Tout comme une personne souhaitant apprendre l'anglais peut très bien l'apprendre de son côté, 
                    ça sera toujours plus efficace s'il est plongé directement dans une population qui parle uniquement cette langue.
                </p>
                <h3>Et c'est là que ma personne prend son sens au sein de {userInfo.userLanguage ? "ton" : "votre"} entreprise</h3>
                <p>
                    Bien que lors de ma soutenance j'ai été en mesure de sortir un site "propre et professionnel", 
                    il m'en faut plus pour que je puisse me considérer comme développeur.
                </p>
                <p>
                    M'engager c'est engager l'assurance d'avoir un employé cherchant l'évolution, la compréhension du code (chatGPT ne fera pas tout)
                </p>
                <p>
                    M'engager c'est combler mes lacunes de la bonne façon, si je ne connais pas tout ce qui est possible de faire 
                    c'est que je n'ai encore pas appris non plus les mauvaises façons de le faire.
                </p>
                <p>
                    M'engager c'est donc engager pour l'avenir, une alternance n'est que le début, je serais formé au sein de 
                    {userInfo.userLanguage ? "ton" : "votre"} entreprise à {userInfo.userLanguage ? "ta" : "votre"} façon de faire.
                </p>
                <p>
                    M'engager c'est engager un humain à l'écoute d'autre humain, le travail de développeur ne se fait pas seul, 
                    même si nous travaillons face à un écran, ce n'est pas une raison suffisante pour oublier les autres humains qui font la même chose.
                </p>
                <p>
                    M'engager c'est investir, pour {userInfo.userLanguage ? "toi" : "vous"}, comme pour moi.
                    {userInfo.userLanguage ? "Tu investiras" : "Vous investirez"} votre temps pour accélerer la sortie de 
                    {userInfo.userLanguage ? "tes" : "vos"} projets grâce à mon travail, j'investirais mon temps de travail et en dehors pour que 
                    {userInfo.userLanguage ? "tu sois" : "vous soyez"} satisfait de ce qui a été accompli.
                    Tous les jours j'acquérirais de nouvelles connaissance et intérogations que je tâcherais de satisfaire une fois chez moi,
                     et je reviendrais le lendemain certainement avec d'autres intérogations pour augmenter encore ma compréhension du métier.
                </p>
            </main>
        </>
    )
}
export default Why
