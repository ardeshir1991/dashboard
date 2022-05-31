import React from 'react';
import './TopBar.scss';
import NotificationsNoneIcon from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';


const TopBar = () => {
  return (
    <div className='topbar-container'>
        <div className="topbar-wraper">
            <div className="topLeft">
                <span>DashAdmin</span>
            </div>
            <div className="topRight">
                <div className="topbar-icon-container">
                    <NotificationsNoneIcon style={{color: '#2ecc71'}}/>
                    <span className="badgeIcon">2</span>
                </div>
                <div className="topbar-icon-container">
                    <LanguageIcon style={{color: '#2ecc71'}}/>
                    <span className="badgeIcon">2</span>
                </div>
                <div className="topbar-icon-container">
                    <SettingsIcon style={{color: '#2ecc71'}}/>
                </div>
                <img src="./images/profile.jpeg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default TopBar