import { Fragment, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NoMetamask from './NoMetamask'
import Footer from '../component/Footer';
import Header from '../component/Header';
import Connection from '../component/Connection';
import { fetchAsyncUsers } from '../features/reducers/userSlice';
import { fetchAsyncServices } from '../features/reducers/serviceSlice';

const Main = ({ t, i18n }) => {
    const dispatch = useDispatch();
    const modalConnection = useSelector((state) => state.connection.modal);

    useEffect(() => {
        dispatch(fetchAsyncUsers());
        dispatch(fetchAsyncServices());
    }, [dispatch])


    return (
        <Fragment>
            <Header t={t} i18n={i18n} />
            { modalConnection === 'welcome' && <Connection t={t} /> }
            { modalConnection === 'noMetamask' && <NoMetamask t={t} /> }  
            <Outlet />
            <Footer t={t} />
        </Fragment>
    )
}

export default Main;