import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/topbar/TopBar';
import './App.scss';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';

const App = () => {
  return (
      <div>
          <TopBar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/users' element={<UserList />}/>
            </Routes>
          </div>
      </div>
    
  )
}

export default App;