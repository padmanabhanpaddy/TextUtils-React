import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';


function App() {

  // Creating a new state
  const [mode, setMode] = useState('light'); // Status of dark mode

  // Creating a function to toggle dark mode
  const toggleMode = () => {
    if (mode == 'light'){
      // Change the state to dark
      setMode('dark');

      // Change the page background colour
      document.body.style.backgroundColor = 'grey';

      // Alert the user
      showAlert("Dark Mode is enabled", "success")

      // Change the title of the page
      document.title = "TextUtils - Dark Mode!";

      // Change to default after 3 seconds (not good idea to change the title dynamically)
      setInterval(() => {
        document.title = "TextUtils - Home";
      }, 2000);

    }

    else{
      // Change the state to light
      setMode('light');

       // Change the page background colour
       document.body.style.backgroundColor = 'white';

       // Alert the user
      showAlert("Light Mode is enabled", "success")
    }
  }

  // Create a state for alert
  const [alert, setAlert] = useState(null);

  // Function to set alert according to situations
  const showAlert = (message, type) => {
      setAlert({
        msg:message,
        type:type
      });

      // Change the state after some seconds to null
      setTimeout(()=> {
        setAlert(null);
      }, 3000)

      }


  return (

   <>
    <Navbar title="TextUtils2" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>

    <Alert alert={alert}/>

    <div className="container">

        {/* Showing the TextForm */}
        
        <TextForm showAlert={showAlert} heading="Enter a text to analyze" mode={mode}></TextForm>


        {/* Showing the about */}
        
          {/* <About></About> */}
        

        
     

    </div>
    
   </>

  );
}

export default App;
