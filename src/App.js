import { Route, Routes } from 'react-router-dom';


import './App.css';
import './style/main.css';
import './style/dashboard.css';

import NoMetamask from './page/NoMetamask'
import Catalog from './page/Catalog';
import VerifiableCredential from './page/VerifiableCredential';
import PageNotFound from './page/PageNotFound';
import Dashboard from './page/Dashboard';
import { useSelector } from 'react-redux';
import AddService from './page/AddService';




const App = () => {
  const auth = useSelector((state) => state.connection);

  return (
    <div className="App">
           <Routes>
          <Route path="/add" element={<AddService />} />
        {!auth.connected && auth.wallet && <Route path="/" element={<Catalog />} />}
        {!auth.connected && !auth.wallet && <Route path="/metamask" element={<NoMetamask />} />}
        {auth.connected && !auth.onboarded && <Route path="/creation" element={<VerifiableCredential />} />}
        {auth.connected && auth.onboarded && <Route path="/" element={<Dashboard />} />}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
