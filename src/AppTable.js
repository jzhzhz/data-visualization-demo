import React from 'react';
import { Table } from 'antd';

const { Column } = Table;

// const data = [
//   {
//     key: '1',
//     firstName: 'John',
//     lastName: 'Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     firstName: 'Jim',
//     lastName: 'Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     firstName: 'Joe',
//     lastName: 'Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

export const AppTable = (props) => {
  const data = props.products;
  console.log(data);

  return (
    <div>
      <Table dataSource={data} pagination={false}>
        <Column 
          title="Main Body" 
          dataIndex="name" 
          key="firstName"
          render={name => {
            if (name === "产品") {
              return <strong>{name}</strong>;
            }

            return name;
          }} 
        />
        <Column title="2019Q1" dataIndex="2019Q1" key="2019Q1" />
        <Column title="2019Q2" dataIndex="2019Q2" key="2019Q2" />
        <Column title="2019Q3" dataIndex="2019Q3" key="2019Q3" />
        <Column title="2019Q4" dataIndex="2019Q4" key="2019Q4" />
        <Column title="2020Q1" dataIndex="2020Q1" key="2020Q1" />
      </Table>
      <Table dataSource={data} pagination={false}>
        <Column title="Main Body" dataIndex="firstName" key="firstName" />
        <Column title="2019Q1" dataIndex="lastName" key="lastName" />
        <Column title="2019Q2" dataIndex="age" key="age" />
        <Column title="2019Q3" dataIndex="address" key="address" />
        <Column title="2019Q4" dataIndex="address" key="address" />
        <Column title="2020Q1" dataIndex="address" key="address" />
      </Table>
    </div>
  );
}