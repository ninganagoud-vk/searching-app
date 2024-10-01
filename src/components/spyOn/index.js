'use client';

import React, { useEffect, useState } from "react";
import { fetchWeatherData} from '../../apis'

const WeatherData = () => {
  const [users, setUsers] = useState({})
  const [err, setErr] = useState('')

  
  useEffect(() => {
    fetchWeatherData()
      .then(data => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Failed to fetch weather data:', error);
      });
  }, []);

  return(
    <div>
       
        {err&&<p>{err}</p>}
            {users?.title??'err guru'}
    </div>
  )
}

export default WeatherData