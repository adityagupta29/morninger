import Advice from './Advice';
import React, {
  useEffect,
  useState
} from "react";

function App() {
  const [user, setUser] = useState("Loading...");
  
  const getData = () => {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      setUser(data.slip.advice);
    });
  } 

  useEffect(() => { 
    getData();
  }, [user]);

  return ( 
    <div>
      < Advice data = {user} onChange= {getData} /> 
    </div>
  );
}

export default App;