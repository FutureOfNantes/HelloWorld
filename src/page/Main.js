import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Footer from '../component/Footer';
import Header from '../component/Header';
import { fetchAsyncUsers } from '../features/reducers/userSlice';
import { fetchAsyncServices } from '../features/reducers/serviceSlice';

const Main = ({ t, i18n }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncUsers());
        dispatch(fetchAsyncServices());
      }, [dispatch])

    return (
        <Fragment>
            <Header t={t} i18n={i18n} />
            <Outlet />
            <Footer t={t} /> 
        </Fragment>

    )
}

export default Main;