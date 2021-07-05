import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, NavLink, Route } from "react-router-dom";
import "./example.scss"
import Icon from "./lib/icons/icon"
import IconDemo from "./lib/icons/icon.demo"
import ButtonExample from "./lib/button/button.example"
import DialogDemo from "./lib/dialog/dialog.demo"
import layoutExample from "./lib/layout/layout.example"
import FormExample1 from "./lib/form/form.example1"
import { Layout, Header, Aside, Content, Footer } from "./lib/layout/layout";

const logo = require('./mini.png')

ReactDom.render((
    <Router>
        <Layout className="site-page">
            <Header className='site-header'>
                <div className='logo'>
                    <img src={logo} width='48' height='48' alt="" />
                    <span className='logo-text'>
                        MINI
                    </span>
                </div>
            </Header>
            <Layout className="site-layout">
                {/* 左边侧边栏 */}
                <Aside className='site-aside'>
                    <h2>组件</h2>
                    <ul>
                        <li><NavLink to="/icon">Icon</NavLink></li>
                        <li><NavLink to="/button">Button</NavLink></li>
                        <li><NavLink to="/dialog">Dialog</NavLink></li>
                        <li><NavLink to="/layout">layout</NavLink></li>
                        <li><NavLink to="/form">Form</NavLink></li>
                    </ul>
                </Aside>
                {/* 右边内容区域 */}
                <Content className="site-content">
                    <Route path={"/icon"} component={IconDemo} ></Route>
                    <Route path={"/button"} component={ButtonExample} ></Route>
                    <Route path={"/dialog"} component={DialogDemo} ></Route>
                    <Route path={"/layout"} component={layoutExample} ></Route>
                    <Route path={"/form"} component={FormExample1} ></Route>
                </Content>
            </Layout>
            <Footer className="site-footer">
                <Icon icon="gitHubSvg" />
                <span>这是孙匡东的组件库</span>
            </Footer>
        </Layout>
    </Router>
), document.querySelector("#root"))