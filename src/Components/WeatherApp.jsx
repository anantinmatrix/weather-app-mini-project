import { useState } from 'react'
import Search from './Search'
import InfoBox from './InfoBox'
import './WeatherApp.css'

function WeatherApp() {
  let [weatherInfo, setweatherInfo] = useState({})
  let [background, setbackground] = useState(["src/assets/default.jpg"])
  let [onloadText, setonloadText] = useState("The Weather Hunt")
  let backgroungURL = [
    {
      clearDay: "public/assets/clear_day.jpg",
      rainyDay: "public/assets/rainy_day.jpg",
      winterDay: "public/assets/winter_day.jpg",
    },
    {
      clearNight: "public/assets/clear_night.jpg",
      rainyNight: "public/assets/rainy_night.jpg",
      winterNight: "public/assets/winter_night.jpg"
    }
  ]
  let choosebg = () => {
    let bg = weatherInfo.Description
    if (bg === "Clouds") {
      return backgroungURL[0].rainyDay;
    }
    else if (bg === "Clear" || bg === "Haze") {
      return backgroungURL[0].clearDay;
    }
    else {
      return "public/assets/default.jpg"
    }
  }
  let choosedBg = choosebg()
  let renderInfo = () => {
    document.querySelector(".onloadtext").classList.add("animate")
    document.querySelector(".weatherinfo").classList.add("show")
    document.querySelector(".right-part-info").classList.add("show")
  }

  let updateInfo = (newInfo) => {
    setweatherInfo(newInfo)
    renderInfo()
  }
  
  return (
    <div className="weatherappimg">
      <img src={choosedBg} alt="" />
      <div className='weatherapp'>
        <div className="left-part">
          <h1 className='onloadtext'>{onloadText}</h1>
          <InfoBox info={weatherInfo}/>

        </div>

        <div className="right-part">
          <Search updateInfo={updateInfo} />
          <div className="right-part-info">
            <h5>Feels Like: {weatherInfo.FeelsLike}&deg;</h5>
            <h5>Description : Seems like {weatherInfo.Description} today.</h5>
            <h5>Humidity : {weatherInfo.Humidity}</h5>
            <h5>Pressure : {weatherInfo.Pressure}</h5>
            <h5>Visibility : {weatherInfo.Visibility}</h5>
          </div>
        </div>


      </div>
    </div>

  )
}

export default WeatherApp