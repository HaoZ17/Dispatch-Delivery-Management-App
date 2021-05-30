import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer"
import Text from "./Test"
import AccountInfo from './components/AccountInfo';
import Tracking from './components/Tracking';
import ProfileEdit from './components/ProfileEdit';
import { Row, Col } from 'antd';

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  // <Provider store={store}>
  //   {/* <App /> */}
  //   <Text/>
  // </Provider>,
  // <AccountInfo/>,
  // <Tracking/>,
  <Row className='index'>
    <Col span={8} className="left-side">
      <AccountInfo />
    </Col>
    <Col span={8} className="mid-side">
      <Tracking />
    </Col>
    <Col span={8} className="right-side">
      <ProfileEdit />
    </Col>
  </Row>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
