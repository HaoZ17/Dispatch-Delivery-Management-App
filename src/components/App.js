import '../style/App.css';
import React, { createRef } from 'react'
import { bindActionCreators } from "redux";
import {actions} from '../actionCreaters/actionCreater'
import { connect } from "react-redux";

import TopBar from './TopBar';
import Main from './Main';

function App() {

  return (
    <div className="App">
      <TopBar></TopBar>
      <Main></Main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionController: bindActionCreators({ ...actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);