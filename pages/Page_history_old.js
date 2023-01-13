// import React, { Component }  from 'react';
// import {useState} from 'react';
// import './Page_history.css';
// import Axios from 'axios';


// function Page_history() {

//     // const [name, setName] = useState("");
//     // const [age, setAge] = useState(0);
//     // const [country, setCountry] = useState("");
//     // const [position, setPosition] = useState("");
//     // const [wage, setWage] = useState(0);

//     const [weatherList, setWeatherList] = useState([]);

//     // const displayInfo = () => {
//     //     console.log(name + age + country + position + wage);
//     // }

//     // const addEmployee = () => {
//     //     Axios.post('http://localhost:3001/create',  {
//     //         name: name, 
//     //         age:age, 
//     //         country:country, 
//     //         position:position, 
//     //         wage:wage
//     //     }).then(()=> {
//     //         console.log('success');
//     //     });
//     // };

//     const getWeather = () => {
//         Axios.get('http://localhost:3001/weather').then((response)=> {
//             console.log(response);
//             setWeatherList(response.data);
//         });

//     };

//     return (
//         <div className="information">
//             <div className="employees">
//                 <button onClick = {getWeather}>Show Weather</button>

//                 {weatherList.map((val, key) => {
//                     return (
//                     <div className="weather"> 
//                         <h3>snow_accumulation: {val.snow_accumulation} </h3>
//                         <h3>ice_accumulation: {val.ice_accumulation} </h3>
//                         <h3>temperature: {val.temperature} </h3>
//                     </div>)
//                 })}
                
//             </div>
//         </div>
        
//     )
// }

// export default Page_history
