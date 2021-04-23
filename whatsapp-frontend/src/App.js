import React, { useState } from "react";
import "./App.css";
import { Sidebar, Chat, Login, Formal, Profile } from "./components";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [profilebar, setProfileBar] = useState(false);
  const addUser = (User) => {
    setUser(User);
  };
  return (
    <div className="App">
      {!user ? (
        <Login addUser={addUser} />
      ) : (
        <div className="app_body">
          <Router>
            <Sidebar user={user} setProfileBar={setProfileBar} />
            {profilebar && (
              <Profile user={user} setProfileBar={setProfileBar} />
            )}
            <Switch>
              <Route exact path="/">
                <Formal />
              </Route>
              <Route path="/rooms/:roomId/:seed">
                <Chat user={user} />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
