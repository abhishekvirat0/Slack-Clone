import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  // BEM  naming convention

  // const [user, setUser] = useState(null);
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">

      <Router>
        {!user ? (
          <h1><Login/> </h1>
        ) : (
            <>
              {/* Header */}
              <Header />
              <div className="app__body">

                {/* Sidebar */}
                <Sidebar />

                {/* React Router -> chat screen */}

                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h2>Welcome</h2>
                  </Route>
                </Switch>

              </div>

            </>
          )}
      </Router>






    </div>
  );
}

export default App;
