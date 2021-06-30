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
                <Layout style={{ height: 300, width: 500 }} className="example-layout-out">
                    <Header className="example-header">header</Header>
                    <Content className="example-content">Content</Content>
                    <Footer className="example-footer">Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第二个例子</h1>
                <Layout style={{ height: 300, width: 500 }} className="example-layout-out">
                    <Header className="example-header">header</Header>
                    <Layout className='example-layout-in'>
                        <Aside className='example-aside'>Aside</Aside>
                        <Content className="example-content">Content</Content>
                    </Layout>
                    <Footer className="example-footer">Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第三个例子</h1>
                <Layout style={{ height: 300, width: 500 }} className="example-layout-out">
                    <Header className="example-header">header</Header>
                    <Layout>
                        <Content className="example-content">Content</Content>
                        <Aside className='example-aside'>Aside</Aside>
                    </Layout>
                    <Footer className="example-footer">Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第四个例子</h1>
                <Layout style={{ height: 300, width: 500 }} className="example-layout-out">
                    <Aside className='example-aside'>Aside</Aside>
                    <Layout className='example-layout-in'>
                        <Header className="example-header">header</Header>
                        <Content className="example-content">Content</Content>
                        <Footer className="example-footer">Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}

export default layoutExample;