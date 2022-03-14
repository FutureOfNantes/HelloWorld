import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import './style/main.css';
import './style/dashboard.css';

import NoMetamask from './page/NoMetamask'
import Catalog from './page/Catalog';
import Dashboard from './page/Dashboard';
import VerifiableCredential from './page/VerifiableCredential';
import PageNotFound from './page/PageNotFound';
import { useSelector } from 'react-redux';




const App = () => {
  const auth = useSelector((state) => state.connection);

  return (
    <div className="App">

      {/* <Router>
          <Routes>
          <Route path="/" element={<Catalog />} />
          <Route element={<PageNotFound />} /> */}

      {!auth.connected && !auth.wallet && <NoMetamask />}
        {!auth.connected && auth.wallet && <Catalog />}
        {auth.connected && !auth.onboarded && <VerifiableCredential />}
        {auth.connected && auth.onboarded && <Dashboard />}
      {/* </Routes>
        </Router> */}
    </div>
  );
}

export default App;
