import React from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";

const layoutExample: React.FunctionComponent = () => {
    return (
        <div>
            <div>
                <h1>第一个例子</h1>
                <Layout className="hi">
                    <Header className="hi">header</Header>
                    <Content className="hi">Content</Content>
                    <Footer className="hi">Footer</Footer>
                </Layout>
            </div>
        </div>
    )
}

export default layoutExample;