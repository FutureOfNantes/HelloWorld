import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import inokufuLogo from '../assets/logos/inokufu.png'


const Service = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    }

    return (
        <Fragment>
            <ul className="container breadcrumb flex row">
                <li className="back"><span onClick={handleBack}>retour</span></li>
                <li onClick={handleBack}>catalogue</li>
                <li className="current" onClick={handleBack}>Inokufu Competency V2</li>
            </ul>

            <main className="container">

                <section className="container servicePageTitle flex row">
                    <img src={inokufuLogo} alt="" />
                    <div>
                        <h1>Inokufu Competency V2</h1>
                        <a href="/" target="_blank">Documentation</a>
                    </div>
                    <ul className="ctas">
                        <li><a className="useService" href="Utiliser">Utiliser</a></li>
                    </ul>
                </section>

                <section className="container servicePageContent">
                    <h1>Description</h1>
                    <p>The Competency API enables you to explore and connect skills, occupations or domains of knowledge from various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi, Formacode®, etc.</p>
                </section>

            </main>
        </Fragment>

    )
}

export default Service;
