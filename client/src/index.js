import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter } from 'react-router-dom';
// import {} from 'react-redux'
import { Provider} from 'react-redux'
// import store from './redux/store';
import { store,persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store} > 
    <PersistGate loading={null} persistor={persistor}>   
         <BrowserRouter >  
            <App />
         </BrowserRouter>
      </PersistGate>
   </Provider> 
  
  
  
);


