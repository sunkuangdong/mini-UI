import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import "./example.scss"
import Icon from "./lib/icons/icon"
import IconExample from "./lib/icons/icon.example"
import ButtonExample from "./lib/button.example"
import DialogExample from "./lib/dialog/dialog.example"
import layoutExample from "./lib/layout/layout.example"

ReactDom.render((
    <Router>
        <div>
            <header>
                <div>
                    logo
                </div>
            </header>
            <div className="mini-ui-content">
                {/* 左边侧边栏 */}
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li><Link to="/icon">Icon</Link></li>
                        <li><Link to="/button">Button</Link></li>
                        <li><Link to="/dialog">Dialog</Link></li>
                        <li><Link to="/layout">layout</Link></li>
                    </ul>
                </aside>
                {/* 右边内容区域 */}
                <main>
                    <Route path={"/icon"} component={IconExample} ></Route>
                    <Route path={"/button"} component={ButtonExample} ></Route>
                    <Route path={"/dialog"} component={DialogExample} ></Route>
                    <Route path={"/layout"} component={layoutExample} ></Route>
                </main>
            </div>
            <footer>
                <div className="mini-ui-footer">
                    <div>
                        <Icon icon="gitHubSvg" />
                    </div>
                    <div>
                        这是我的组件库
                    </div>
                </div>
            </footer>
        </div>
    </Router>
), document.querySelector("#root"))