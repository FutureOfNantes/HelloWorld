import hero from '../assets/img/hero.png';
import fedcat from '../assets/img/fedcat.png';
import sdicon from '../assets/img/sdicon.png';
import gaiaxlogo from '../assets/img/gaiaxlogo.png';

const Home = ({ t }) => {
    return (
        <div className="homePage">
            <section className="hero">
                <div className="container">
                    <h1>{t("Bienvenue sur le laboratoire d’expérimentation du Data Space Education & Compétences")}</h1>
                    <h2>{t("Accélérer l’innovation en éducation, en certification et développement des compétences à travers un catalogue fédéré de partage de données et services basé sur la blockchain")}</h2>
                    <p>{t("#Transparence")}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("#Portabilité")}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("#Interopérabilité")}</p>
                    <img src={hero} alt="" />
                </div>
                <div className="container flex alignLeft">
                    <div className="flex-1 indexBlocs">
                        {t("Un catalogue fédéré de données et services liés à")} <strong> {t("l’éducation et aux compétences")} </strong><br />
                        <a className="questionLink" href="https://daseslab.on.fleek.co/"> {t("catalogue fédéré ?")} </a>
                    </div>
                    <div className="flex-1 indexBlocs">
                        {t("Un référencement automatisé des services via des")} <strong> {t("self-descriptions")} </strong><br />
                        <a className="questionLink" href="https://daseslab.on.fleek.co/">self-description ?</a>
                    </div>
                    <div className="flex-1 indexBlocs">
                        {t("Une initiative d’envergure européenne en partie issue des")} <strong> {t("travaux menés par gaia-x")} </strong><br />
                        <a className="questionLink" href="https://daseslab.on.fleek.co/">gaia-x ?</a>
                    </div>
                </div>
            </section>
            <section className="main homeContent">
                <section>
                    <section className="container flex row">
                        <div className="flex-1">
                            <h1>{t("Un catalogue fédéré de données et services")}</h1>
                            <p>{t("Le catalogue fédéré agrège de façon décentralisée toutes les données ainsi que les services que les participants au catalogue possèdent. Nous ne stockons rien.")} </p>
                            <button className="button whiteButton">
                                {t("Accéder au catalogue")}
                            </button>
                            <br />
                            <button className="button whiteButton">
                                {t("Participer en partageant des données ou des services")}
                            </button>
                        </div>
                        <div className="flex-1">
                            <img src={fedcat} alt=""/>
                        </div>
                    </section>
                </section>
                <section>
                    <section className="container flex row">
                        <div className="flex-1">
                            <h1>{t("La self-description, particule élémentaire du data space")}</h1>
                            <p>{t("La self-description est, en plus des verifiable credentials")} 🤔 {t("et des smart contracts")} 🤔, {t("un élément central du catalogue fédéré de données et services. C’est un document signé électroniquement et infalsifiable qui permet d’identifier les acteurs et leurs ressources du data space.")} </p>
                            <button className="button whiteButton">
                                {t("Plus de détails sur le fonctionnement")}
                            </button>
                        </div>
                        <div className="flex-1">
                            <img src={sdicon} alt=""/>
                        </div>
                    </section>
                </section>
                <section>
                    <section className="container flex row">
                        <div className="flex-1">
                            <h1>{t("Une initiative issue de Gaia-X")}</h1>
                            <p>{t("Gaia-X est une initiative qui développe un cadre logiciel de contrôle et de gouvernance et qui met en œuvre un ensemble commun de politiques et de règles pouvant être appliquées à tout objet technologique.")} </p>
                            <button className="button whiteButton external">
                                {t("En savoir plus sur gaia-x")}
                            </button>
                        </div>
                        <div className="flex-1">
                            <img src={gaiaxlogo} alt=""/>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Home;
