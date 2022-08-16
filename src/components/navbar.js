import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

// import { NavLink } from 'react-router-hash-link';

export class NavBar extends Component {
  static propTypes = {}

  country = "";

  constructor() {
    super();
    this.state = {
      country: this.country,
    }
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
          <div className="container-fluid">
            <NavLink className="navbar-brand" exact to="/">News Monkey</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                </li>
                
                <li className="nav-item"><NavLink className="nav-link" exact to="/business">Business</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" exact to="/ent">Entertainment</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" exact to="#hlth">Health</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" exact to="#spo">Sports</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" exact to="#sci">Science</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" exact to="#tech">Technology</NavLink></li>

                {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}



              </ul>
              {/* <div className="dropdown mx-1">
                <NavLink className="btn btn-primary dropdown-toggle " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {"Country"}
                </NavLink> */}

                {/* <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/" onClick={() => { this.setState = { country: "in" } }}>India</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/" onClick={() => { this.setState = { country: "us" } }}>US</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/" onClick={() => { this.setState = { country: "" } }}>World</NavLink></li>
                </ul> */}
              {/* </div> */}
              <form className="d-flex" role="search">
                <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

      </>
    )
  }
}

export default NavBar;

