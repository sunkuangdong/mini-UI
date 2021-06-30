import React from "react";
import Aside from "./aside";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";

const layoutExample: React.FunctionComponent = () => {
    return (
        <div>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{ height: 300 }} className="hi">
                    <Header className="hi">header</Header>
                    <Content className="hi">Content</Content>
                    <Footer className="hi">Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第二个例子</h1>
                <Layout style={{ height: 300 }} className="hi">
                    <Header className="hi">header</Header>
                    <Layout>
                        <Aside className='hi'>Aside</Aside>
                        <Content className="hi">Content</Content>
                    </Layout>
                    <Footer className="hi">Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第三个例子</h1>
                <Layout style={{ height: 300 }} className="hi">
                    <Header className="hi">header</Header>
                    <Layout>
                        <Content className="hi">Content</Content>
                        <Aside className='hi'>Aside</Aside>
                    </Layout>
                    <Footer className="hi">Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第四个例子</h1>
                <Layout style={{ height: 300 }} className="hi">
                    <Aside className='hi'>Aside</Aside>
                    <Layout>
                        <Header className="hi">header</Header>
                        <Content className="hi">Content</Content>
                        <Footer className="hi">Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}

export default layoutExample;