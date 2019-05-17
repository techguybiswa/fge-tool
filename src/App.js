import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import WelcomeHeader from './components/WelcomeHeader';
import ServicesComponent from './components/ServicesComponent';
import AcquisitionStrategy from './components/AcquisitionStrategy';
import Documents from './components/Documents';
import Conversations from './components/Conversations'
import Tasks from './components/Tasks';
import Navigation from './components/Navigation';
import Navbar from './components/Navbar';
function App() {
  return (
  <div>

      <Navbar/>
<div style={{marginLeft: '50px',marginRight: '50px', marginBottom: '50px', padding:' 0px'}}> 
<br/>
<WelcomeHeader/>
<Navigation/>
<ServicesComponent/>
<AcquisitionStrategy/>
<Tasks/>
 <Documents/>


<Conversations/>
</div>
  </div>
  );
}

export default App;
