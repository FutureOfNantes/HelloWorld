import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './App.css';
import './style/main.css';

import NoMetamask from './page/NoMetamask'
import Catalog from './page/Catalog';
import VerifiableCredential from './page/VerifiableCredential';
import PageNotFound from './page/PageNotFound';
import Dashboard from './page/Dashboard';
import AddService from './component/Dashboard/DashboardAddService';
import Service from './page/Service';
import Mentions from './page/Mentions';
import Home from './page/Home';
import Main from './page/Main';
import DashboardCatalog from './component/Dashboard/DashboardCatalog';
import DashboardMyOffer from './component/Dashboard/DashboardMyOffer';
import DashboardSurvey from './component/Dashboard/DashboardSurvey';
import DashboardConfirm from './component/Dashboard/DashboardConfirm';

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <Routes>
        <Route element={<Main t={t} i18n={i18n} />} >
          <Route path="/community" element={() => { window.location.href = "https://prometheus-x.org" }} />
          <Route path="/mentions" element={<Mentions t={t} />} />
          <Route path="/" element={<Home t={t} />} />
          <Route path="/catalogue" element={<Catalog t={t} />} />
          <Route path="/service/:id" element={<Service dashboard="false" t={t} />} />
          <Route path="/metamask" element={<NoMetamask />} />
          <Route path="/vc" element={<VerifiableCredential t={t} />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard t={t} i18n={i18n} />} >
          <Route path="/dashboard/add" element={<AddService />} />
          <Route path="/dashboard/myoffer" element={<DashboardMyOffer t={t} />} />
          <Route path="/dashboard/catalog" element={<DashboardCatalog t={t} />} />
          <Route path="/dashboard/survey" element={<DashboardSurvey t={t} />} />
          <Route path="/dashboard/confirm" element={<DashboardConfirm />} />
          <Route path="/dashboard/service/:id" element={<Service dashboard="true" t={t} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;



