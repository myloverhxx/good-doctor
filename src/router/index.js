import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

import DoctorList from "@/pages/DoctorList/DoctorList";
const DoctorDetail = asyncComponent(() => import("@/pages/DoctorDetail/DoctorDetail"));
const CheckInfoDoc = asyncComponent(() => import("@/pages/CheckInfo/CheckInfoDoc"));
const CheckInfoPat = asyncComponent(() => import("@/pages/CheckInfo/CheckInfoPat"));
const RecordsDoc = asyncComponent(() => import("@/pages/Records/RecordsDoc"));
const MyFollow = asyncComponent(() => import("@/pages/MyFollow/MyFollow"));
const UserCenter = asyncComponent(() => import("@/pages/UserCenter/UserCenter"));
const SymptomForm = asyncComponent(() => import("@/pages/SymptomForm/SymptomForm"));

export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={DoctorList} />
          <Route path="/doctor-detail/:id" component={DoctorDetail} />
          <Route path="/checkinfo-doc/:id" component={CheckInfoDoc} />
          <Route path="/checkinfo-pat/:id" component={CheckInfoPat} />
          <Route path="/records-doc" component={RecordsDoc} />
          <Route path="/my-follow" component={MyFollow} />
          <Route path="/user-center/:type" component={UserCenter} />
          <Route path="/form" component={SymptomForm} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
