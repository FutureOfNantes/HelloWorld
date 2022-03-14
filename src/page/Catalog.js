import { useEffect, useState } from 'react';

import SearchBar from '../component/SearchBar'
import CatalogList from '../component/CatalogList'
import Header from '../component/Header'

import Footer from '../component/Footer'
import Service from './Service'

import { useDispatch } from 'react-redux';
import { fetchAsyncUsers } from '../features/reducers/slices';

const Catalog = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncUsers());

	}, [dispatch])

	const [serviceSelected, setServiceSelected] = useState(false)

	return (
		<div>
			<Header />
			{!serviceSelected && <section className="container hero">
				<h1>Catalogue des données et services du<br />Data Space Education & Competences</h1>
			</section>}
			{!serviceSelected && <section className="searchEngine container flex wrap row">
				<SearchBar />
			</section>}
			{!serviceSelected && <CatalogList setServiceSelected={setServiceSelected}/>}
			{serviceSelected && <Service setServiceSelected={setServiceSelected}/>}
			<Footer />
		</div>
	)
}

export default Catalog;