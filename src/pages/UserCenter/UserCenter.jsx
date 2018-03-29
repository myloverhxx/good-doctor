import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { is, fromJS } from 'immutable';
import { Page, Article, Cells, CellBody, Cell, CellFooter } from 'react-weui';
import API from '@/api/api';
import './../DoctorDetail/doctorDetail.scss';

export default class UserCenter extends Component {
  
  state = {
    details: {},
    type: this.props.match.params.type,
    openId: "ojppT0htTwajX3rbJhPy6f6piEFQ"
  };

  // 初始化数据
  initData = async () => {
    try {
      let res = await API.getUserDetail(this.state.openId);
      this.setState({
        details: Object.assign(res)
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

  render() {
    return (
      <Page transition={true} infiniteLoader={true} ptr={false}>
        <Article className="doctorDetail">
            <h1>
                <Link to={`/checkinfo-${this.state.type}/${this.state.openId}`}>
                  <img src={this.state.details.imageUrl} alt={this.state.details.name} />
                </Link>
            </h1>
            <p>{this.state.details.name}</p>
            <span>{this.state.details.title}</span>
            <Cells>
              <Cell access>
                  <CellBody>
                    去看病
                  </CellBody>
                  <CellFooter/>
              </Cell>
              <Cell access>
                  <CellBody>
                      我的医生
                  </CellBody>
                  <CellFooter/>
              </Cell>
              {
                this.state.type == "doc" ? 
                  (<Cell access>
                    <CellBody>
                        我的患者
                    </CellBody>
                    <CellFooter/>
                </Cell>):null
              }
          </Cells>
        </Article>
    </Page>
    )
  }
}

