import React, { Component } from 'react';
import ViewList from '@/components/ViewList/ViewList';
import Filter from '@/components/Filter/Filter';
// import PropTypes from 'prop-types';
import {
  InfiniteLoader
} from 'react-weui';
import './doctorList.scss';

export default class DoctorList extends Component {

  state = {
    doctorsList: [
      {
        'name': '王二小1',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
      {
        'name': '王二小2',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
      {
        'name': '王二小3',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
      {
        'name': '王二小4',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
      {
        'name': '王二小5',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
      {
        'name': '王二小6',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
      {
        'name': '王二小7',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
      {
        'name': '王二小8',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
      {
        'name': '王二小9',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
      {
        'name': '王二小10',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
    ],
    moreList: [
      {
        'name': '王二小11',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
      {
        'name': '王二小12',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
      {
        'name': '王二小13',
        'title': '主治医师',
        'dept': '骨科',
        'goodAt': '擅长：颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。颈椎病、腰间盘突出、肩周炎。'
      },
    ]
  }
  render(){
    return (
      <div className="doctorList">
        <Filter />
        <InfiniteLoader
          onLoadMore={ (resolve, finish) => {
            setTimeout( ()=> {
              if(this.state.doctorsList.length > 12){
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