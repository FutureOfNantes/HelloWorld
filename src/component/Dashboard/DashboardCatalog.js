import { useSelector } from 'react-redux';
import inokufuLogo from '../../assets/logos/inokufu.png'
import searchIcon from '../../style/img/searchIcon.svg'
import CatalogList from '../CatalogList';
import SearchBar from '../SearchBar';

const DashboardCatalog = ( {setServiceSelected}) => {
	const servicesList = useSelector((state) => state.servicesList.service);
	if (!servicesList.length) return <h3>Loading...</h3>;



    const serviceHandler = () => {
		setServiceSelected(true)
	}

    return (
        <section className="main sectionContent flex column flex-1">
            <header>
                <h1><img src={searchIcon} alt="" />Catalogue</h1>
            </header>
            <SearchBar />
            <CatalogList />
        </section>
    )
}

export default DashboardCatalog;