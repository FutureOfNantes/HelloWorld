import { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Footer from '../component/Footer';
import Header from '../component/Header';
import Connection from '../component/Connection';
import { fetchAsyncUsers } from '../features/reducers/userSlice';
import { fetchAsyncServices } from '../features/reducers/serviceSlice';

const Main = ({ t, i18n }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncUsers());
        dispatch(fetchAsyncServices());
      }, [dispatch])

      const [modalConnection, setModalConnection] = useState(false);


    return (
        <Fragment>
            <Header t={t} i18n={i18n} setModalConnection={setModalConnection} />
            {modalConnection && <Connection t={t} setModalConnection={setModalConnection} />}
            <Outlet />
            <Footer t={t} /> 
        </Fragment>

    )
}

export default Main;