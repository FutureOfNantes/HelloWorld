import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { modalReducer } from '../features/reducers/connectionSlice';

const CatalogList = ({ dashboard, query, licence, openData, type, t }) => {
	const servicesList = useSelector((state) => state.servicesList.service);
	const navigate = useNavigate();
	const dispatch = useDispatch();

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

	const logoSelect = (entity) => {
		switch(entity) {
			case 'MENJS':
				return ('/logos/menjs.jpg');
			case 'Inokufu':
				return ('/logos/prometheus.svg')
			case 'Mindmatcher':
				return ('/logos/prometheus.svg')
			case 'Visions':
				return ('/logos/prometheus.svg')
			default:
				return ('/logos/entityUnKnown.svg')
		}
	}

	return (
		<section className="container flex wrap catalogueList">
			{servicesList.filter(item => (item.title.toLowerCase().includes(query) ||
				item.description.toLowerCase().includes(query)) &&
				item.licence.includes(licence) &&
				item.personalData.includes(openData) &&
				item.type.includes(type)
			).map((item) => (
				<div key={item.id} className={(item.accessData === "true") ? "catalogueCell" : "catalogueCell onBuilding"}
				onClick={() => handleService(item.id)}>
					<div className="title flex center">
							<img src={logoSelect(item.entity)} alt="" />
						<div>
							<h2>{item.title}</h2>
							<ul className="flex">
								<li key="api"><span className="tag tagSkyBlue">{item.type}</span></li>
								<li key="Dataset"><span className="tag tagLightBlue">API</span></li>							
								<li key="Students"><span className="tag tagPurple">Students</span></li>
							</ul>
						</div>
					</div>
					<p className="description">
						{item.description}
					</p>
					{item.accessData === "false" &&
					<div style={{textAlign: "center"}}><br/><strong>En cours de création</strong></div>
			}
				</div>))}
			<div className="catalogueCell addService">
				{!dashboard && <button
					onClick={() => { dispatch(modalReducer({ modal: 'welcome', source: 'add' })) }}
				>
					{t("Participer à l'offre")}
				</button>}
				{dashboard && <button className="button blackButton connectWallet" onClick={handleAdd}>{t("Participer à l'offre")}</button>}
			</div>
		</section>
	)
}

export default CatalogList;