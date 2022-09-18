import React from 'react'
import './styles/TopWorkout.css'
import WorkoutImage from '../../assets/images/workout.png'

function TopWorkout() {
  return (
    <div className='top-workout-container'>
        <p className='workout-text'>Top workouts</p>
        <div className='workout-card'>
            <div className='workout-card-body'>
                <div className='workout-type'>
                    Cardio
                </div>
                <div className='workout-type-summary'>
                    Full body workout
                </div>
            </div>
            <div className='workout-card-btn-container'>
                <div className='workout-card-btn'>
                    Watch now
                </div>
                <div className='workout-card-btn'>
                    🔥 350 Cal
                </div>
            </div>
            <img src={WorkoutImage} alt='workout' className='workout-image' />
        </div>
    </div>
  )
}

export default TopWorkout