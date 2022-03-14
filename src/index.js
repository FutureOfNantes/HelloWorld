import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './features/store'
import { Provider } from 'react-redux';

import App from './App';
import reportWebVitals from './reportWebVitals';
// import reducers from './reducers';
// import { getSds } from './actions/sd';
// import { getUser } from './actions/user';


// const store = createStore(reducers, compose(applyMiddleware(thunk)));
// store.dispatch(getSds());
// store.dispatch(getUser());




ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
