import React, { useEffect, useState } from "react";
import Stacked from './StackChart';
import LineChart from './LineChart';
import { Select } from 'antd';

import { useSelector } from 'react-redux';

const { Option } = Select;



export const AppCharts = (props) => {
  const [chartsData, setChartsData] = useState([]);
  const [season, setSeason] = useState("2019Q1");
  const display = useSelector(state => state.display);

  useEffect(() => {
    let stackData = [];
    if (display === "product") {
      stackData = [
        {
          state: "预测",
          "ProductA": 10,
          "ProductB": 10,
        },
        {
          state: "实际",
          "ProductA": 20,
          "ProductB": 20,
        },
      ];
    }

    if (display === "district") {
      stackData = [
        {
          state: "预测",
          "Shanghai": 30,
          "Beijing": 30,
        },
        {
          state: "实际",
          "Shanghai": 40,
          "Beijing": 40,
        },
      ];
    }

    props.data.forEach(item => {
      if (item.date.includes(season)) {
        item.date.includes("E") ?
          stackData[0][item.name] = item.ratio
          :
          stackData[1][item.name] = item.ratio;
      }
    });

    setChartsData(stackData);
  }, [season, display, props.data]);

  return (
    <div className="charts-area" style={{marginTop: "20px"}}>
      <div className="stack-chart" style={{width: "600px", display: "inline-block", marginLeft: "50px", marginBottom: "50px"}}>
        <h3>
          <strong>构成</strong>         
          <div className="stack-selector" style={{display: "inline-block", paddingLeft: "20px"}}>
            <Select defaultValue="2019Q1" style={{ width: 120 }} onChange={(value) => setSeason(value)}>
              <Option value="2019Q1">2019Q1</Option>
              <Option value="2019Q2">2019Q2</Option>
              <Option value="2019Q3">2019Q3</Option>
              <Option value="2019Q4">2019Q4</Option>
              <Option value="2020Q1">2020Q1</Option>
            </Select>
          </div>
        </h3>
        <Stacked data={chartsData}/>
      </div>
      <div className="line-chart" style={{width: "600px", display: "inline-block", marginLeft: "50px", marginBottom: "50px"}}>
        <h3><strong>趋势</strong></h3>
        <LineChart data={props.data}/>
      </div>
    </div>
  );
};