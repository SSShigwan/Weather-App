// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Weather = () => {
//   const [user, setUser] = useState();
//   const [city, setCity] = useState(''); // State for city input

//   // Function to fetch data based on the city input
  

//     axios
//       .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`)
//       .then((res) => {
//         setUser(res.data); 
//         toast.success('Data fetched successfully!');
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error('Failed to fetch data');
//       });
//   }

//   const fetchWeatherData = () => {
//     if (!city) {
//       toast.error('Please enter a city');
//       return;
//     }
//     else{
//       {user.main.humidity}
//     }

//   useEffect(()=>{
//     e.preventDefault();
//     fetchWeatherData("ratnagiri");
//   },[])
//   const kelvinToCelsius = (tempK) => (tempK - 273.15).toFixed(2);
//   const kelvinToFahrenheit = (tempK) => ((tempK - 273.15) * 9/5 + 32).toFixed(2);

//   console.log(user);

//   return (
//     <div>
//       <h1>Weather API</h1>
//       <label htmlFor="city">Enter City Name</label> <br />
//       <input
//         type="text"
//         placeholder="Enter city: "
//         id="city"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={fetchWeatherData}>Enter</button>
//       <h2>
//         {user.name}
//       </h2>
//     </div>
//   );
// };

// export default Weather;

// import React, {useState, useEffect} from 'react'
// import axios from "axios";
// import logo from './Images/logo.png'
// import { toast } from 'react-toastify';


// const Weather = () => {

//   const [input, setInput]=useState([]);
//   const [city, setCity]=useState();

//   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`)
//        .then((res)=>{
//         setInput(res.data);
//         console.log(res.data);

//        })
//        .catch((err) => {
//         console.error(err);
//         toast.error('Failed to fetch data');
//         });

//       useEffect(()=>{
//         const fetchCityName = async()=>{
//           const cityName =await getCityName();
//           setCity(cityName);
//         };
//         fetchCityName();
//       },[city]);

//       const handleSearchChange = (e) => {
//         setSearch(e.target.value);
//       };

//       const handleSearchSubmit = (e) => {
//         e.preventDefault();
//         setCity(search); // Only set the city when form is submitted
//       };
      


//   return (
//     <div> <img src={logo} alt="" /> 
//       <div>
//         <label htmlFor="city">Enter city: </label>
//         <input type="text" onChange={handleSearchChange} value={city} />
//         <button onClick={handleSearchSubmit}>Enter</button>
//       </div>
//       <div>
//         {input.main.humidity}
//       </div>
//     </div>
//   )
// }

// export default Weather