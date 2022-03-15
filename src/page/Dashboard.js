import { useEffect, useState } from 'react';
import DashboardCatalog from '../component/Dashboard/DashboardCatalog'
import DashboardMyOffer from '../component/Dashboard/DashboardMyOffer'
import DashboardService from '../component/Dashboard/DashboardService';
import DashboardNav from '../component/Dashboard/DashboardNav';
import AddService from './AddService';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.connection);
    const [newService, setNewService] = useState(-1);
    const [myOffer, setMyOffer] = useState(true)
    const [serviceSelected, setServiceSelected] = useState(false)

    useEffect(() => {
        if (!auth.connected)
            navigate("/");
    }, [])


    return (
        <div className="dashboard serviceOffering">
            <DashboardNav myOffer={myOffer} setMyOffer={setMyOffer} serviceSelected={serviceSelected} setServiceSelected={setServiceSelected} setNewService={setNewService} />
            {myOffer && newService < 0  && <DashboardMyOffer setNewService={setNewService} />}
            {myOffer && newService >= 0 && <AddService newService={newService} setNewService={setNewService} />}
            {!myOffer && !serviceSelected && <DashboardCatalog setServiceSelected={setServiceSelected} />}
            {!myOffer && serviceSelected && <DashboardService setServiceSelected={setServiceSelected} />}
        </div>
    )
}

export default Dashboard;