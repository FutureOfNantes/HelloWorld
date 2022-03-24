import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import entityUnkown from '../assets/entityUnKnown.svg'
import { fetchAsyncServices } from '../features/reducers/serviceSlice';
import Connection from './Connection';

const CatalogList = ({ dashboard, query, licence }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAsyncServices());
		
	}, [dispatch])
	const servicesList = useSelector((state) => state.servicesList.service);
	const navigate = useNavigate();
	const buttonName="Participer à l'offre de catalogue en ajoutant mon offre de services"
	const typeConnection="add"
	
	if (!servicesList.length) {
	return <h3>Loading...</h3>;
	}

    const handleService = (id) => {
		if (!dashboard) navigate(`/service/${id}`)
		else navigate(`/dashboard/service/${id}`)
	}

	const handleAdd = () => {
		navigate("/dashboard/add")
	}

	return (
        <section className="container flex wrap catalogueList">
			{servicesList.filter(item => (item.title.toLowerCase().includes(query) || 
			                            item.description.toLowerCase().includes(query)) &&
										item.licence.includes(licence)
										).map((item) => (
		<div key={item.id} className="catalogueCell" onClick={() => handleService(item.id)}>
			<div className="title flex center">
				<img src={entityUnkown} alt=""/>
				<div>
					<h2>{item.title}</h2>
					<ul className="flex">
						<li key="api"><span className="tag">API</span></li>
						<li key="lo"><span className="tag">Learning Objects</span></li>
						{/* <li key="li">{licencesList[0]}</li> */}
					</ul>
				</div>
			</div>
			<p className="description">
				{item.description}
			</p>
		</div>))}
		<div className="catalogueCell addService">
			{!dashboard && <Connection buttonName={buttonName} typeConnection={typeConnection}/>}
			{dashboard && <button className="button blackButton connectWallet" onClick={handleAdd}>{buttonName}</button>}
		</div>
	</section>
    )
}

export default CatalogList;