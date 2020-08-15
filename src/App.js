import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

import { useSelector, useDispatch } from 'react-redux';
import { changeToDistrict, changeToProduct } from './actions';

import { AppCharts } from './AppCharts';
import { AppTable } from './AppTable';
import { Products, Districts } from './Data';

const { Header, Footer, Content } = Layout;

function App() {
  const display = useSelector(state => state.display);
  const dispatch = useDispatch();

  const [tableProducts, setTableProducts] = useState([]);
  const [tableDistricts, setTableDistricts] = useState([]);

  useEffect(() => {
    let ProductA = {
      key: "pro1",
      name: "产品A", 
    };

    let ProductB = {
      key: "pro2",
      name: "产品B", 
    };

    let Shanghai = {
      key: "dis1",
      name: "Shanghai",
    }

    let Beijing = {
      key: "dis1",
      name: "Beijing",
    }

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

    setTableProducts([
      {
        key: "pro0",
        name: "产品"
      },
      ProductA,
      ProductB,
    ]);

    setTableDistricts([
      {
        key: "dis0",
        name: "地区"
      },
      Shanghai,
      Beijing
    ]);
  }, []);

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
          <h1>Display: {display}</h1>
          <button onClick={() => dispatch(changeToProduct())}>product</button>
          <button onClick={() => dispatch(changeToDistrict())}>district</button>
          <AppCharts />
          
          <AppTable products={tableProducts} districts={tableDistricts}/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </React.Fragment>
  );
}

export default App;
