import React, { useEffect, useState } from "react";
import Stacked from './StackChart';
import LineChart from './LineChart';

export const AppCharts = (props) => {
  const [chartsData, setChartsData] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <div className="charts-area">
      <div className="stack-chart" style={{width: "600px", float: "left"}}>
        <Stacked />
      </div>
      <div className="line-chart" style={{width: "600px", float: "left"}}>
        <LineChart data={props.data}/>
      </div>
    </div>
  );
};