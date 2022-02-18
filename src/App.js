import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import 'font-awesome/css/font-awesome.min.css'

function App() {
  const projectName = 'random-quote-machine';
let quotesData;
const url='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const [data,setData]=useState(null);
const [content,setContent]=useState("");
const [color,setColor]=useState(0);

const colors =['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];

useEffect(()=>{
  axios.get(url).then(res=>{
    setData(res.data);
    setContent(res.data.quotes[0].quote);

    console.log(res.data);
  })
},[url]);
useEffect(() => { document.body.style.backgroundColor = colors[color]}, [color]) 
const randomNumber=(min,max)=>{ 
  return Math.floor(Math.random() * (max - min) + min);
}
const getQuotes=()=> {
  console.log("working");
  let random=randomNumber(1,103);
  var colorNumber = Math.floor(Math.random() * colors.length);
  console.log("random: "+random)
  setColor(colorNumber)
  if(data.quotes.length>0){
    setContent(data.quotes[random].quote);
  }
  
}
let bgColor={backgroundColor:colors[color]}
console.log("content: "+content)
return (
  <div id="wrapper" >
<div id="quote-box" >
 <div className="quote-text">
   <i className="fa fa-quote-left"> </i><span id="text" style={{color:colors[color]}}>{content}</span>
 </div>
 <div className="quote-author"><span id="author"></span></div>
 <div className="buttons">
   <a
     className="button"
     id="tweet-quote"
     title="Tweet this quote!"
     target="_blank"
     style={bgColor}
     href="https://twitter.com/login?lang=en"
   >
     <i className="fa fa-twitter"></i>
   </a>
   <a
     className="button"
     id="tumblr-quote"
     title="Post this quote on tumblr!"
     target="_blank"
     style={bgColor}
     href="https://www.facebook.com/"
   >
     <i className="fa fa-facebook"></i>
   </a>
   <button className="button" id="new-quote" onClick={getQuotes} style={bgColor}>New quote</button>
 </div>
</div>
<div className="footer"> <a href="https://codepen.io/hezag/"></a></div>
</div>
);

}

export default App;
