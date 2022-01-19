import React,{useState} from 'react';
import './App.css';

function App() {
  const [ name, setName]=useState("");
  const [ password, setPassword]=useState("");
  const [ fullName, setFullName]=useState("");
  const [ fullPassword, setFullPassword]=useState("");

  const inputEvent = (event) =>{
    // console.log(event.target.value);
    setName(event.target.value);
    
  }
  const inputEvent1 = (event) =>{
    // console.log(event.target.value);
   
    setPassword(event.target.value);
  }

  const onSubmit = (event) =>{
    event.preventDefault(); // use that form should not use its default behaviour
    setFullName(name);
    setFullPassword(password);
  }


  return (
    <div className="App">
      <form onSubmit={onSubmit}>
         <h1>Hello {fullName}{fullPassword}</h1>
         <div>
         <input type="text" placeholder="Enter Your Name :" onChange={inputEvent} value={name}/>

         </div>
         <div>
         <input type="text" placeholder="Enter Your Password :" onChange={inputEvent1} value={password}/>

         </div>
        
         
         <button  type="submit">Click Me</button>

      </form>
     
      
    </div>
  );
}

export default App;
