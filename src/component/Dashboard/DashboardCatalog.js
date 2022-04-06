import { useState } from 'react';
import { useSelector } from 'react-redux';
import searchIcon from '../../style/img/searchIcon.svg'
import CatalogList from '../CatalogList';
import SearchBar from '../SearchBar';

const DashboardCatalog = () => {
    const dashboard = true
    const [query, setQuery] = useState("");
	const [licence, setLicence] = useState("");
    const [openData, setOpenData] = useState("");
	const servicesList = useSelector((state) => state.servicesList.service);
	if (!servicesList.length) return <h3>Loading...</h3>;

    return (
        <section className="main sectionContent flex column flex-1">
            <header>
                <h1><img src={searchIcon} alt="" />Catalogue</h1>
            </header>
            <SearchBar setQuery={setQuery} setLicence={setLicence} setOpenData={setOpenData}/>
            <CatalogList dashboard={dashboard} query={query} licence={licence} openData={openData}/>
        </section>
    )
}

export default DashboardCatalog;