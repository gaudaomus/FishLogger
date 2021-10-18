import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Log from "./components/Log";
import Review from "./components/Review";
import SignIn from "./components/SignIn";
//import axios from "axios";

function App() {
  // const [test, setTest] = useState();
  // useEffect(() => {
  //   callAPI().then(res => {
  //     setTest(res.data.test);
  //     console.log(res);
  //   })
  // })
  // const callAPI = async () => {
  //   const response = await axios.get("/test");
  //   return response;
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/log">
            <Log />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
