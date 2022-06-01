import React from 'react';
import './Sidebar.scss';
import Home from '@material-ui/icons/Home';
import Timeline from '@material-ui/icons/Timeline';
import TrendingUp from '@material-ui/icons/TrendingUp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChart from '@material-ui/icons/BarChart';
import MailOutline from '@material-ui/icons/MailOutline';
import DynamicFeed from '@material-ui/icons/DynamicFeed';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import WorkOutline from '@material-ui/icons/WorkOutline';
import Info from '@material-ui/icons/Info';
import ShowChart from '@material-ui/icons/ShowChart';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className="sidebarWraper">
            <div className="sidebarOptions">
                <h3>Dashboard</h3>
                <ul>
                    <li>
                        <Home />
                        Home
                    </li>
                    <li>
                        <Timeline />
                        Analytics
                    </li>
                    <li>
                        <TrendingUp />
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarOptions">
                <h3>Quick Menu</h3>
                <ul>
                    <li>
                        <PermIdentityIcon />
                        Users
                    </li>
                    <li>
                        <StorefrontIcon />
                        Products
                    </li>
                    <li>
                        <AttachMoneyIcon />
                        Transactions
                    </li>
                    <li>
                        <BarChart />
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarOptions">
                <h3>Notifications</h3>
                <ul>
                    <li>
                        <MailOutline />
                        Mail
                    </li>
                    <li>
                        <DynamicFeed />
                        Feedback
                    </li>
                    <li>
                        <ChatBubbleOutline />
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarOptions">
                <h3>Staff</h3>
                <ul>
                    <li>
                        <WorkOutline />
                        Manage
                    </li>
                    <li>
                        <ShowChart />
                        Analytics
                    </li>
                    <li>
                        <Info />
                        Help
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar