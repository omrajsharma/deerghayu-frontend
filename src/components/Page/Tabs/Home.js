import React from 'react'
import HomeHeader from '../../UI/HomeHeader'
import TodayStatus from '../../UI/TodayStatus'
import TopWorkout from '../../UI/TopWorkout'
import Categories from '../../UI/Categories'
import './styles/Home.css'

function Home() {
  return (
    <div className='container'>
      <HomeHeader />
      <TodayStatus />
      <TopWorkout />
      <Categories />
    </div>
  )
}

export default Home