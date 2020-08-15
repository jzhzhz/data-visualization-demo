import React from 'react';
import { Table } from 'antd';
import { BarChartOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { changeToDistrict, changeToProduct } from './actions';

const { Column } = Table;

export const AppTable = (props) => {
  let data = props.products.concat(props.districts);
  
  const dispatch = useDispatch();

  return (
    <div className="app-table">
      <Table dataSource={data} pagination={false}>
        <Column 
          title="Main Body" 
          dataIndex="name" 
          key="firstName"
          render={name => {
            if (name === "产品") {
              return (
                <strong>
                  {name} <BarChartOutlined onClick={() => dispatch(changeToProduct())}/>
                </strong>
              );
            }

            if (name === "地区") {
              return (
                <strong>
                  {name} <BarChartOutlined onClick={() => dispatch(changeToDistrict())}/>
                </strong>
              );
            }

            return name;
          }} 
        />
        <Column title="2019Q1(%)" dataIndex="2019Q1" key="2019Q1" />
        <Column title="2019Q2(%)" dataIndex="2019Q2" key="2019Q2" />
        <Column title="2019Q3(%)" dataIndex="2019Q3" key="2019Q3" />
        <Column title="2019Q4(%)" dataIndex="2019Q4" key="2019Q4" />
        <Column title="2020Q1(%)" dataIndex="2020Q1" key="2020Q1" />
      </Table>
    </div>
  );
};