import React from 'react';
import { Chart, Line, Point } from 'bizcharts';

function LineChart(props) {
  return (
    <Chart scale={{ratio: {min: 0}}} padding={[30,20,50,40]} autoFit height={400} data={props.data} >
      <Line shape="line" position="date*ratio" color="name" label="ratio"/>
      <Point position="date*ratio" color="name" />
    </Chart>
  );
}

export default LineChart;