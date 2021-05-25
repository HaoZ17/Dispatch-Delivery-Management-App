import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers/reducer"
import Text from "./Test"
import Form2 from "./components/receiverOrderForm";
import OrderF from './components/receiverOrderForm';
import Form1 from "./components/receiverOrderForm";

import { BrowserRouter } from "react-router-dom";

const store= createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
        {/* <Text/> */}
      </BrowserRouter>
     
  </Provider>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
