import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { InfiniteLoader } from 'react-weui';
import ViewList from '@/components/ViewList/ViewList';
import Filter from '@/components/Filter/Filter';
import API from '@/api/api';
import './doctorList.scss';

export default class DoctorList extends Component {

  state = {
    doctorsList: [],
    pageNum: 1,
    deptName: '',
    title: '',
    total: 0
  }

  // 初始化数据
  initData = async () => {
    let data = {
      pageNum: this.state.pageNum,
      deptName: this.state.deptName,
      title: this.state.title
    }
    
    try {
      let res = await API.getDoctorList(data);
      this.setState({
        doctorsList: res.records,
        total: res.total
      });
    }
    catch (err) {
      throw(err)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  }

  componentDidMount(){
    this.initData();
  }

  render(){
    return (
      <div className="doctorList">
       <Filter />
        <InfiniteLoader
          onLoadMore={ (resolve, finish) => {
            setTimeout( ()=> {
              if(this.state.doctorsList.length > this.state.total){
                  finish();
              }else{
                this.setState({
                  doctorsList: this.state.doctorsList.concat(this.state.moreList)
                }, ()=> resolve());
              }
            }, 1000)
          }}
        >
          <ul>
            {
              this.state.doctorsList.map((item, index) => {
                return <ViewList key={index} data={item} />
              })
            }
          </ul>
        </InfiniteLoader>
      </div>
      
    )
  }
}