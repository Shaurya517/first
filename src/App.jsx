import { useState , useEffect} from 'react'
import './App.css'

function App() {
  
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const [timer, setTimer] = useState(0); 
  const [on, setOn] = useState(false);  
  useEffect(() => {
    document.title = date;
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []); 
  const tick = () => {
    setDate(new Date().toLocaleTimeString());
  };


  useEffect(() => {
    let interval;
    if (on) { 
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [on]);

  const onReset = () => {
    setOn(false);
    setTimer(0);
  };
  
  return (
   <div>
      <h1>Watch</h1>
      <h2>{date}</h2>
      <hr />
      <h2>Stopwatch</h2>
      <h2>{timer}s</h2>
      
      {!on && <button onClick={() => setOn(true)}>Start</button>}  
      
      {on && <button onClick={() => setOn(false)}>Stop</button>}

      <button disabled={timer === 0} onClick={onReset}>Reset</button>
    </div>
   
  )
}

export default App