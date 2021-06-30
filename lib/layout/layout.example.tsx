import React from "react";
import Aside from "./aside";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";
import "./layout.example.scss"
const layoutExample: React.FunctionComponent = () => {
    return (
        <div>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{ height: 300, width: 500 }} className="layout-out">
                    <Header className="header">header</Header>
                    <Content className="content">Content</Content>
                    <Footer className="footer">Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第二个例子</h1>
                <Layout style={{ height: 300, width: 500 }} className="layout-out">
                    <Header className="header">header</Header>
                    <Layout className='layout-in'>
                        <Aside className='aside'>Aside</Aside>
                        <Content className="content">Content</Content>
                    </Layout>
                    <Footer className="footer">Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第三个例子</h1>
                <Layout style={{ height: 300, width: 500 }} className="layout-out">
                    <Header className="header">header</Header>
                    <Layout>
                        <Content className="content">Content</Content>
                        <Aside className='aside'>Aside</Aside>
                    </Layout>
                    <Footer className="footer">Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第四个例子</h1>
                <Layout style={{ height: 300, width: 500 }} className="layout-out">
                    <Aside className='aside'>Aside</Aside>
                    <Layout className='layout-in'>
                        <Header className="header">header</Header>
                        <Content className="content">Content</Content>
                        <Footer className="footer">Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}

export default layoutExample;