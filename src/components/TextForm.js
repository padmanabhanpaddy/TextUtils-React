import React, {useState} from 'react'

export default function TextForm(props) {

    // Creating a onclick function
    const handleUpClick = () => {
        // Saving the upper version of text state to a variable
        let new_text = text.toUpperCase();

        // Changing the state to the Upper Text (will reflect in input form)
        setText(new_text);

        // Alert the user
        props.showAlert("Converted to upper case", 'success')
    }

    // Finction to copy a text
    const handleCopyClick = () =>{
        // Copy the state data
        navigator.clipboard.writeText(text);

        // Alert the user
        props.showAlert("Text Copied", 'success')
    }

    // Creating a onclick function
    const handleClearClick = () => {
        setText('');

        // Alert the user
        props.showAlert("Text Cleared", 'success')
    }

    // Creating a onclick function
    const handleDownClick = () => {
        // Saving the upper version of text state to a variable
        let new_text = text.toLowerCase();

        // Changing the state to the Upper Text (will reflect in input form)
        setText(new_text);

        // Alert the user
        props.showAlert("Converted to lower case", 'success')
    }

    // creating a function to handle on change
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    // Creating a state object
    const [text, setText] = useState("Enter your text here");

  return (
    <>
        <div className='container my-2' style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
            <h1>{props.heading}</h1>


            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
                Convert to upper case
            </button>

            <button className="btn btn-primary my-2" onClick={handleDownClick}>
                Convert to lower case
            </button>

            <button className="btn btn-danger my-2 mx-2" onClick={handleClearClick}>
                Clear Text
            </button>

            <button className="btn btn-success my-2 mx-2" onClick={handleCopyClick}>
                Copy Text
            </button>
        </div>

        <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
            <h1>Text Summary - </h1>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}
