import { useState } from 'react'
import serviceOfferingEmpty from '../../assets/img/serviceOfferingEmpty.svg'
import serviceOffering from '../../style/img/serviceOffering.svg'

const DashboardMyOffer = ({ setNewService }) => {
	const [ress, setRess] = useState(false)
	const testMyOffer = () => {
		setRess(!ress);
	}
	const handleRessource = () => {
		setNewService(0);
	}
	return (

		<section className="main flex column flex-1">
			<header>
				<h1><img src={serviceOffering} alt="" />Mon offre</h1>
				<button className="button pinkButton" onClick={testMyOffer}>Test une ressource</button>
			</header>

			{!ress && <div className="sectionContent empty flex column center">
				<p>
					<img src={serviceOfferingEmpty} alt="" /> <br /><br />
					Vous n'avez encore rien partagé à la communauté
				</p>
				<button className="button pinkButton" onClick={handleRessource}>Partager une ressource sur le portail</button>

			</div>}

			{ress && <div className="sectionContent flex row wrap container serviceOfferingList">
				<div className="serviceOffer">
					<div className="serviceTitle">
						<h2>Competency V2</h2>
						<div className="tags">
							<span className="tag blueTag">API</span>
							<span className="tag pinkTag">Compétences</span>
						</div>
						<div className="publishedOn">publié le 26/02/2022</div>
					</div>
					<div className="serviceContent">
						<p className="serviceDescription">
							The Competency API enables you to explore and connect skills, occupations or domains of knowledge from various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi, Formacode®, etc.
						</p>
						<ul className="actionButtons flex raw">
							<li className="flex-1">
								<button className="button whiteButton edit">
									Editer
								</button>
							</li>
							<li className="flex-1">
								<button className="button whiteButton publishState flex-1">
									Publié
								</button>
								<ul className="changeState">
									<li>
										<button className="button blackButton w100p">Publié</button>
									</li>
									<li>
										<button className="button whiteButton w100p">Dépublier</button>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="serviceOfferID">
						<button>sd : jhrgfhjdfbdgf</button>
					</div>
				</div>

				<div className="serviceOffer">
					<div className="serviceTitle">
						<h2>Competency V2</h2>
						<div className="tags">
							<span className="tag blueTag">API</span>
							<span className="tag pinkTag">Compétences</span>
						</div>
						<div className="publishedOn">publié le 26/02/2022</div>
					</div>
					<div className="serviceContent">
						<p className="serviceDescription">
							The Competency API enables you to explore and connect skills, occupations or domains of knowledge from various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi, Formacode®, etc.
						</p>
						<ul className="actionButtons flex raw">
							<li className="flex-1">
								<button className="button whiteButton edit">
									Editer
								</button>
							</li>
							<li className="flex-1">
								<button className="button whiteButton publishState flex-1">
									Publié
								</button>
								<ul className="changeState">
									<li>
										<button className="button blackButton w100p">Publié</button>
									</li>
									<li>
										<button className="button whiteButton w100p">Dépublier</button>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="serviceOfferID">
						<button>sd : jhrgfhjdfbdgf</button>
					</div>
				</div>
			</div>
			}
		</section>
	)
}

export default DashboardMyOffer;