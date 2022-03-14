import inokufuLogo from '../assets/logos/inokufu.png'


const Service = ({ setServiceSelected }) => {
     
    return (
        <div>
        <ul className="container breadcrumb flex row">
        <li className="back"><a href="/">retour</a></li>
        <li><a href="/">catalogue</a></li>
        <li className="current"><a href="/">Inokufu Competency V2</a></li>
    </ul>

    <main className="container">

        <section className="container servicePageTitle flex row">
            <img src={inokufuLogo} alt=""/>
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
    </div>

    )
}

export default Service;
