import visions from '../assets/logos/visions.png'
import { useDispatch, useSelector } from 'react-redux';
import { addAsyncVisions } from '../features/reducers/visionsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { modalReducer } from '../features/reducers/connectionSlice';


const Service = ({ dashboard, t }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        // const data = {
        //     "providerJwt": provider[0].vcJwt,
        //     "sdJwt": service[0].sdJwt,
        //     "userJwt": user[0].vcJwt
        // }

        const data = {
            "providerJwt": "eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRGFzZXNJZGVudGl0eSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJzdGF0ZW1lbnQiOnsidHlwZSI6IkNlcnRpZmljYXQgUGFydGljaXBhbnQgREFTRVMiLCJkaWRPd25lciI6ImRpZDpldGhyOjB4Qzg0MzliNGEyYTZjYTAxODUzYThlMDU5NzE3N2I1OTlBRjJmRjNCZiIsImdpdmVuTmFtZSI6IlBlcnJpbiIsImZhbWlseU5hbWUiOiJHUkFORE5FIiwiZW1haWxPd25lciI6InBlcnJpbi5ncmFuZG5lQGdtYWlsLmNvbSIsImNvbXBhbnlOYW1lIjoiTUVOSlMiLCJjb21wYW55QWRyZXNzIjoiMjEgcnVlIGRlcyBBcmNoaXZlcyA3NTAwMyBQYXJpcyIsImxlZ2FsUmVwcmVzZW50YXRpdmUiOiJQZXJyaW4gR1JBTkRORSIsImVtYWlsTGVnYWxSZXByZXNlbnRhdGl2ZSI6InBlcnJpbi5ncmFuZG5lQGdtYWlsLmNvbSJ9fX0sInN1YiI6ImRpZDpldGhyOjB4Qzg0MzliNGEyYTZjYTAxODUzYThlMDU5NzE3N2I1OTlBRjJmRjNCZiIsIm5iZiI6MTY0NjQyNTEyOSwiaXNzIjoiZGlkOmV0aHI6MHgxOjB4YzVBNzViYTg3ODc2YjIzNzI2NWIwNUY4NDgxNjBmNTRkMzZDYTA2NSJ9.PEYfZcVm1geDxGvK0n_oA9sgG17toLb9hg-lALGPQAb38cOyUMiDlGXsYfPdSUzh65i3KJM4q6I8KiL7eQ-L9AE",
            "sdJwt": "eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiU2VsZkRlc2NyaXB0aW9uIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InN0YXRlbWVudCI6eyJoYXNTZXJ2aWNlVGl0bGUiOiJGb3JtYXRpb25zIGluaXRpYWxlcyBlbiBGcmFuY2UiLCJoYXNTZXJ2aWNlRGVzY3JpcHRpb24iOiJDZSBqZXUgZGUgZG9ubsOpZXMgZXN0IHJlcHJpcyBkZSBsYSBwbGF0ZWZvcm1lIG9wZW5kYXRhIGRlIGwnT05JU0VQIiwiaGFzS2V5d29yZCI6WyJlZHVjYXRpb24iLCJ0cmFpbmluZyJdLCJoYXNEYXRhVHlwZSI6WyJEaXBsb21lcyIsIkNvbXBldGVuY2VzIiwiRm9ybWF0aW9uIiwiQmFkZ2UiXSwicHJvdmlkZWRCeSI6Ik1FTkpTIiwiaGFzUHJvdmlzaW9uVHlwZSI6IlB1YmxpY1Byb3Zpc2lvbmluZyIsImhhc1NlcnZpY2VNb2RlbCI6IkRhYVMiLCJoYXNXZWJBZGRyZXNzIjoiaHR0cHM6Ly9kYXRhLmVkdWNhdGlvbi5nb3V2LmZyL2V4cGxvcmUvZGF0YXNldC9mci1lbi1mb3JtYXRpb25zLWluaXRpYWxlcy1lbi1mcmFuY2UvaW5mb3JtYXRpb24iLCJ0eXBlU2VydmljZU9mZmVyaW5nIjoiRGF0YSIsImRpZE93bmVyIjoiZGlkOmV0aHI6MHhDODQzOWI0YTJhNmNhMDE4NTNhOGUwNTk3MTc3YjU5OUFGMmZGM0JmIiwibmFtZU93bmVyIjoiUGVycmluIEdSQU5ETkUiLCJjb21wYW55T3duZXIiOiJNRU5KUyIsImVtYWlsT3duZXIiOiJwZXJyaW4uZ3JhbmRuZUBlZHVjYXRpb24uZ291di5mciJ9fX0sInN1YiI6ImRpZDpldGhyOjB4Qzg0MzliNGEyYTZjYTAxODUzYThlMDU5NzE3N2I1OTlBRjJmRjNCZiIsIm5iZiI6MTY0NjQyNTEyOSwiaXNzIjoiZGlkOmV0aHI6MHgxOjB4YzVBNzViYTg3ODc2YjIzNzI2NWIwNUY4NDgxNjBmNTRkMzZDYTA2NSJ9.F1EcH-4k_RX_amcqQVWr4v9avM8FFDP2Nv5rpr6cs1rhyC6_y79clV9YWOS9ZjeOYo90Dvr3nAznG6pLWObXTAE",
            "userJwt": "eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRGFzZXNJZGVudGl0eSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJzdGF0ZW1lbnQiOnsidHlwZSI6IkNlcnRpZmljYXQgUGFydGljaXBhbnQgREFTRVMiLCJkaWRPd25lciI6ImRpZDpldGhyOjB4MkY5NjkxRGQ5RTNmREI2NERhZjJkQzM2QTNCOGQ0RjY3QTc2NDY1NCIsImdpdmVuTmFtZSI6IkpvaG4iLCJmYW1pbHlOYW1lIjoiRE9FIiwiZW1haWxPd25lciI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImNvbXBhbnlOYW1lIjoiTUVOSlMiLCJjb21wYW55QWRyZXNzIjoiMjEgcnVlIGRlcyBBcmNoaXZlcyA3NTAwMyBQYXJpcyIsImxlZ2FsUmVwcmVzZW50YXRpdmUiOiJGcmFuY2sgQkxVRSIsImVtYWlsTGVnYWxSZXByZXNlbnRhdGl2ZSI6ImZyYW5jay5ibHVlQGdtYWlsLmNvbSJ9fX0sInN1YiI6ImRpZDpldGhyOjB4MkY5NjkxRGQ5RTNmREI2NERhZjJkQzM2QTNCOGQ0RjY3QTc2NDY1NCIsIm5iZiI6MTY0NjQyNTEyOSwiaXNzIjoiZGlkOmV0aHI6MHgxOjB4YzVBNzViYTg3ODc2YjIzNzI2NWIwNUY4NDgxNjBmNTRkMzZDYTA2NSJ9.3wVpH9lrxS6lfjTBk9eljL63BDfnOZVXmsXeLljCzuHj3P_DPvXmL2rxybTWkRtQtVd_KELjUfLHV7ISx8l4SAA"
        }

        window.alert("Vous allez être redirigé vers le service Visions pour signer le contrat d'échange de données");
        console.log(data)
        dispatch(addAsyncVisions(data));
    }

    const logoSelect = (entity) => {
        switch (entity) {
            case 'MENJS':
                return ('/logos/menjs.jpg');
            case 'Inokufu':
                return ('prometheus.svg')
            case 'Mindmatcher':
                return ('/logos/prometheus.svg')
            case 'Visions':
                return ('/logos/prometheus.svg')
            default:
                return ('/logos/entityUnKnown.svg')
        }
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
                        <img src={logoSelect(service[0].entity)} alt="" />
                        <div>
                            <h1>{service[0].title}</h1>
                            <ul className="resourceTags flex row center wrap">
                                <li className="resourceType dataSet"></li>
                                <li className="isResourceOpen locked"></li>
                                <li>
                                    <ul className="tagList flex row">
                                        <li className="tag tagSkyBlue">API</li>
                                        <li className="tag tagLightBlue">Dataset</li>
                                        <li className="tag tagPurple">Students</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {service[0].personalData === "oui" &&
                            <ul className="ctas">
                                <li>
                                    {dashboard === "false" && <button className="button blackButton"
                                        onClick={() => { dispatch(modalReducer({ modal: 'welcome', source: 'use' })) }}
                                    >
                                        {t("Demander l'intégration")}
                                    </button>}
                                    {/* <Connection buttonName={buttonName} typeConnection={typeConnection} id={service[0].id} /> */}
                                    {dashboard === "true" && <button className="useService button blackButton export" onClick={handleIntegration}>Demander l'intégration</button>}
                                    <br />
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
