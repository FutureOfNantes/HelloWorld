import serviceOfferingEmpty from '../assets/img/serviceOfferingEmpty.svg'
import serviceOffering from '../style/img/serviceOffering.svg'

const DashboardMyOffer = ({ setNewService }) => {
	const handleRessource = () => {
		setNewService(1);
	}
    return (
		<section className="main flex column flex-1">	
			<header>
				<h1><img src={serviceOffering} alt=""/>Mon offre</h1>
			</header>
			<div className="sectionContent empty flex column center">
				<p>
					<img src={serviceOfferingEmpty} alt=""/> <br/><br/>
					Vous n'avez encore rien partagé à la communauté
				</p>
				<button className="button pinkButton" onClick={handleRessource}>Partager une ressource sur le portail</button>
			</div>
		</section>	
    )
}

export default DashboardMyOffer;