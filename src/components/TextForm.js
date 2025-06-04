import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
   

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase', 'success');
    };
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'success');
    };
    
    const handleClearClick = () => {
        setText('');
    };
    
    const handleCapcase = () => {
        let words = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
        setText(words.join(" "));
    };

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    }
    
    const imageToText = ()=> {
        if(!selectedImage)
            return alert("Choose a Image");
        Tesseract.recognize(selectedImage, "eng", {})
        .then(({data : {text : extractedText}}) => {
            setText(extractedText);
        })

    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 style={{ color: (props.mode === 'dark' || props.greenMode === 'success') ? 'white' : 'black'  }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={text}
                        onChange={handleOnChange} 
                        style={{ 
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black',
                        }}
                        id="mybox" 
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${props.greenMode} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.greenMode} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.greenMode} mx-1 my-1`} onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.greenMode} mx-1 my-1`} onClick={handleCapcase}>Capitalized Case</button>
                <label>
                    <button className={`btn btn-${props.greenMode} mx-1 my-1`} onClick={imageToText}>Extract Text</button>
                    <input type='file' onChange={handleImageChange} accept='image/*'/>
                </label>
                

            </div>
            <div className="container my-3" style={{ color: (props.mode === 'dark' || props.greenMode === 'success') ? 'white' : 'black' }}>
                <h2 style={{ color: (props.mode === 'dark' || props.greenMode === 'success')}}>Your Text Summary</h2>
                <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes Read</p>
                <h2 style={{ color: (props.mode === 'dark' || props.greenMode === 'success') ? 'white' : 'black' }}>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
