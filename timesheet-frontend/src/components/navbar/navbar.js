
import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, Redirect } from "react-router-dom";
import { connect } from 'react-redux';



class NavBar extends Component  {

  logout = (e) => {
    e.preventDefault();
    console.log("remove")
    window.sessionStorage.removeItem("user");
    window.sessionStorage.removeItem("userID");
    window.sessionStorage.removeItem("JWT");
    window.location.href='http://localhost:3000/beaconfire';
  }

  render() {
    return (
      <Navbar>
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
          <Nav.Item>
            <Link className="navbar-brand m-0" to="/summary">
              <img src='https://www.linkpicture.com/q/Logo_BeaconFire.png' type="image" padding='10px' />
            </Link>
          </Nav.Item>
          

          <Nav.Item>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="/summary">
                  Summary
                </NavLink>
                <NavLink className="nav-item nav-link" to="/timesheet">
                  Timesheet
                </NavLink>
                <NavLink className="nav-item nav-link" to="/profile">
                  Profile
                </NavLink>
              </div>
            </div>
            
          </Nav.Item>

          <Nav.Item></Nav.Item>
          <Nav.Item></Nav.Item>
          <Nav.Item></Nav.Item>
          <Nav.Item></Nav.Item>
          <Nav.Item></Nav.Item>
          <Nav.Item></Nav.Item>
          <Nav.Item></Nav.Item>

          
          <Nav.Item>
            <button className="btn btn-outline-secondary" onClick={ (e) => this.logout(e)}> 
              LOG OUT AS {this.props.username}
            </button>
          </Nav.Item>
          
          
          <Nav.Item></Nav.Item>
        </nav>
      </Navbar>
      
    )
  }
}
  


const mapStateToProps = (state) => {
    return {
        username : state.username
    }
}


export default connect(mapStateToProps)(NavBar);