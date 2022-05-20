import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Header from './Components/Header'; 
import styled from 'styled-components';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App">
      <Router>
      <>
       <Header />
         <AppBody>
           <SideBar />
           <Switch>
             <Route path="/" exact>
            
             </Route>
            </Switch>
          </AppBody>
      </>
       
      </Router>
       
    
    </div>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;
  `;
