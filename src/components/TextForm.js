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
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
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
            <h3 className='mb-3'>{props.heading}</h3>
            <textarea placeholder='Enter your text' style={{backgroundColor:props.mode==="dark"?"#13466e":"white",color:props.mode==="light"?"black":"white"}} className="form-control" value={text} onChange={handleOnChange} id ="myBox" rows="6"></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary" onClick = {handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"  onClick = {handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"  onClick = {handleClearClick}>Clear text</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"  onClick = {handleCopyClick}>Copy text</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1"  onClick = {removeExtraSpaces}>Formate text</button>
    </div>
    <div className="container my-3"style={{color:props.mode==="light"?"black":"white"}} >
        <h4>Your text Summary</h4>
        <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split("/s+/").filter((element)=>{ return element.length!==0}).length} minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  )
}
TextForm.propTypes = {
    heading:PropTypes.string
}
