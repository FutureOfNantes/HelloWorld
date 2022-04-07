import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './App.css';
import './style/main.css';
import './style/dashboard.css';

import NoMetamask from './page/NoMetamask'
import Catalog from './page/Catalog';
import VerifiableCredential from './page/VerifiableCredential';
import PageNotFound from './page/PageNotFound';
import Dashboard from './page/Dashboard';
import AddService from './component/Dashboard/DashboardAddService';
import Service from './page/Service';
import Mentions from './page/Mentions';
import DashboardCatalog from './component/Dashboard/DashboardCatalog';
import DashboardMyOffer from './component/Dashboard/DashboardMyOffer';
import DashboardSurvey from './component/Dashboard/DashboardSurvey';
import DashboardConfirm from './component/Dashboard/DashboardConfirm';
import DashboardService from './component/Dashboard/DashboardService';

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Catalog t={t} i18n={i18n} />} />
        <Route path="/service/:id" element={<Service dashboard='false' />} />
        <Route path="/metamask" element={<NoMetamask />} />
        <Route path="/vc" element={<VerifiableCredential />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/add" element={<AddService />} />
          <Route path="/dashboard/myoffer" element={<DashboardMyOffer />} />
          <Route path="/dashboard/catalog" element={<DashboardCatalog />} />
          <Route path="/dashboard/survey" element={<DashboardSurvey />} />
          <Route path="/dashboard/confirm" element={<DashboardConfirm />} />
          <Route path="/dashboard/service/:id" element={<DashboardService dashboard='true' />} />
        </Route>
        <Route path="/community" element={() => {window.location.href="https://prometheus-x.org"}} />       
        <Route path="/mentions" element={<Mentions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
