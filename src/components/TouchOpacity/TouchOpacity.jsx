import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { is, fromJS } from 'immutable';
/**
 * 点击状态组件
 */
export default class TouchOpacity extends Component{
  static propTypes = {
    clickCallBack: PropTypes.func,
    body: PropTypes.any,
    className: PropTypes.string,
  }
  
  handleTouchStart = () => {
    this.refs.bar.style.opacity = '0.3';
  }

  handleTouchEnd = () => {
    this.refs.bar.style.opacity = '1';
    this.props.clickCallBack();
  }

  shouldComponentUpdate(nextProps, nextState){
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
  
  render(){
    return (
      <div ref="bar" className={this.props.className} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd}>
        {this.props.body}
      </div>
    );
  }
}