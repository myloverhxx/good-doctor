import React, { Component } from 'react';
import avatarURL from '@/assets/img/avatar.jpg';
import { 
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  MediaBox,
  MediaBoxHeader,
  MediaBoxBody,
  MediaBoxTitle,
  MediaBoxDescription,
  MediaBoxInfo,
  MediaBoxInfoMeta,
  Cells,
  Cell,
  CellHeader,
  CellBody,
  CellFooter
 } from 'react-weui';
// import './checkinfo.scss';

export default class CheckInfoDoc extends Component {

  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <Panel>
        <PanelHeader>
            金夫人的诊断
        </PanelHeader>
        <PanelBody>
          <MediaBox type="text">
            <MediaBoxTitle>胃痛</MediaBoxTitle>
            <MediaBoxDescription>
                胃痛腹泻
            </MediaBoxDescription>
            <MediaBoxInfo>
                <MediaBoxInfoMeta>hxx</MediaBoxInfoMeta>
                <MediaBoxInfoMeta>2016-8-8</MediaBoxInfoMeta>
                <MediaBoxInfoMeta extra>More</MediaBoxInfoMeta>
            </MediaBoxInfo>
          </MediaBox>
        </PanelBody>
      </Panel>
    )
  }
}
