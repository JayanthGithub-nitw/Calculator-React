import React,{ useState} from "react";
import "./App.css";
function App() 
{

const[calc,setcalc]=useState("");
const [string,setString]=useState("");
const op=['+','-','*','/','.'];

function clear()
{
  setcalc(calc=>calc='')
  setString(string=>string='')
};
function dell()
{
  if(calc.length===0)
  return;
  else
  {
  setcalc(calc=>calc=calc.slice(0,-1));
  }
};
const update=(value)=>{
  if(
    (op.includes(value)&&calc==='')||(op.includes(value)&&op.includes(calc.slice(-1)))
  )
  {return}
  setcalc(calc+value);
  if(!op.includes(value))
  setString(eval(calc+value).toString());
  
}
function anss(){
  console.log({calc});
  setcalc(eval(calc).toString());
  // const t=calc;
  // console.log({t});
  // setcalc(eval(calc).toString());
}
  return (
    <div className="bi">
      <h1 className="heading">Basic Calculator</h1>
      <div className="box">
      <div className="output">
      <div>{string||0}</div>
      <div>{calc||0}</div>
      </div>
      <div className="boxxx">
      <button className="xyz" onClick={()=>update('(')}>(</button>
      <button className="xyz" onClick={()=>update(')')}>)</button>
      <button className="xyz" onClick={clear}>AC</button>
      <button className="xyz" onClick={dell}>DEL</button>
      <button className="xyz" onClick={()=>update('7')}>7</button>
      <button className="xyz" onClick={()=>update('8')}>8</button>
      <button className="xyz" onClick={()=>update('9')}>9</button>
      <button className="xyz" onClick={()=>update('/')}>/</button>
      <button className="xyz" onClick={()=>update('4')}>4</button>
      <button className="xyz" onClick={()=>update('5')}>5</button>
      <button className="xyz" onClick={()=>update('6')}>6</button>
      <button className="xyz" onClick={()=>update('*')}>X</button>
      <button className="xyz" onClick={()=>update('1')}>1</button>
      <button className="xyz" onClick={()=>update('2')}>2</button>
      <button className="xyz" onClick={()=>update('3')}>3</button>
      <button className="xyz" onClick={()=>update('-')}>-</button>
      <button className="xyz" onClick={()=>update('.')}>.</button>
      <button className="xyz" onClick={()=>update('0')}>0</button>
      <button className="xyz" onClick={anss}>=</button>
      <button className="xyz" onClick={()=>update('+')}>+</button>
      </div>
      </div>
    </div>
  );
}

export default App;
