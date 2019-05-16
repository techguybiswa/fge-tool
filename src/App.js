import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import WelcomeHeader from './components/WelcomeHeader';
import ServicesComponent from './components/ServicesComponent';
import AcquisitionStrategy from './components/AcquisitionStrategy';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
    <WelcomeHeader/>
    <ServicesComponent/>
    <AcquisitionStrategy/>
    <Tasks/>
      {/* <h1>Hello</h1> */}
    </div>
  );
}

export default App;
