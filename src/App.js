import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeToDistrict, changeToProduct } from './actions';

import { AppTable } from './AppTable';
import { Products, Districts } from './Data';

const { Header, Footer, Content } = Layout;

function App() {
  const display = useSelector(state => state.display);
  const dispatch = useDispatch();

  const [tableProducts, setTableProducts] = useState([]);

  useEffect(() => {
    let ProductA = {
      key: '1',
      name: "产品A", 
    };

    let ProductB = {
      key: '2',
      name: "产品B", 
    };

    Products.forEach(item => {
      if (item.name === "ProductA") {
        ProductA[item.date] = item.ratio;
      }

      if (item.name === "ProductB") {
        ProductB[item.date] = item.ratio;
      }
    });

    setTableProducts([
      {
        key: '0',
        name: "产品"
      },
      ProductA,
      ProductB
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
          
          <AppTable products={tableProducts} districts={Districts}/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </React.Fragment>
  );
}

export default App;
