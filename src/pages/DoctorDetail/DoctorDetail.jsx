import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import avatarURL from '@/assets/img/avatar.jpg';
// import TouchOpacity from '@/components/TouchOpacity/TouchOpacity';
import { Article, Page } from 'react-weui';
import './doctorDetail.scss';

export default class DoctorDetail extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //     news:[] // 用来保存新闻数据
    // };
  }

  render() {
    return (
      <Page transition={true} infiniteLoader={true} ptr={false}>
        <Article>
            <h1>Page Demo</h1>
            <section>
                <h2 className="title">{this.props.match.params.id}</h2>
                <section>
                    <h3>H3 Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute</p>
                    <p>
                        <img src={avatarURL} alt="avatar" />
                        <img src={avatarURL} alt="avatar" />
                    </p>
                </section>
                <section>
                    <h3>H3 Heading</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
            </section>
        </Article>
    </Page>
    )
  }
}

