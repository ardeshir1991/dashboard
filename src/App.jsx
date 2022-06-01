import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/topbar/TopBar';
import './App.scss';

const App = () => {
  return (
    <div>
        <TopBar />
        <div className="container">
          <Sidebar />
          <div className="other">
            some texts
          </div>
        </div>
    </div>
  )
}

export default App;