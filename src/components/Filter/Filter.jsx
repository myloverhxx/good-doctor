import React, { Component } from 'react';
import TouchOpacity from '@/components/TouchOpacity/TouchOpacity';
import './filter.scss';


export default class Filter extends Component {

  openDept = () => {
    console.log(12)
  }

  openTitle = () => {
    console.log(14)
  }

  render(){
    return (
      <div className="filterBar">
        <TouchOpacity clickCallBack={this.openDept} body={<p>科室</p>} />
        
        <TouchOpacity clickCallBack={this.openTitle} body={<p>职称</p>} />
      </div>
    )
  }
}
