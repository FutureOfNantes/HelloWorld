import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../component/Header'
import Footer from '../component/Footer'
import Connection from '../component/Connection';
import inokufuLogo from '../assets/logos/inokufu.png'

const Service = () => {
    const buttonName="Demander l'intégration";
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    }

    return (
        <Fragment>
            <Header />
            <ul className="container breadcrumb flex row">
                <li className="back"><button onClick={handleBack}>retour</button></li>
                <li><button onClick={handleBack}>catalogue</button></li>
                <li className="current"><button onClick={handleBack}>Inokufu Competency V2</button></li>
            </ul>

            <main className="container">
                <section className="container servicePageTitle flex row">
                    <img src={inokufuLogo} alt="" />
                    <div>
                        <h1>Inokufu Competency V2</h1>
                        <a href="/" target="_blank">Documentation</a>
                    </div>
                    <ul className="ctas">
                        <li><Connection buttonName={buttonName}/></li>
                    </ul>
                </section>
                <section className="container servicePageContent">
                    <h1>Description</h1>
                    <p>The Competency API enables you to explore and connect skills, occupations or domains of knowledge from various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi, Formacode®, etc.</p>
                </section>
            </main>
            <Footer />
        </Fragment>

    )
}

export default Service;
