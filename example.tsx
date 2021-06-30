import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import "./example.scss"
import Icon from "./lib/icons/icon"
import IconExample from "./lib/icons/icon.example"
import ButtonExample from "./lib/button.example"
import DialogExample from "./lib/dialog/dialog.example"
import layoutExample from "./lib/layout/layout.example"
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
            <Layout>
                {/* 左边侧边栏 */}
                <Aside className='site-aside'>
                    <h2>组件</h2>
                    <ul>
                        <li><Link to="/icon">Icon</Link></li>
                        <li><Link to="/button">Button</Link></li>
                        <li><Link to="/dialog">Dialog</Link></li>
                        <li><Link to="/layout">layout</Link></li>
                    </ul>
                </Aside>
                {/* 右边内容区域 */}
                <Content>
                    <Route path={"/icon"} component={IconExample} ></Route>
                    <Route path={"/button"} component={ButtonExample} ></Route>
                    <Route path={"/dialog"} component={DialogExample} ></Route>
                    <Route path={"/layout"} component={layoutExample} ></Route>
                </Content>
            </Layout>
            <Footer>
                <div>
                    <div>
                        <Icon icon="gitHubSvg" />
                    </div>
                    <div>
                        这是我的组件库
                    </div>
                </div>
            </Footer>
        </Layout>
    </Router>
), document.querySelector("#root"))