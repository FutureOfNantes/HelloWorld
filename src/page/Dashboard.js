import { useEffect } from 'react';
import DashboardNav from '../component/Dashboard/DashboardNav';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Dashboard = ({ t, i18n }) => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.connection);

    useEffect(() => {
        if (!auth.connected)
            navigate("/");
    }, [auth.connected, navigate])


    return (
        <div className="dashboard serviceOffering">
            <DashboardNav t={t} i18n={i18n} />
        <Outlet />
        </div>
    )
}

export default Dashboard;