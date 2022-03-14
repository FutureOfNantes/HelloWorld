import { Route, Routes } from 'react-router-dom';

import './App.css';
import './style/main.css';
import './style/dashboard.css';

import NoMetamask from './page/NoMetamask'
import Catalog from './page/Catalog';
import VerifiableCredential from './page/VerifiableCredential';
import PageNotFound from './page/PageNotFound';
import Dashboard from './page/Dashboard';
import AddService from './page/AddService';
import Service from './page/Service';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Catalog />}/>
        <Route path="/service" element={<Service />}/>     
        <Route path="/metamask" element={<NoMetamask />} />
        <Route path="/vc" element={<VerifiableCredential />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route path="/add" element={<AddService />} /> */}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
