import 'bootstrap/dist/css/bootstrap.css';
import './Search.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';


export default function Search({ updateInfo }) {
    let [cityname, setcityname] = useState("Delhi");
    let input = document.querySelector("#search");
    let URL = import.meta.env.VITE_API_URL;
    let APPKEY = import.meta.env.VITE_WEATHER_API_KEY;

    async function handleWeatherData() {
        let fetching = await fetch(`${URL}q=${cityname}&appid=${APPKEY}&units=metric`)
        let response = await fetching.json();
        let result = {
            City: response.name,
            Temp: Math.floor(response.main.temp),
            MinTemp: Math.floor(response.main.temp_min),
            MaxTemp: Math.floor(response.main.temp_max),
            Pressure: response.main.pressure,
            Humidity: response.main.humidity,
            FeelsLike: Math.floor(response.main.feels_like),
            Visibility: response.visibility,
            Description: response.weather[0].main,
            Date: (new Date(response.dt * 1000).toUTCString())
        }
        console.log(result)
        return result
    }
    

    let searchInputOnChange = (e) => {
        cityname = e.target.value;
        setcityname(cityname)
    }

    let searchHandler = async (e) => {
        e.preventDefault();
        if (cityname === "") {
            alert("First enter the city")
        } else {
            let newInfo = await handleWeatherData()
            updateInfo(newInfo)
        }
        input.value = ""
        cityname = input.value
        setcityname(cityname)
    }
    

    return (
        <>
            <form className='searchform'>
                <TextField id="search" label="Search City" variant="outlined" size='small' color='primary' onChange={searchInputOnChange} />
                <button className="searchbtn btn btn-outline-primary" onClick={searchHandler} type='submit'>Search</button>
            </form>
        </>
    )
    
}