
import './App.css';
import NavBar from './components/navbar';
import News from './components/news';
import React, { Component } from 'react'
import {
  Route
} from "react-router-dom";
// import { NavHashLink } from 'react-router-hash-link';

export default class App extends Component {
  pageSize = 8;
  render() {
    return (
      <>
        <div>


          <NavBar />
          {/* <News key="home" pageSize={this.pageSize} country="in" category="general" /> */}
          <Route exact path="/"> <News key="home" pageSize={this.pageSize} country="in" category="general" /></Route>
          <Route path="/business"> <News key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
          <Route path="/entertaiment"> <News key="entertaiment" pageSize={this.pageSize} country="in" category="entertainment" /></Route>
          <Route path="/health"> <News key="health" pageSize={this.pageSize} country="in" category="health" /></Route>
          <Route path="/sports"> <News key="sports" pageSize={this.pageSize} country="in" category="sports" /></Route>
          <Route path="/science"> <News key="science" pageSize={this.pageSize} country="in" category="science" /></Route>
          <Route path="/technology"> <News key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>



          {/* <div id='home'> <News key="home" pageSize={this.pageSize} country="in" category="general" /></div>
            <div id='bus'> <News key="business" pageSize={this.pageSize} country="in" category="business" /></div>
            <div id='ent'> <News key="entertaiment" pageSize={this.pageSize} country="in" category="entertainment" /></div>
            <div id='hlth'> <News key="health" pageSize={this.pageSize} country="in" category="health" /></div>
            <div id='spo'> <News key="sports" pageSize={this.pageSize} country="in" category="sports" /></div>
            <div id='sci'> <News key="science" pageSize={this.pageSize} country="in" category="science" /></div>
            <div id='tech'> <News key="technology" pageSize={this.pageSize} country="in" category="technology" /></div> */}


        </div >
      </>
    )
  }
}

