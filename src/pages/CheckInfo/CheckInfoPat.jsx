import React, { Component } from 'react';
import avatarURL from '@/assets/img/avatar.jpg';
import { 
  ButtonArea,
  Button,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  Form,
  FormCell,
  Input,
  Label,
  TextArea,
  Select
 } from 'react-weui';
import './checkinfo.scss';

export default class CheckInfoDoc extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    showToptips: false
  }

  render() {
    return (
      <div>
        <Form>
          <FormCell>
            <CellHeader>
              <Label>姓名：</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" placeholder="请填写您的姓名"/>
            </CellBody>
          </FormCell>
          <FormCell select selectPos="before">
            <CellHeader>
              <Select>
                <option value="1">+86</option>
                <option value="2">+80</option>
                <option value="3">+84</option>
                <option value="4">+87</option>
              </Select>
            </CellHeader>
            <CellBody>
              <Input type="tel" placeholder="请填写您的手机号码"/>
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>出生日期：</Label>
            </CellHeader>
            <CellBody>
              <Input type="date" defaultValue="" onChange={ e=> console.log(e.target.value)}/>
            </CellBody>
          </FormCell>
          
        </Form>

        <ButtonArea>
        <Button
            //button to display toptips
            onClick={ e=> {
                if(this.state.showToptips) return;
                this.setState({showToptips: !this.state.showToptips})
                window.setTimeout(e=> this.setState({showToptips: !this.state.showToptips}), 2000)
            }
        }>
            确认
        </Button>
        </ButtonArea>
      </div>
    )
  }
}
