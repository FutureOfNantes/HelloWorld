import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncUsers } from '../features/reducers/userSlice';

import SearchBar from '../component/SearchBar'
import CatalogList from '../component/CatalogList'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Catalog = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncUsers());
	}, [dispatch])

	return (
		<div>
			<Header />
			<section className="container hero">
				<h1>Catalogue des données et services du<br />Data Space Education & Competences</h1>
			</section>
			<section className="searchEngine container flex wrap row">
				<SearchBar />
			</section>
			<CatalogList />
			<Footer />
		</div>
	)
}

export default Catalog;