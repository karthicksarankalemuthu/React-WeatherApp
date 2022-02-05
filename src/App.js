import Input from './components/input'
import Card from './components/card'
import './App.css';
import { useState } from "react";
import axios from 'axios';

function App() {
  const [input, setinput] = useState("")
  const [temp, settemp] = useState("")
  const[des,setdes] = useState("")
  const [speed, setspeed] = useState("")
  const [img, setimg] = useState("")
  const [hum, sethum] = useState("")
  const [city, setcity] = useState("")

  const findweather=async()=>{

     const key="d006878d86e335ab28e98a8f1064fb52";
     const url="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+key;
     const res=  await axios.get(url);
    
    const icon=res.data.weather[0].icon
    const  icon1="http://openweathermap.org/img/wn/"+icon+"@2x.png"
     setimg(icon1)
     setdes(res.data.weather[0].main)
     setspeed(res.data.wind.speed)
     settemp(res.data.main.temp)
     sethum(res.data.main.humidity)
     setcity(res.data.name)

     setinput("")
  }
  return (
    
    <>
    <div className="container-fulid">
      <div className="row">
      <h1 className="title">Weather App</h1>
      </div>
    
    <div className="row">
    <Input input={input} setinput={setinput} findweather={findweather}/>
     <Card city={city} img={img} des={des} speed={speed} temp={temp} hum={hum} />
     </div>
     </div>
    </>
  );
}

export default App;
