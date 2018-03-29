import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
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
  Select,
  Toast
 } from 'react-weui';
import API from '@/api/api';
import './checkinfo.scss';

export default class CheckInfoDoc extends Component {

  constructor(props) {
    super(props);

    this.state = {
      openId: '',
      name: '',
      phone: '',
      birth: '',
      showToast: false,
      toastTimer: null,
      toastText: "提交成功"
    }

    this.changeBirth = this.changeBirth.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changePhone = this.changePhone.bind(this);
  }

  initData = async () => {
    let userId = this.props.match.params.id;
    try {
      let res = await API.getUserDetail(userId);

      this.setState({
        openId: res.openId,
        name: res.name,
        phone: res.phone,
        birth: res.birth
      });
    }
    catch (err) {
      throw(err)
    }
  }

  changeName(e) {
    this.setState({name: e.target.value});
  }

  changePhone(e) {
    this.setState({phone: e.target.value});
  }

  changeBirth(e) {
    this.setState({birth: e.target.value});
  }

  handleSubmit = async() => {
    let data = {
      openId: this.state.openId,
      name: this.state.name,
      phone: this.state.phone,
      birth: this.state.birth
    }
    let res = await API.updateInfo(data);

    if (res) {
      this.setState({
        showToast: true,
        toastText: "提交成功"
      });
    } else {
      this.setState({
        showToast: true,
        toastText: "提交失败"
      });
    }

    this.state.toastTimer = setTimeout(()=> {
      this.setState({showToast: false});
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  }

  componentDidMount(){
    this.initData();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.state.toastTimer && clearTimeout(this.state.toastTimer);
  }

  render() {
    return (
      <div className="checkinfo">
        <Form>
          <FormCell>
            <CellHeader>
              <Label>姓名：</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" placeholder="请填写您的姓名" value={this.state.name} onChange={this.changeName}/>
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
              <Input type="tel" placeholder="请填写您的手机号码" value={this.state.phone} onChange={this.changePhone}/>
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>出生日期：</Label>
            </CellHeader>
            <CellBody>
              <Input type="date" defaultValue={this.state.birth} onChange={this.changeBirth}/>
            </CellBody>
          </FormCell>
          <Toast icon="success-no-circle" show={this.state.showToast}>{this.state.toastText}</Toast>
        </Form>

        <ButtonArea>
          <Button onClick={this.handleSubmit}>确认</Button>
        </ButtonArea>
      </div>
    )
  }
}
