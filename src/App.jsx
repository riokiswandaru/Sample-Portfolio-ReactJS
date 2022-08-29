import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './components/portfolio.css'
import Navbar from './components/Navbar';
import Content from './pages/Content';


class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Content />} />
          </Routes>
        </div>
        <br className="bersih" />
      </div>
    );
  }
}

export default App;
