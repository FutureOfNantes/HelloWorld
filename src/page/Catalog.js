import { useState } from 'react';


import SearchBar from '../component/SearchBar'
import CatalogList from '../component/CatalogList'

const Catalog = ({ t, i18n }) => {

	const dashboard = false
	const [query, setQuery] = useState("");
	const [licence, setLicence] = useState("");
	const [openData, setOpenData] = useState("");

	return (
		<div>
			<section className="container hero">
				<h1>{t('Catalogue des données et services du')}<br />{t('Data Space Education & Compétences')}</h1>
			</section>
			<section className="searchEngine container flex wrap row">
				<SearchBar setQuery={setQuery} setLicence={setLicence} setOpenData={setOpenData} t={t} />
			</section>
			<CatalogList dashboard={dashboard} query={query} licence={licence} openData={openData} t={t} />
		</div>
	)
}

export default Catalog;