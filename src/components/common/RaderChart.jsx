// Package
import React, { PropTypes } from 'react';
import { Radar } from 'react-chartjs-2';

// Styles
const style = {
  base: {
    width: '100%',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  raderChart: {
    width: '400px',
    margin: '0 auto',
  },
};

export default class RadarChart extends React.Component {
  render() {
    let graph;
    // サーバーサイドレンダリングでエラーが出るため、windowがない場合はダミーを入れる。
    if (typeof(window) == 'undefined') {
      graph = (<div></div>);
    } else {
      graph = (
        <Radar
          data={this.props.data}
          options={this.props.options}
          width={this.props.width}
          height={this.props.height}
          options={{
            title: {
              display: false,
            }
          }}
        />
      );
    }
    return (
      <div style={style.base}>
        <div style={style.raderChart}>
          {graph}
        </div>
      </div>
    );
  }
}
RadarChart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
