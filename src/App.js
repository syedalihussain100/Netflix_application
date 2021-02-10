import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
 const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //  login
     dispatch(login({
       uid: userAuth.uid,
       name: userAuth.email
     }))
      } else {
        //  logout
        dispatch(logout())
      }
    });
    return unsubcribe
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
          <Route path="/profile"> 
          <ProfileScreen/>
          </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
