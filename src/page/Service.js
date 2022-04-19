import Connection from '../component/Connection';
import entityUnkown from '../assets/entityUnKnown.svg'
import menjs from '../assets/logos/menjs.jpg'
import visions from '../assets/logos/visions.png'
import { useDispatch, useSelector } from 'react-redux';
import { addAsyncVisions } from '../features/reducers/visionsSlice';
import { useNavigate, useParams } from 'react-router-dom';


const Service = ({ dashboard, t }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const buttonName = "Demander l'intégration"
    const typeConnection = "use"
    const { id } = useParams();
    const servicesList = useSelector((state) => state.servicesList.service);
    const usersList = useSelector((state) => state.usersList.user);
    const service = servicesList.filter(service => service.id === id)
    const provider = usersList.filter(user => user.did === service[0].authorDid)
    const did = useSelector((state) => state.connection.did);
    const user = usersList.filter(user => user.did === did)

    const handleBack = () => {
        navigate(-1);
    }

    const handleIntegration = async () => {
        const data = {
            "providerJwt": provider[0].vcJwt,
            "sdJwt": service[0].sdJwt,
            "userJwt": user[0].vcJwt
        }
        window.alert("Vous allez être redirigé vers le service Visions pour signer le contrat d'échange de données");
        console.log(data)
        dispatch(addAsyncVisions(data));
    }

    return (
        <section className="main flex column flex-1">
            <ul className="container breadcrumb flex row">
                <li className="back"><button onClick={handleBack}>{t('retour')}</button></li>
                <li><button onClick={handleBack}>{t('catalogue')}</button></li>
                <li className="current"><button onClick={handleBack}>{service[0].title}</button></li>
            </ul>
            <div className="servicePage">
                <main className="container sectionContent">
                    <section className="container servicePageTitle flex row">
                        {(service[0].entity === 'MENJS') &&
                            <img src={menjs} alt="" />}
                        {(service[0].entity !== 'MENJS') &&
                            <img src={entityUnkown} alt="" />}
                        <div>
                            <h1>{service[0].title}</h1>
                            <ul className="resourceTags flex row center wrap">
                                <li className="resourceType dataSet"></li>
                                <li className="isResourceOpen locked"></li>
                                <li>
                                    <ul className="tagList flex row">
                                        <li>API</li>
                                        <li>Students</li>
                                        <li>Skills</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {service[0].personalData === "oui" &&
                            <ul className="ctas">
                                <li>
                                    {dashboard === "false" && <Connection buttonName={buttonName} typeConnection={typeConnection} id={service[0].id} />}
                                    {dashboard === "true" && <button className="useService button blackButton export" onClick={handleIntegration}>Demander l'intégration</button>}
                                    <br/>
                                    <span>powered by <img src={visions} alt="" /></span>
                                </li>
                            </ul>}
                    </section>
                    <section className="container servicePageContent flex wrap column">
                        <div className="serviceDescription flex-1">
                            {service[0].personalData === "oui" &&
                                <p className="warning">
                                    ⚠ Cette ressource donne accès à des données personnelles <br />
                                    <a href="https://daseslab.on.fleek.co/" className="questionLink">En apprendre plus sur les contraintes liées à cet usage</a>
                                </p>}
                            <h2>Description</h2>
                            <p>{service[0].description}</p>
                        </div>
                        <div className="serviceDetails">
                            <div className="serviceEditor">
                                <h2>Editeur</h2>
                                <button className="button whiteButton">{service[0].entity}</button>
                            </div>
                            <div className="serviceEditor">
                                <h2>Documentation</h2>
                                <button className="button whiteButton external">
                                    <a href={service[0].documentation} target="_blank" rel="noopener noreferrer">Voir la documentation</a>
                                </button>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td colSpan="2">
                                            <h2>{t('Détails')}</h2>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Type</td>
                                        <td>{service[0].typeData}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Niveau')}</td>
                                        <td>{service[0].levelData}</td>
                                    </tr>
                                    <tr>
                                        <td>Format</td>
                                        <td>{service[0].formatData}</td>
                                    </tr>
                                    <tr>
                                        <td>Standard</td>
                                        <td>{service[0].originalData}</td>
                                    </tr>
                                    <tr>
                                        <td>Licence</td>
                                        <td>{service[0].licence}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Données personnelles')}</td>
                                        <td>{service[0].personalData}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Label Gaia-X')}</td>
                                        <td>{service[0].labelData}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('Conditions d’utilisation')}</td>
                                        <td><a href={service[0].conditions} target="_blank" rel="noopener noreferrer" className="button whiteButton external block">{service[0].conditions}</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        </section>
    )
}

export default Service;
