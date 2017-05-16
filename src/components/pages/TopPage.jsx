/* @flow */

import React from "react";
// Components
import RaderChart from '../common/RaderChart';
// UI
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
// styles
import { mergeStyle as m } from '../styles/mergeStyle';
import { topStyle as style } from '../styles/topStyle';

const chartData = {
  labels: ['論理力', '協働力', 'アイデア力', '継続力', '発信力', '調査力'],
  datasets: [
    {
      label: '次のレベル',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [60, 60, 60, 60, 60, 60]
    },
    {
      label: '現在のあなた',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [60, 60, 60, 60, 60, 60]
    }
  ],
};
const chartOptions = {
  legend: {
    position: 'top',
  },
  title: {
    display: false,
    text: 'Chart.js Radar Chart',
  },
  scale: {
    reverse: false,
    ticks: {
      beginAtZero: true,
    },
  },
};

export default class TopPage extends React.Component {

  componentWillMount() {
    chartData.datasets[1].data = this.props.top.myPoints;
  }

  render() {
    return (
      <div>
        <h3>こんにちは、{this.props.top.getMyName()}さん！</h3>
        <p>成長ポイント</p>
        <RaderChart
          data={chartData}
          options={chartOptions}
          width={300}
          height={250}
        />
        <p>登録中のトピック</p>
        <div style={m(style.chipDiv)}>
          <Chip style={m(style.chip)}>
            <Avatar size={32}>2</Avatar>
            社会
          </Chip>
          <Chip style={m(style.chip)}>
            <Avatar size={32}>1</Avatar>
            スポーツ
          </Chip>
          <Chip style={m(style.chip)}>
            <Avatar size={32}>1</Avatar>
            政治
          </Chip>
        </div>
      </div>
    );
  }
}
