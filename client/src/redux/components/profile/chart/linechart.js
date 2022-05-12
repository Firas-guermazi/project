import React, { Component } from 'react'
import Chart from 'react-google-charts'

const LineData = [
  ['x', '2022', '2021'],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'profits',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class MultiLineChart extends Component {
  render() {
    return (
      <div >
      <img src="https://miro.medium.com/max/1400/1*1-Q0tK0FkjlI_jMV_ywh6Q.jpeg" width="250" height="250"/>  

        <Chart
          width={'500px'}
          height={'380px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
         <h4>Profits Chart</h4>     
      </div>
    )
  }
}
export default MultiLineChart