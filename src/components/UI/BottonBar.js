import React from 'react'
import { Link } from 'react-router-dom'
import './styles/BottomBar.css'
import { ReactComponent as HomeIcon } from './icons/svg/HomeIcon.svg';
import { ReactComponent as AnalyticsIcon } from './icons/svg/AnalyticsIcon.svg';
import { ReactComponent as ReportsIcon } from './icons/svg/ReportsIcon.svg';
import { ReactComponent as ProfileIcon } from './icons/svg/ProfileIcon.svg';

function BottonBar() {
  return (
    <div className='bottom-tab-container'>
        <div className='bottom-tab-card'>
            <Link to="/dashboard/home">
                <HomeIcon width={'30px'} />
            </Link>
            <Link to="/dashboard/analytics">
                <AnalyticsIcon width={'30px'} />
            </Link>
            <Link to="/dashboard/reports">
                <ReportsIcon width={'30px'} />
            </Link>
            <Link to="/dashboard/profile">
                <ProfileIcon width={'30px'} />
            </Link>
        </div>
    </div>
  )
}

export default BottonBar