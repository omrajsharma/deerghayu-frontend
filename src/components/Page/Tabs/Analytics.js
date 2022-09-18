import React from 'react'
import './styles/Analytics.css'
import Header from '../../UI/page/analytics/Header'
import LineGraph from '../../UI/page/analytics/LineGraph'
import Tips from '../../UI/page/analytics/Tips'
import SelectAnalytics from '../../UI/page/analytics/SelectAnalytics'

function Analytics() {
  return (
    <div className='container'>
      <Header />
      <SelectAnalytics />
      <LineGraph />
      <Tips />
    </div>
  )
}

export default Analytics