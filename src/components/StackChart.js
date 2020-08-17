import React from 'react';
import {
  Chart,
  Interval,
  Axis,
  Coordinate,
} from "bizcharts";
import DataSet from "@antv/data-set";

class Stacked extends React.Component {
  render() {
    // get fields from props data keys
    let dvFields = [];
    if (this.props.data[0]) {
      dvFields = Object.keys(this.props.data[0]);
    }
    dvFields = dvFields.filter(item => item !== "state");

    const ds = new DataSet();
    const dv = ds.createView().source(this.props.data);
    dv.transform({
      type: "fold",
      fields: dvFields,
      // 展开字段集
      key: "product",
      // key字段
      value: "ratio",
      // value字段
      retains: ["state"] // 保留字段集，默认为除fields以外的所有字段
    });
    return (
      <Chart height={400} data={dv.rows} autoFit>
        <Coordinate transpose />
        <Axis
          name="state"
          label={{
            offset: 12
          }}
        />
        <Interval
          adjust={[{ type: 'stack' }]}
          position="state*ratio"
          color={"product"}
          size={30}
          label={['ratio', { position: 'middle', offset: 0, style: { fill: '#fff' }, layout: { type: 'limit-in-shape' } }]}
        />
      </Chart>
    );
  }
}

export default Stacked;