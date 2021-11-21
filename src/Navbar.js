import React from 'react';
import { Link } from 'react-router-dom';
import covidlogo from './pics/covid-19.svg';
import technologyimg from './pics/technology.png';
import './Navbar.css';

export default function Navbar() {
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
            <img src={covidlogo} height="28" alt="CoolBrand" />&nbsp;&nbsp;<b>Covid-19 <span class="badge rounded-circle bg-danger">SOS</span></b>
            </Link> 
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">    
            <div className="navbar-nav ms-auto">
                <Link className={(navData) => navData.isActive ? "active" : "" } to="/" className="nav-item nav-link">Home</Link>
                <Link className={(navData) => navData.isActive ? "active" : "" } to="strategies" className="nav-item nav-link">Strategies</Link> 
                <a href="#" className={(navData) => navData.isActive ? "active" : "" } className="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">About</a>
            </div>
        </div>
    </div>
</nav>
 
<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog  modal-dialog-centered">
  <div className="card p-2 "> 
    <div className="modal-content">
      <div className="modal-header  bg-success text-white">
        <h5 className="modal-title text-center" id="exampleModalLabel">About Site :)</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <div id="modal-body-text">
                This is the site to show covid-19 information and to make awaverness. <hr />
                 <p>Below Technologies are used to make this site :</p>
                 <div className="row">
                     <div className="col-6">
                        <ul>
                            <li>React JS</li>
                            <li>Bootstrp 5</li>
                            <li>React Material UI</li>
                            <li>Real time Covid-19 API</li>
                        </ul>
                     </div>
                     <div className="col-6">
                        <img src={technologyimg} className="technologyimgpic" alt="tech"/>
                     </div> 
                </div>
       </div>
      </div>
      <div className="modal-footer" style={{fontSize:'12px'}}> 
        <p>Copyright &copy; 2021</p>
      </div>
    </div>
  </div>
  </div>
</div>
        </div>
    )
}
