import React from 'react';

import { dataLcdp } from './Data';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="App">
      <Slider {...settings}>
      {
        dataLcdp.map(item=>{
          return (
<div className='card'>
            <div className='card-top'>
              <img src={item.image} />
              <h1>{item.title}</h1>
            </div>
            <div className='card-bottom'>
              <h6>{item.Description}</h6>
            </div>
          </div>
          )
          
        })
      }
      </Slider>
    </div>
  );
}

export default App;
