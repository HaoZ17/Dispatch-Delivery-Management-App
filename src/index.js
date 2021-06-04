import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers/reducer"
import Test from "./Test";

import { BrowserRouter } from "react-router-dom";
import OrderF from './containers/InputOrderForm';
import OrderForm from './components/InputOrderFormOri'

const store= createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}
        {/* <Test/> */}
        {/* <InputOrderForm/> */}
        <OrderF/>
      </BrowserRouter>
     
  </Provider>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
