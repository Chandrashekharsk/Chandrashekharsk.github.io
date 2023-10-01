import './App.css';
import React,{useState} from "react";
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    },1300);
  }

  const changeMode= ()=>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success ");
      document.title="TextUtils-Light Mode";
      // setInterval(() =>{
      //   document.title = "TextUtils is Amazing!";
      // },2000);
      // setInterval(()=>{
      //   document.title = "Install TextUtils now!"
      // },1300);
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled","success ");
      document.title="TextUtils-Dark Mode";
      // setInterval(() =>{
      //   document.title = "TextUtils is Amazing!";
      // },2000);
      // setInterval(()=>{
      //   document.title = "Install TextUtils now!"
      // },1300);

    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode ={mode} toggleMode={changeMode} />
    <Alert alert={alert}/>
    <div className="container-fluid my-3">
    {/* <Routes> */}
          {/* <Route exat path="/about" element={<About />}/> */}
          {/* <About /> */}
          {/* <Route exat path="/home" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>}/> */}
          <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>
    {/* </Routes> */}
    </div>
    {/* </Router> */}

    </>
  );
}
export default App;
