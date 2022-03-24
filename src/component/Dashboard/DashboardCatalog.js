import { useState } from 'react';
import { useSelector } from 'react-redux';
import searchIcon from '../../style/img/searchIcon.svg'
import CatalogList from '../CatalogList';
import SearchBar from '../SearchBar';

const DashboardCatalog = () => {
    const dashboard = true
    const [query, setQuery] = useState("");
	const [licence, setLicence] = useState("");
	const servicesList = useSelector((state) => state.servicesList.service);
	if (!servicesList.length) return <h3>Loading...</h3>;

    return (
        <section className="main sectionContent flex column flex-1">
            <header>
                <h1><img src={searchIcon} alt="" />Catalogue</h1>
            </header>
            <SearchBar setQuery={setQuery} setLicence={setLicence} />
            <CatalogList dashboard={dashboard} query={query} licence={licence} />
        </section>
    )
}

export default DashboardCatalog;