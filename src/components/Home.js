import React from 'react';
import pic1 from './../pics/covid/pic1.jpg';
import pic2 from './../pics/covid/pic2.jpg';
import pic3 from './../pics/covid/pic3.jpg';
import './Home.css';

export default function Home() {
    return (
        <div className="pt-4">
            <div id="carouselExampleCaptions"  className="carousel slide carousel-fade mx-auto" data-bs-ride="carousel">
            <div  className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"  className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div  className="carousel-inner">
            <div  className="carousel-item active">
            <img src={pic1}  className="d-block w-100" alt="..." height="500px" />
            <div  className="carousel-caption d-none d-md-block">
            <h5>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.</h5>
            </div>
            </div>
            <div  className="carousel-item">
            <img src={pic2}  className="d-block w-100" alt="..." height="500px"/>
            <div  className="carousel-caption d-none d-md-block">
            <h5>Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment</h5>
            </div>
            </div>
            <div  className="carousel-item">
            <img src={pic3}  className="d-block w-100" alt="..." height="500px"/>
            <div  className="carousel-caption d-none d-md-block">
            <h5>Do vacinate and stop spreading corona virus</h5> 
             </div>
            </div>
            </div>
            <button  className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span  className="visually-hidden">Previous</span>
            </button>
            <button  className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span  className="carousel-control-next-icon" aria-hidden="true"></span>
            <span  className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}
