import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import CreateLabtest from './components/CreateLabtest';
import EditLabtest from './components/EditLabtest';
import Home from './components/Home';
import NavBar from './components/NavBar';
import LabtestDetails from './components/LabtestDetails';


export default class App extends Component{
  render(){
      return(
          <BrowserRouter>
          <div className="container">
              <NavBar/>
              <Route path="/" exact component={Home}></Route>
              <Route path="/add" component={CreateLabtest}></Route>
              <Route path="/edit/:id" component={EditLabtest}></Route>
              <Route path="/labtest/:id" component={LabtestDetails}></Route>
              
          </div>
          </BrowserRouter>
      )
  }
}