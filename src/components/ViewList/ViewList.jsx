import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import avatarURL from '@/assets/img/avatar.jpg';
import TouchOpacity from '@/components/TouchOpacity/TouchOpacity';
import './viewlist.scss';
import {
  Cells,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
} from 'react-weui';

export default class ViewList extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  openDetail = () => {
    console.log(this.props.data.name)
  }

  render(){
    return (
      <TouchOpacity clickCallBack={this.openDetail} body={
        <Cells>
            <Cell access>
                <CellHeader>
                  <img className="avatar" src={avatarURL} alt="头像"/>
                </CellHeader>
                <CellBody>
                    <div className="doctorCon">
                      <p><span>{this.props.data.name}</span><span>{this.props.data.title}</span></p>
                      <p>{this.props.data.dept}</p>
                      <p className="more">{this.props.data.goodAt}</p>
                    </div>
                </CellBody>
                <CellFooter>
                  <Link className="linkText" to={`/doctor-detail/${this.props.data.name}`}>查看详情</Link>
                </CellFooter>
            </Cell>
        </Cells>
      } />
    )
  }
}
