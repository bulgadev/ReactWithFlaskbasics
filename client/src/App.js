import React from 'react';
//so useState is to change data, and useEffect take our shit from flask when code starts
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  //makes a const called data, it will be null till we get our flask info
  const [data, setData] = useState(null);

  //use effect will run on the start of the code, so we can talk to flask and take wut belong to us >:)
  useEffect(() => {

   // Call the function here
   handleGet();
  }, []); // Properly close the useEffect

  function handleGet() {
        //calls flask
        fetch('http://localhost:5000/api/data')
        //we take our info from flask
        .then(res => res.json())
        //we save the info we just took
        .then(json => {
          setData(json); //saves the json into a state or whatever this is
        }) //just in case our code goes kaboom
        .catch(err => console.error("Im sorry for u man, good luck:", err))
    
  }

  function handlePost() {
    
    //now we are not getting info, we are giving info, like with an post, mind blowing, ik
    //the info we want to send
    const sendData = async () => { 
      const dataToSend = {
        "username": "Bulga",
        password: 123,
    };

    //so thats post using axios, clean huh????
    const res = await axios.post('http://localhost:5000/api/send', dataToSend);	
    const result = res.data
  }
  sendData();
  handleGet();
  }

  return(
    //i hate html 😔
    <div className='principal'>
      <h1>OMG REACT AND FLASK???? 🗣️🔥🔥🔥💥💥</h1>
      {/* this data thingy is like, it waits for the variable, if it doesnt get it it does the waiting banana shit */}
      {data ? (
        <div>
          <p>{data.count}</p>
        </div>
      ) : (
        <p>Waiting for banana...</p>
      )}
      {/* We put the function to send the post on the button click */}
      <button onClick={handlePost} className="banana">
        Send post
      </button>
    </div>
  )
}

export default App