import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/topbar/TopBar';
import './App.scss';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div>
        <TopBar />
        <div className="container">
          <Sidebar />
          <Home />
        </div>
    </div>
  )
}

export default App;