import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
// import asyncComponent from '@/utils/asyncComponent';

import DoctorList from "@/pages/DoctorList/DoctorList";
import DoctorDetail from "@/pages/DoctorDetail/DoctorDetail";
import CheckInfoDoc from "@/pages/CheckInfo/CheckInfoDoc";
import CheckInfoPat from "@/pages/CheckInfo/CheckInfoPat";
import RecordsDoc from "@/pages/Records/RecordsDoc";
// import RecordsPat from "@/pages/Records/RecordsPat";
// const record = asyncComponent(() => import("@/pages/record/record"));
// const helpcenter = asyncComponent(() => import("@/pages/helpcenter/helpcenter"));
// const production = asyncComponent(() => import("@/pages/production/production"));
// const balance = asyncComponent(() => import("@/pages/balance/balance"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={DoctorList} />
          <Route path="/doctor-detail/:id" component={DoctorDetail} />
          <Route path="/checkinfo-doc" component={CheckInfoDoc} />
          <Route path="/checkinfo-pat" component={CheckInfoPat} />
          <Route path="/records-doc" component={RecordsDoc} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
