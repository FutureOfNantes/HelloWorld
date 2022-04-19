import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import serviceOfferingEmpty from '../../assets/img/serviceOfferingEmpty.svg'
import serviceOffering from '../../style/img/serviceOffering.svg'
import { fetchAsyncServices } from '../../features/reducers/serviceSlice';


const DashboardMyOffer = ({ t }) => {
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
				<h1><img src={serviceOffering} alt="" />{t('Mon offre')}</h1>
			</header>
			{!filteredServices.length && <div className="sectionContent empty flex column center">
				<p>
					<img src={serviceOfferingEmpty} alt="" /> <br /><br />
					{t("Vous n'avez encore rien partagé à la communauté")}
				</p>
				<button className="button pinkButton" onClick={handleRessource}>
					{t('Partager une ressource sur le portail')}
				</button>
				<p> </p>
			</div>}


			{!!filteredServices.length && <section className="container flex wrap catalogueList">
				{filteredServices.map((item) => (
					<div key={item.id} className="catalogueCell">
						<div className="title flex center">
							<h2>{item.title}</h2>
						</div>
						<div className="serviceContent">
							<p className="description">{item.description}</p>
							<br/>
							<ul className="actionButtons flex raw">
								<li className="flex-1">
									<button className="button whiteButton edit">
										Editer
									</button>
								</li>
								<li className="flex-1">
									<button className="done button actAsButton">
										Publié
									</button>
								</li>
							</ul>
							<br/>
						</div>
						<div key={item.id} className="serviceOfferID">
							<button>sd: {item.id}</button>
						</div>
					</div>))}
				<div className="catalogueCell addService">
					<button className="button blackButton connectWallet" onClick={handleRessource}>{t("Participer à l'offre")}</button>
				</div>
			</section>}
		</section>
	)
}


export default DashboardMyOffer;