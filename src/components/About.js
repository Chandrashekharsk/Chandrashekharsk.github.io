import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color:"black",
  //   backgroundColor: "white"
  // })
  let myStyle ={
    color:props.mode ==="dark"?"white":"black",
    backgroundColor: props.mode ==="dark"?"rgb(36 74 104)":"white",
  }
  return (
    <div className="container-fluid" style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show" style={myStyle} 
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             <b> "TextUtils" gives you a way to analyze your text quickly and efficiently. Be it word count,character count or.</b>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse" style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             <b> "TextUtils" is a free character counter tool that ptovides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitaible for writing text with word/character limit.</b>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse" style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <b>this word counter software works in any web browsers such as Chrome, Firefox, Interner Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</b>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
      <button type="button" onClick={toggleStyle} className="my-3 btn btn-primary">{btnText}</button>
      </div> */}
    </div>
  );
}
