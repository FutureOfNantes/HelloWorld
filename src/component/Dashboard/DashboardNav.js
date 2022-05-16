import faviconDL from '../../style/img/favicon.svg'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DashboardNav = ({ t, i18n }) => {
    const [classNav, setclassNav] = useState({
        classMyOffer: "actAsButton serviceOffering current",
        classCatalog: "actAsButton catalogue",
        classSurvey: "actAsButton feedback",
    })
    const account = useSelector((state) => state.connection.account);
    const did = useSelector((state) => state.connection.did);
    const navigate = useNavigate();
    const shortDID = (did.substring(1, 22) + '...' + did.substring(54))
    const entity = account.companyName

    const logoSelect = (entity) => {
		switch(entity) {
			// case 'MENJS':
			// 	return ('/logos/menjs.jpg');
			// case 'Inokufu':
			// 	return ('/logos/prometheus.svg')
			// case 'Mindmatcher':
			// 	return ('/logos/prometheus.svg')
			// case 'Visions':
			// 	return ('/logos/prometheus.svg')
			default:
				return ('/logos/entityUnKnown.svg')
		}
	}

    const handleDisconnect = async () => {
        navigate("/");
    }

    const handleProfile = () => {
        setclassNav({
            classMyOffer: "actAsButton serviceOffering",
            classCatalog: "actAsButton catalogue",
            classSurvey: "actAsButton feedback",
        })
        navigate("/dashboard/profile");
    }

    const handleVc = () => {
        navigate("/dashboard/vc");
    }

    const handleMyOffer = async () => {
        navigate("/dashboard/myoffer")
        setclassNav({
            classMyOffer: "actAsButton serviceOffering current",
            classCatalog: "actAsButton catalogue",
            classSurvey: "actAsButton feedback",
        })
    }

    const handleCatalog = async () => {
        navigate("/dashboard/catalog")
        setclassNav({
            classMyOffer: "actAsButton serviceOffering",
            classCatalog: "actAsButton catalogue current",
            classSurvey: "actAsButton feedback",
        })
    }

    const handleSurvey = () => {
        navigate("/dashboard/survey")
        setclassNav({
            classMyOffer: "actAsButton serviceOffering",
            classCatalog: "actAsButton catalogue",
            classSurvey: "actAsButton feedback current",
        })
    }

    return (
        <aside className="mainNav">
            <header>
                <ul className="contextNav flex row wrap center">
                    <li>
                        <button className="mainLogo">
                            <img src={faviconDL} alt="" />
                        </button>
                    </li>
                    <li>
                        <button className="userLogo alert">
                            {/* <img src={entityUnkown} alt="" /> */}
                            <img src={logoSelect(entity)} alt="" />
                        </button>
                    </li>
                    <li>
                        Dashboard
                    </li>
                </ul>
                <ul className="actAsButton userService flex row center">
                    <li className="userInformations">
                        <strong>{account.givenName} {account.familyName}</strong><br />
                        <span className="didNumber">{shortDID}</span>
                    </li>
                    <li>
                        <button className="ellipsis" onClick={(account.givenName) ? handleProfile : handleVc}></button>
                    </li>
                    <li>
                        <button className="notifications"></button>
                    </li>
                </ul>
            </header>
            <nav className="appNav">
                <ul className="flex column">
                    <li className={classNav.classMyOffer} onClick={handleMyOffer}>{t('Mon offre')}</li>
                    <li className={classNav.classCatalog} onClick={handleCatalog}>{t('Catalogue')}</li>
                    <li className={classNav.classSurvey} onClick={handleSurvey}>
                        {t('Donnez-nous votre avis')}
                    </li>
                    <li className="actAsButton" onClick={handleDisconnect}>
                        {t('Déconnexion')}
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default DashboardNav;