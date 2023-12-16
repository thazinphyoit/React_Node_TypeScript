import React, {useState, useEffect} from 'react';


function App() {
  const [data, setData] = useState({message:""});
  useEffect(()=>{
    fetch("http://localhost:3001/")
    .then(res=>res.json())
    .then(resData=>setData(resData))
    .catch(err=>console.log(err))
  }, [])
  return (
    <div className="App">
      {data.message}
    </div>
  );
}

export default App;
