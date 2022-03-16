import entityUnkown from '../../assets/entityUnKnown.svg'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DashboardNav = ({ myOffer, setMyOffer }) => {
    const account = useSelector((state) => state.connection.account);
    const did = useSelector((state) => state.connection.did);
    const navigate = useNavigate();
    const shortDID = (did.substring(1,22)+ '...'+did.substring(54))
    
    const handleDisconnect = async () => {
        navigate("/");
    }
    
    const handleMyOffer = async () => {
        setMyOffer(true)
    }
    
    const handleCatalog = async () => {
        setMyOffer(false)
    }

    const handleSurvey = () => {
        navigate("/survey")
    }

    return (
            <aside className="mainNav">
            <header>
                <ul className="contextNav flex row wrap center">
                    <li>
                        <button className="mainLogo">
                            <img src="favicon.svg" alt="" />
                        </button>
                    </li>
                    <li>
                        <button className="userLogo alert">
                            <img src={entityUnkown} alt="" />
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
                        <button className="ellipsis"></button>
                        <ul>
                            <li>Mes informations</li>
                            <li onClick={handleDisconnect}>Déconnexion</li>
                        </ul>
                    </li>
                    <li>
                        <button className="notifications"></button>
                    </li>
                </ul>
            </header>
            <nav className="appNav">
                <ul className="flex column">
                    {myOffer && <li className="actAsButton serviceOffering current"  onClick={handleMyOffer}>Mon offre</li>}
                    {!myOffer && <li className="actAsButton serviceOffering" onClick={handleMyOffer}>Mon offre</li>}
                    {myOffer && <li className="actAsButton catalogue" onClick={handleCatalog}>Catalogue</li>}
                    {!myOffer && <li className="actAsButton catalogue current" onClick={handleCatalog}>Catalogue</li>}
                    <li class="actAsButton feedback current" onClick={handleSurvey}>
							Donnez-nous votre avis !
						</li>
                    <li className="actAsButton" onClick={handleDisconnect}>
                        Déconnexion
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default DashboardNav;