import React, { Component } from 'react'
import Chart from 'react-google-charts'
const pieData = [
  ['course', 'per month'],
  ['GRIT', 7],
  ['RPM', 10],
  ['BODY ATTAQUE', 12],
  ['AQUAGYM', 2],

]
const pieOptions = {
  title: 'Your attended courses',
  pieHole: 0.4,
}
class PieChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <Chart
      
          width={'700px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={pieOptions}
          rootProps={{ 'data-testid': '3' }}
        />
      </div>
    )
  }
}
export default PieChart