import inokufuLogo from '../../assets/logos/inokufu.png'


const DashboardService = ({ setServiceSelected }) => {
    const serviceHandler = () => {
		setServiceSelected(false)
	}
    
    return (
        <body className="dashboard servicePage">
		<section className="main flex column flex-1">	

			<ul className="container breadcrumb flex row">
				<li className="back" onClick={serviceHandler}><p>retour</p></li>
				<li><a href="dashboard-catalogue.html">Catalogue</a></li>
				<li className="current"><a href="/">Inokufu Competency V2</a></li>
			</ul>

			<main className="container sectionContent">

				<section className="container servicePageTitle flex row">
					<img src={inokufuLogo} alt=""/>
					<div>
						<h1>Inokufu Competency V2</h1>
						<a href="https://developer.inokufu.com/">Documentation</a>
					</div>
					<ul className="ctas">
						<li><a className="useService" href="Utiliser">Utiliser</a></li>
					</ul>
				</section>

				<section className="container servicePageContent">
					<h1>Description</h1>
					<p>The Competency API enables you to explore and connect skills, occupations or domains of knowledge from various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi, Formacode®, etc.</p>

					<div className="filesExamples">
						
						<ul className="flex">
							<li>Fichier d'exemple n°1</li>
							<li>Télécharger ce fichier d'exemple</li>
						</ul>
						{/* <pre className="prettyprint">
							{
							    "statusCode": 200,
							    "request": {
							        "keywords": "weld",
							        "lang": "en"
							    },
							    "response": [
							        {
							            "label": "welder",
							            "score": 1.0,
							            "source": "Inokufu DomComp index"
							        },
							        {
							            "label": "welding",
							            "source": "Inokufu DomComp synonym"
							        }
							    ]
							}
						</pre>		 */}
					</div>	
				</section>

			</main>
			
		</section>	
	</body>
    )
}

export default DashboardService;