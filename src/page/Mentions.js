import Header from '../component/Header'
import Footer from '../component/Footer'


const Mentions = () => {
    return (
        <div>
            <Header />
            <main class="container768 sectionContent textBlock">
            <h1>Informations légales</h1>
            <h2>A propos du Dases Lab</h2>
            <p>Dases Lab propose un exemple de plateforme d’échanges de données de l’Education et la formation tout au long de la vie. Il s’agit d’un site à visée expérimentale. </p>
            <h3>Un catalogue de ressources</h3>
            <p>La plateforme expérimentale Dases Lab propose un catalogue de données et de services de référence provenant de sources hétérogènes des filières de l’éducation et de la formation tout au long de la vie.</p>
                <p>Les APIs constituent l’outil permettant aux Utilisateurs la transmission de données publiques, de données personnelles ou de services.</p>
                <h3>Une interface interactive</h3>
                Le portail Dases Lab est composé de plusieurs interfaces permettant:
                <ul>
                    <li>La mise à disposition de données et/ou de services via des APIs (notamment en temps réel),</li>
                    <li>Des recherches thématiques, ou encore l’exportation de jeux de données via un catalogue de données et services</li>
                </ul>
                <h3>Des accès et partages sécurisés et maitrisés</h3>
                Pour sécuriser les accès, le Dases Lab propose la défnition d’un cadre éthique et juridique d’utilisation de services et de partage de données :
                <ul>
                    <li>L’utilisation de licences permettant le respect de la propriété des données et des algorithmes en fonction de la politique commerciale décidée par leur propriétaire.</li>
                    <li>Des services de contractualisation permettant le respect de la réglementation en matière de protection des données à caractère personnel.</li>
                </ul>
                <hr/>
                <h2>Informations éditoriales</h2>
                <h3>Editeur</h3>
                <p>Ministère de l’Education nationale, de la Jeunesse et des Sports<br />
                    Direction du numérique pour l’Education <br />
                    107 rue de Grenelle, 75007 Paris</p>
                <h3>Rédaction et maîtrise d’ouvrage</h3>
                <p>La direction de projet du département de la stratégie et des partenariats assure la coordination du processus de production conçues dans le cadre du programme d’Entreprenariat d’Interet Général. </p>
                <hr />
                <h2>Hébergement</h2>
                <ul>
                    <li><strong>Interface (Front end)</strong> hébergé par <a href="https://fleek.co/" target="_blank">Fleek</a>, réseau distribué IPFS</li>
                    <li><strong>Serveur (Back end)</strong>  Ce serveur a été déployé pour permettre la vérification des identités et la création de ces références vérifiables ainsi que des descriptions des services devant être ajoutés. Ce serveur est hébergé par Heroku et accessbile à cette adresse : <a href="https://dases-proto.herokuapp.com" target="_blank">https://dases-proto.herokuapp.com</a></li>
                    <li><strong>Base de données</strong> hébergée sur <a href="https://www.mongodb.com/cloud/atlas/lp/" target="_blank">MongoDB</a> en Belgique. A terme, cette base de données est amenée à disparaitre pour permettre un fonctionnement décentralisé du Dases Lab.</li>
                </ul>
                <hr/>
                <h2>Responsabilité</h2>
                <p>Lorsque la plateforme Dases Lab est susceptible de proposer des liens vers d’autres sites: sites institutionnels, sites d’associations, d’entreprises, ces liens ont pour objectif de permettre aux utilisateurs d’accéder à des ressources. </p>
                <p>Ces sites étant indépendants de la plateforme, la responsabilité du Dases Lab, non plus que celle du directeur de publication/rédaction, n’est engagée par les contenus de ces sites. </p>
                <hr/>
                <h2>Autorisation de reproduction des contenus</h2>
                <p>Les éventuels documents proposés en téléchargement, sauf indication contraire, sont mis à disposition selon les termes de la <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/fr/" target="_blank">Licence Creative Commons Paternité - Pas d'Utilisation Commerciale - Partage à l'Identique 3.0 non transcrit.</a></p>
                Pour tout autre contenu éditorial ou à but d’illustration (logos, pictogrammes, vignettes, photographies) du Dases Lab, toute copie partielle ou intégrale dit, sauf mentions particulières, faire l’objet d’une demande. Cette demande doit préciser le contenu visé ainsi que la publication ou le site sur lequel cet élément pourrait figurer. Après autorisation, la reproduction du contenu devra obéir aux principes suivants:

                <ul>
                    <li>gratuité de diffusion</li>
                    <li>respect de l’intégrité des contenus reproduits</li>
                </ul>
                <p>Le Dases Lab est une plateforme développée à partir de technologies open source; Vous pouvez trouver son code source sur <a href="https://github.com/pgrandne/daseslab" target="_blank">https://github.com/pgrandne/daseslab</a>. Sa réutilisation est soumise au respect de la licence <a href="https://choosealicense.com/licenses/mit/" target="_blank">MIT</a>.</p>
                <hr />
                <h2>Crédits</h2>
                <p>Illustrations by <a href="https://icons8.com/illustrations/author/259416" target="_blank">Marina Green | Icons8 Illustrations</a> </p>
                <hr />
                <h2>Création de liens hypertexte</h2>
                <p>Tout site internet est autorisé à mettre en place un lien hypertexte pointant vers les contenus du DasesLab. La mention excplicite du site Dases Lab dans l’intitulé du lien est souhaitée mais pas obligatoire. </p>
            </main>
            <Footer />
        </div>
    )
}

export default Mentions;

