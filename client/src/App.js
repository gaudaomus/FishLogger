import React, {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [test, setTest] = useState();
  useEffect(() => {
    callAPI().then(res => {
      setTest(res.data.test); 
      console.log(res);
    })
  })
  const callAPI = async () => {
    const response = await axios.get("/test");
    return response;
  }
  return (
    <div className="App">
      {test}
    </div>
  );
};

export default App;