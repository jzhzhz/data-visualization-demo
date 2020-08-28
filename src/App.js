import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

import { useSelector } from 'react-redux';

import { AppCharts } from './components/AppCharts';
import { AppTable } from './components/AppTable';
import { Products, Districts } from './data/Data';

const { Header, Footer, Content } = Layout;

function App() {
  const display = useSelector(state => state.display);

  const [tableProducts, setTableProducts] = useState([]);
  const [tableDistricts, setTableDistricts] = useState([]);

  useEffect(() => {
    // data handling for tables display
    // using brute force, could be improved
    let ProductA = {
      key: "pro1",
      name: "productA", 
    };

    let ProductB = {
      key: "pro2",
      name: "productB", 
    };

    let Shanghai = {
      key: "dis1",
      name: "Shanghai",
    };

    let Beijing = {
      key: "dis2",
      name: "Beijing",
    };

    Products.forEach(item => {
      if (item.name === "ProductA") {
        ProductA[item.date] = item.ratio;
      }

      if (item.name === "ProductB") {
        ProductB[item.date] = item.ratio;
      }
    });

    Districts.forEach(item => {
      if (item.name === "Shanghai") {
        Shanghai[item.date] = item.ratio;
      }

      if (item.name === "Beijing") {
        Beijing[item.date] = item.ratio;
      }
    })

    // set data for products in the table
    setTableProducts([
      {
        key: "pro0",
        name: "产品"
      },
      ProductA,
      ProductB,
    ]);

    // set data for products in the table
    setTableDistricts([
      {
        key: "dis0",
        name: "地区"
      },
      Shanghai,
      Beijing
    ]);
  }, []); // set empty dependencies to avoid endless update

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
        <Content style={{ padding: '0 50px' }}>
          <AppCharts data={display === "product" ? Products : Districts}/>
          <AppTable products={tableProducts} districts={tableDistricts}/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </React.Fragment>
  );
}

export default App;
