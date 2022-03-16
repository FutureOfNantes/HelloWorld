import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import inokufuLogo from '../assets/logos/inokufu.png';
import { fetchAsyncServices } from '../features/reducers/serviceSlice';
import Connection from './Connection';

const CatalogList = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAsyncServices());
	}, [])
	const servicesList = useSelector((state) => state.servicesList.service);
	const navigate = useNavigate();
	const buttonName="Participer à l'offre de catalogue en ajoutant mon offre de services"
	
	if (!servicesList.length) return <h3>Loading...</h3>;
	
    const serviceHandler = () => {
		navigate("/service")
	}
	
	return (
        <section className="container flex wrap catalogueList">
			{servicesList.map((item, index) => (
		<div key={index} className="catalogueCell" onClick={serviceHandler}>
			<div className="title flex center">
				<img src={inokufuLogo} alt=""/>
				<div>
					<h2>{item.title}</h2>
					<ul className="flex">
						<li key="api"><span className="tag">API</span></li>
						<li key="lo"><span className="tag">Learning Objects</span></li>
					</ul>
				</div>
			</div>
			<p className="description">
				{item.description}
			</p>
		</div>))}
		<div className="catalogueCell addService">
			<Connection buttonName={buttonName}/>
		</div>
	</section>
    )
}

export default CatalogList;