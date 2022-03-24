import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import serviceOfferingEmpty from '../../assets/img/serviceOfferingEmpty.svg'
import serviceOffering from '../../style/img/serviceOffering.svg'
import { fetchAsyncServices } from '../../features/reducers/serviceSlice';


const DashboardMyOffer = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAsyncServices());
	}, [dispatch])
	const servicesList = useSelector((state) => state.servicesList.service);
	const did = useSelector((state) => state.connection.did);
	// if (!servicesList.length) return <h3>Loading...</h3>;
	if (!did.length) return <h3>Loading...</h3>;

	const handleRessource = () => {
		navigate("/dashboard/add")
	}
	const filteredServices = servicesList.filter(service => service.authorDid === did)

	return (
		<section className="main flex column flex-1">
			<header>
				<h1><img src={serviceOffering} alt="" />Mon offre</h1>
			</header>
			{!filteredServices.length && <div className="sectionContent empty flex column center">
				<p>
					<img src={serviceOfferingEmpty} alt="" /> <br /><br />
					Vous n'avez encore rien partagé à la communauté
				</p>
				<button className="button pinkButton" onClick={handleRessource}>Partager une ressource sur le portail</button>
				<p> </p>
			</div>}


			{!!filteredServices.length && <div className="sectionContent flex row wrap container serviceOfferingList">
				{filteredServices.map((item) => (
					<div key={item.id} className="serviceOffer">
						<div className="serviceTitle">
							<h2>{item.title}</h2>
						</div>
						<div className="serviceContent">
							<p className="serviceDescription">{item.description}</p>
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
						<div key={item.id} className="serviceOfferID">
							<button>sd: {item.id}</button>
						</div>
					</div> ))} 
		</div> }
		</section>
	)
}


export default DashboardMyOffer;