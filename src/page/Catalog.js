import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncUsers } from '../features/reducers/userSlice';

import SearchBar from '../component/SearchBar'
import CatalogList from '../component/CatalogList'
import Header from '../component/Header'
import Footer from '../component/Footer'


const Catalog = () => {
	const dispatch = useDispatch();
	const dashboard = false
	const [query, setQuery] = useState("");
	const [licence, setLicence] = useState("");
	const [openData, setOpenData] = useState("");

	useEffect(() => {
		dispatch(fetchAsyncUsers());
	}, [dispatch])

	return (
		<div>
			<Header />
			<section className="container hero">
				<h1>Catalogue des données et services du<br />Data Space Education & Compétences</h1>
			</section>
			<section className="searchEngine container flex wrap row">
				<SearchBar setQuery={setQuery} setLicence={setLicence} setOpenData={setOpenData} />
			</section>
			<CatalogList dashboard={dashboard} query={query} licence={licence} openData={openData}/>
			<Footer />
		</div>
	)
}

export default Catalog;