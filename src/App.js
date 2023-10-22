import './App.css';
import React,{useState} from "react";
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Welcome from './components/Welcome';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


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
  const removeBodyCls = ()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  }

  const changeMode= (cls)=>{
    removeBodyCls();
    document.body.classList.add("bg-"+cls);
    console.log(cls)
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert(" Light mode has been enabled","success ");
      // document.title="TextUtils-Light Mode";
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
      showAlert(" Dark mode has been enabled","success ");
      // document.title="TextUtils-Dark Mode";
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
    <Router>
    <Navbar title="TextUtils" mode ={mode} toggleMode={changeMode} />
    <Alert alert={alert}/>
    <div className="container-fluid my-3">
    <Routes>
          {/* <About /> */}
          <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode}/>}/>
          <Route exact path="/about" element={<About mode={mode} />}/>
          {/* <Route exact path="/Welcome" element={<Welcome/>}/> */}
          {/* <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/> */}
    </Routes>
    </div>
    </Router>

    </>
  );
}
export default App;
