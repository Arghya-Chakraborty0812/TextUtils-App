import React, { useState } from 'react'


export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor : 'white'
  // });

  let myStyle = {
    color : props.mode === 'dark' ? 'white' : '#063970',
    backgroundColor : props.mode === 'dark' ? '#063970' : 'white'
  };
  const [btnState, setBtnState] = useState('Enable Dark-Mode');
  return (
<div className='container' style={myStyle}>
  <div>
    <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
      <div className="accordion-item bo" style={{ ...myStyle}}>

          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or converting
       to uppercase, lowercase , clear and capitalize text .
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given
        text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character
        limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software worksm in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.
        It asuits to count characters in facebook, blogs, books, excel document, pdf document, essays, etc .
      </div>
    </div>
  </div>
</div>
<div className="container my-2">

</div>
</div>
    </div>
  )
}
