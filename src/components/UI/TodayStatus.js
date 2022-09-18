import React from 'react'
import './styles/TodayStatus.css'

function TodayStatus() {
  return (
    <div className='today-status-container'>
        <p className='today-text'>Today</p>
        <div className='status-card-container'>
            <div className='width-100'>
                <div className='status-card walking-card'>
                    <p className='status-card-emoji'>
                        <span>
                            🏃🏻‍♂️
                        </span>
                    </p>
                    <p className='status-card-body'>
                        <p className='status-card-number'>3,719</p>
                        <p className='status-card-text'>Steps</p>
                    </p>
                </div>
            </div>
            <div className='width-100'>
                <div className='status-card-right right-cards'>
                    <p className='status-card-emoji'>
                        <span>
                        🔥
                        </span>
                    </p>
                    <p className='status-card-body'>
                        <p className='status-card-number-right'>246</p>
                        <p className='status-card-text'>Kcal burnt</p>
                    </p>
                </div>
                <div className='status-card-right right-cards'>
                    <p className='status-card-emoji'>
                        <span>
                        ⏰
                        </span>
                    </p>
                    <p className='status-card-body'>
                        <p className='status-card-number-right'>7.2h</p>
                        <p className='status-card-text'>Sleep</p>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodayStatus