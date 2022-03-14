import { useState } from 'react';
import DashboardCatalog from '../component/DashboardCatalog'
import DashboardMyOffer from '../component/DashboardMyOffer'
import DashboardService from '../component/DashboardService';
import DashboardNav from '../component/DashboardNav';
import AddService from './AddService';


const Dashboard = () => {
    const [newService, setNewService] = useState(0)
    const [myOffer, setMyOffer] = useState(true)
    const [serviceSelected, setServiceSelected] = useState(false)

    return (
        <div className="dashboard serviceOffering">
            <DashboardNav myOffer={myOffer} setMyOffer={setMyOffer} serviceSelected={serviceSelected} setServiceSelected={setServiceSelected} setNewService={setNewService} />
            {myOffer && newService === 0 && <DashboardMyOffer setNewService={setNewService} />}
            {myOffer && newService !== 0 && <AddService newService={newService} setNewService={setNewService} />}           
            {!myOffer && !serviceSelected && <DashboardCatalog setServiceSelected={setServiceSelected}/>}
            {!myOffer && serviceSelected && <DashboardService setServiceSelected={setServiceSelected}/>}
        </div>
    )
}

export default Dashboard;