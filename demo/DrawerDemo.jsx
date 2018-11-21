/**
 * Drawer Component Demo for uxcore
 * @author kewenlei
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import { Button, Form } from 'uxcore';
import Drawer from '../src';
// import '../style';

const {
  Constants,
  InputFormField: Input,
  DateFormField: Date,
  TextAreaFormField: TextArea,
  OtherFormField: Other,
  Validators,
} = Form;


class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicVisible: false,
      menuVisible: false,
      visible: false,
      mode: Constants.MODE.EDIT,
    };
    this.handleChangeMode = this.handleChangeMode.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.showDrawer = this.showDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  handleChangeMode() {
    const { mode } = this.state;
    this.setState({
      mode: mode === Constants.MODE.EDIT ? Constants.MODE.VIEW : Constants.MODE.EDIT,
    });
  }

  handleOk(state) {
    this.closeDrawer(state);
  }

  showDrawer(state) {
    this.setState({
      [state]: true,
    });
  }

  closeDrawer(state) {
    this.setState({
      [state]: false,
    });
  }

  render() {
    const {
      visible, mode, basicVisible, menuVisible,
    } = this.state;
    return (
      <div>
        <div className="basic-demo">
          <h2>左侧导航，无操作按钮，点击遮罩层可以关闭</h2>
          <Button onClick={this.showDrawer.bind(this, 'menuVisible')}> 基本信息 </Button>
        </div>
        <div className="basic-demo">
          <h2>展示基本信息，无操作按钮，点击遮罩层可以关闭</h2>
          <p>遮罩层分为 small(230px) ，normal(600px)两种size,也可自定义width</p>
          <Button onClick={this.showDrawer.bind(this, 'basicVisible')}> 基本信息 </Button>
        </div>
        <div className="basic-demo">
          <h2>可以放入操作，如表单的填写</h2>
          <Button onClick={this.showDrawer.bind(this, 'visible')}>操作</Button>
        </div>
        <Drawer
          visible={menuVisible}
          title="菜单导航"
          size="small"
          placement="left"
          closable={false}
          onCancel={this.closeDrawer.bind(this, 'menuVisible')}
        >
          <ul className="demo-menu">
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
          </ul>
        </Drawer>

        <Drawer
          visible={basicVisible}
          title="基本信息展示"
          size="normal"
          placement="right"
          closable={false}
          onCancel={this.closeDrawer.bind(this, 'basicVisible')}
        >
          <p>text text text texttext</p>
          <p>text text text texttext</p>
          <p>text text text texttext</p>
          <p>text text text texttext</p>
        </Drawer>
        <Drawer
          visible={visible}
          title="抽屉组件"
          size="normal"
          placement="right"
          maskClosable={false}
          onCancel={this.closeDrawer.bind(this, 'visible')}
        >
          <div className="demo-mode" style={{ height: '1000px' }}>
            <Form
              ref={(c) => { this.form = c; }}
              className="demo-basic-form"
              jsxvalues={{
                theme: 'Form 展示',
                location: 'Uxcore 站点',
                date: ['2015-10-15', '2015-11-15'],
                content: '这是一个 Form 的模式转换页面。',
              }}
              jsxmode={mode}
            >
              <Input jsxname="theme" jsxlabel="主题" required jsxplaceholder="请输入主题" />
              <Input
                jsxname="location"
                jsxlabel="地点"
                required
                jsxplaceholder="请输入地点"
                jsxrules={[
                  { validator: Validators.isNotEmpty, errMsg: '不能为空' },
                ]}
              />
              <Date jsxname="date" jsxlabel="时间" jsxtype="cascade" autoMatchWidth />
              <TextArea
                jsxname="content"
                jsxlabel="内容"
                required
                jsxrules={[
                  { validator: Validators.isNotEmpty, errMsg: '不能为空' },
                ]}
              />
              <Other>
                <div className="other-footer">
                  <p className="showNum">已选：33333</p>
                  <Button onClick={this.handleOk.bind(this, 'visible')} key="submit">提交</Button>
                  <Button type="secondary" onClick={this.handleChangeMode} key="changeMode">转换模式</Button>
                </div>
              </Other>
            </Form>
          </div>

        </Drawer>
      </div>
    );
  }
}

export default Demo;
