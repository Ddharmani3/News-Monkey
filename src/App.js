
import './App.css';
import NavBar from './components/navbar';
import News from './components/news';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=8;
  render() {
    return (
      <>
        <div>
          <Router>
            <NavBar/> 

            <Routes>
              <Route exact path="https://ddharmani3.github.io/News-Monkey/"element={<News key="home" pageSize={this.pageSize} country="in" category="general" />}/>
              <Route exact path="https://ddharmani3.github.io/News-Monkey/business"element={<News key="business" pageSize={this.pageSize} country="in" category="business" />}/>
              <Route exact path="https://ddharmani3.github.io/News-Monkey/entertainment"element={<News key="entertaiment" pageSize={this.pageSize} country="in" category="entertainment" />}/>
              <Route exact path="https://ddharmani3.github.io/News-Monkey/health"element={<News key="health" pageSize={this.pageSize} country="in" category="health" />}/>
              <Route exact path="https://ddharmani3.github.io/News-Monkey/sports"element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />}/>
              <Route exact path="https://ddharmani3.github.io/News-Monkey/science"element={<News key="science" pageSize={this.pageSize} country="in" category="science" />}/>
              <Route exact path="https://ddharmani3.github.io/News-Monkey/technology"element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />}/>
            </Routes>

          </Router>
        </div >
      </>
    )
  }
}

