import React from 'react';
import {
  Chart,
  Interval,
  Axis,
  Tooltip,
  Coordinate,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";

class Stacked extends React.Component {
  render() {
    const data = [
      {
        State: "实际",
        "小于5岁": 25635,
        "5至13岁": 1890,
        "14至17岁": 9314
      },
      {
        State: "预测",
        "小于5岁": 30352,
        "5至13岁": 20439,
        "14至17岁": 10225
      },
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["小于5岁", "5至13岁", "14至17岁"],
      // 展开字段集
      key: "年龄段",
      // key字段
      value: "人口数量",
      // value字段
      retains: ["State"] // 保留字段集，默认为除fields以外的所有字段
    });
    return (
      <Chart height={400} data={dv.rows} autoFit>
        <Coordinate transpose />
        <Axis
          name="State"
          label={{
            offset: 12
          }}
        />
        <Interval
          adjust={[{ type: 'stack' }]}
          position="State*人口数量"
          color={"年龄段"}
          size={30}
          label={['人口数量', { position: 'middle', offset: 0, style: { fill: '#fff' }, layout: { type: 'limit-in-shape' } }]}
        />
      </Chart>
    );
  }
}

export default Stacked;