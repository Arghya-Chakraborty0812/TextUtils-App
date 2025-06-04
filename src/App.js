import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [greenMode, setGreenMode] = useState('primary');

  const toggleMode = () => {
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", 'success');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#063970';
      showAlert("Dark Mode has been enabled", 'success');
    }
  };
  const toggleGreen = () => {
    if(greenMode === 'primary')
    {
      setGreenMode('success');
      document.body.style.backgroundColor = '#154303';

    }
    else {
      setGreenMode('primary');
      document.body.style.backgroundColor = 'white';
    }
  }

  const showAlert = (message, type) => {
    setAlert ( {
      msg : message,
      type : type
    })
    setTimeout( ()=> {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} toggleGreen={toggleGreen}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route path='/' element={<TextForm  showAlert={showAlert} mode={mode} greenMode={greenMode} heading="Enter the text to analyze below"/>}/>
      <Route path='/about' element={<About mode={mode} greenMode={greenMode}/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
