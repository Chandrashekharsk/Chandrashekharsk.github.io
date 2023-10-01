import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
        const handleUpClick =  ()=>{
        // console.log("upper case was clicked!")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!","success ");

    }
    const handleOnChange =  (e)=>{
        // console.log("on Change Clicked!")
        setText(e.target.value);
    }

    const handleLoClick  = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!","success ");
    }
    const handleClearClick  = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert(" Text Cleared!","success ")
    }
    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success ");

    }
    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Un-neccessory spaces Removed!","success ");
    }
    const[text,setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==="light"?"black":"white"}} >
        <div className="mb-3">
            <h2>{props.heading}</h2>
            <textarea placeholder='Enter your text' style={{backgroundColor:props.mode==="dark"?"#495057":"white",color:props.mode==="light"?"black":"white"}} className="form-control" value={text} onChange={handleOnChange} id ="myBox" rows="8"></textarea>
        </div>
        <div className="btn btn-primary" onClick = {handleUpClick}>Convert to Uppercase</div>
        <div className="btn btn-primary mx-3"  onClick = {handleLoClick}>Convert to Lowercase</div>
        <div className="btn btn-primary px-2"  onClick = {handleClearClick}>Clear text</div>
        <div className="btn btn-primary mx-3"  onClick = {handleCopyClick}>Copy text</div>
        <div className="btn btn-primary px-2"  onClick = {removeExtraSpaces}>Formate text</div>
    </div>
    <div className="container my-3"style={{color:props.mode==="light"?"black":"white"}} >
        <h4>Your text Summary</h4>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Type something in the Box"}</p>
    </div>
    </>
  )
}
TextForm.propTypes = {
    heading:PropTypes.string
}
