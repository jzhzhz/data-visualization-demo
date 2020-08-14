import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'

const { Header, Footer, Content } = Layout;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content>
            
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
