import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-hash-link';

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
            <Link className="navbar-brand" exact to="/">News Monkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" exact to="/">Home</Link>
                </li>
                
                <li className="nav-item"><Link className="nav-link" exact to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" exact to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" exact to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" exact to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" exact to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" exact to="/technology">Technology</Link></li>

                {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}



              </ul>
              {/* <div className="dropdown mx-1">
                <Link className="btn btn-primary dropdown-toggle " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {"Country"}
                </Link> */}

                {/* <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/" onClick={() => { this.setState = { country: "in" } }}>India</Link></li>
                  <li><Link className="dropdown-item" to="/" onClick={() => { this.setState = { country: "us" } }}>US</Link></li>
                  <li><Link className="dropdown-item" to="/" onClick={() => { this.setState = { country: "" } }}>World</Link></li>
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

