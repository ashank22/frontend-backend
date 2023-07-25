import React,{useEffect,useState } from "react";
import axios from 'axios';
function Api(){
  const [data1,setQuote]=useState([]);
  const [quoteA,setQuoteA]=useState();
  const [quoteQ,setQuoteQ]=useState();
  const [submit,setSubmit]=useState();
  useEffect(()=>{
    axios.get('http://localhost:5050/quote/')
    .then((response)=>{
      setQuote(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[submit])
  console.log(data1);

  const handleSubmit=async()=>{
    try{
      const res= await axios.post('http://localhost:5050/quote',{
        "author":quoteA,
        "quote":quoteQ
      })
      setSubmit(res);
    }
    catch{
      alert('something went wrong');
    }
  }
  var s=Math.floor(Math.random()*(data1.length));
  var x=data1[s];
  return(
    <header>
    <div className="div">
    <h1 className="a1">RANDOM QUOTE<br></br></h1><h1 className="q">{x && x.quote}</h1>
    <h1 className="q">By-{x && x.author}</h1>
    <h2 className="a2">Add your quote</h2>
    <div className="a3">
    <label> Quote : </label>
      <input onChange={(e)=>{setQuoteQ(e.target.value)}}/>
    </div>
    <div className="a3">
      <label>Author:</label>
      <input onChange={(e)=>{setQuoteA(e.target.value)}}/>
    </div>
    
    <div className="btn1"> 
    <button onClick={handleSubmit} id="btn">Submit</button>
    </div>
    </div>
    </header>
  );
  
};

export default Api;



