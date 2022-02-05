import React from 'react'
import logo from '../source/clear sky.png';

export default function Card({city,img,des,speed,temp,hum}) {
    return (
        <>
        <div class="weather col-md-6 col-lg-6 col-sm-12">
        <div class="group">
            <h1>Today weather report</h1>
            <img  id="img" src={img===""?logo: img }width="200px" height="200px" alt="img"/><br/>
            <span>{city===""?"City":city}</span><br/>
            <span id="dis">{des===""?"clearsky": des}</span>
            <span id="temp">{temp===""? 28:temp}&deg;c</span><br/>
            <span id="speed">{speed===""?4:speed} mph</span>
            <span  id="hum">&#x1F321;humidity {hum===""?8:hum}</span>
        </div>
    </div>
   </>
    )
}
