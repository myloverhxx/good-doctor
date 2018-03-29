import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { Article, Page, Button, Toast } from 'react-weui';
import API from '@/api/api';
import './doctorDetail.scss';

export default class DoctorDetail extends Component {
  
  state = {
    details: {},
    isFollow: 0,
    showToast: false,
  };

  // 初始化数据
  initData = async () => {
    let openId = this.props.match.params.id;
    try {
      let res = await API.getDoctorDetail(openId),
          userId = 'ojppT0htTwajX3rbJhPy6f6piEFQ',
          isFollow = res.isFollow;
          // isFollow = await API.handleFollowing(userId, openId);
      this.setState({
        details: Object.assign(res),
        isFollow: isFollow
      });
    }
    catch (err) {
      throw(err)
    }
  }

  handleFollow = async() => {
    let openId = this.props.match.params.id,
        userId = 'ojppT0htTwajX3rbJhPy6f6piEFQ',
        result = await API.handleFollowing(userId, openId);

    if (result == "true") {
      this.setState({
        isFollow: 1,
        showToast: true,
        toastTimer: null,
      });
      this.state.toastTimer = setTimeout(()=> {
        this.setState({showToast: false});
      }, 2000);
    } else {
      this.setState({isFollow: result})
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  }

  componentDidMount(){
    this.initData();
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentWillUnmount() {
    this.state.toastTimer && clearTimeout(this.state.toastTimer);
  }

  render() {
    const button = this.state.isFollow == 1 ? (
      <Button className="followBtn" onClick={this.handleFollow}>已关注</Button>
    ) : (
      <Button className="followBtn" type="primary" plain onClick={this.handleFollow}>加关注</Button>
    );
    return (
      <Page transition={true} infiniteLoader={true} ptr={false}>
        <Article className="doctorDetail">
            <h1>
                <img src={this.state.details.imageUrl} alt={this.state.details.name} />
            </h1>
            <p>{this.state.details.name}</p>
            <span>{this.state.details.title}</span>
            {button}
            <section>
                <p>科室：{this.state.details.deptName}</p>
                <p>电话：{this.state.details.phone}</p>
                <p>擅长：{this.state.details.aboutUser}</p>
            </section>
            <Toast icon="success-no-circle" show={this.state.showToast}>关注成功</Toast>
        </Article>
    </Page>
    )
  }
}

