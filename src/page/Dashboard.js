import entityUnkown from '../assets/entityUnKnown.svg'

import { useState } from 'react';
import DashboardCatalog from '../component/DashboardCatalog'
import DashboardMyOffer from '../component/DashboardMyOffer'
import DashboardService from '../component/DashboardService';
import { useDispatch, useSelector } from 'react-redux';
import { connectReducer } from '../features/reducers/slices';


const Dashboard = () => {
    const account = useSelector((state) => state.connection.account);
    const dispatch = useDispatch();
    const [myOffer, setMyOffer] = useState(true)
    const [serviceSelected, setServiceSelected] = useState(false)
    // const shortDID = (account.did.substring(1,22)+ '...'+account.did.substring(54))

    const handleDisconnect = async () => {
        dispatch(connectReducer(false))
    }

    const handleMyOffer = async () => {
        setMyOffer(true)
    }

    const handleCatalog = async () => {
        setMyOffer(false)
    }



    return (
        <div className="dashboard serviceOffering">
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
                            <span className="didNumber">{account.did}</span>
                        </li>
                        <li>
                            <button className="ellipsis"></button>
                            <ul>
                                <li>Mes informations</li>
                                <li>Déconnexion</li>
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
                        <li className="actAsButton" onClick={handleDisconnect}>
                            Déconnexion
                        </li>
                    </ul>
                </nav>
            </aside>
            {myOffer && <DashboardMyOffer/>}
            {!myOffer && !serviceSelected && <DashboardCatalog setServiceSelected={setServiceSelected}/>}
            {!myOffer && serviceSelected && <DashboardService setServiceSelected={setServiceSelected}/>}
        </div>
    )
}

export default Dashboard;