import React from "react";
import store from '../store';
import { getCookie } from '../utils';
import axios from 'axios';
import * as actions from '../actions'

import Header from "../components/Header";
import Footer from "../components/Footer";

export default class MainTemplate extends React.Component {


  componentWillMount() {
    //get user ID from Cookie.( ID's used: 1,2,3)
    const customerID = getCookie('customerID');
    if (customerID) (store.dispatch(actions.getLocationById(customerID)))
  }

  render() {
//{React.cloneElement({...this.props}.children, {...this.props})} If we need to clone current props to children
      return (
        <div>
          <Header {...this.props}/>
          <div className="main-wrapper">
            {React.cloneElement({...this.props}.children, {...this.props})}
          </div>
          <Footer {...this.props}/>
        </div>
      );
    }
}
