import inokufuLogo from '../assets/logos/inokufu.png'

const CatalogList = ({ setServiceSelected }) => {
    const serviceHandler = () => {
		setServiceSelected(true)
	}
	
	return (
        <section className="container flex wrap catalogueList">
		<div className="catalogueCell" onClick={serviceHandler}>
			<div className="title flex center">
				<img src={inokufuLogo} alt=""/>
				<div>
					<h2>Inokufu Competency V2</h2>
					<ul className="flex">
						<li><span className="tag">API</span></li>
						<li><span className="tag">Learning Objects</span></li>
					</ul>
				</div>
			</div>
			<p className="description">
				The Competency API enables you to explore and connect skills, occupations or domains of knowledge from
				various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi,
				Formacode®, etc.
			</p>
		</div>
		<div className="catalogueCell">
			<div className="title flex center">
				<img src={inokufuLogo} alt=""/>
				<div>
					<h2>Inokufu Competency V2</h2>
					<ul className="flex">
						<li><span className="tag">API</span></li>
						<li><span className="tag">Learning Objects</span></li>
					</ul>
				</div>
			</div>
			<p className="description">
				The Competency API enables you to explore and connect skills, occupations or domains of knowledge from
				various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi,
				Formacode®, etc.
			</p>
		</div>
		<div className="catalogueCell">
			<div className="title flex center">
				<img src={inokufuLogo} alt=""/>
				<div>
					<h2>Inokufu Competency V2</h2>
					<ul className="flex">
						<li><span className="tag">API</span></li>
						<li><span className="tag">Learning Objects</span></li>
					</ul>
				</div>
			</div>
			<p className="description">
				The Competency API enables you to explore and connect skills, occupations or domains of knowledge from
				various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi,
				Formacode®, etc.
			</p>
		</div>
		<div className="catalogueCell addService">
			<button>
				Participer au catalogue en ajoutant mon offre de services
			</button>
		</div>
	</section>
    )
}

export default CatalogList;