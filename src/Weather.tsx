import React from 'react';



const Weather = (props:Location) =>
console.log(props);

//const [ wResults, setwResults ] = ([])

const fetchTemp = () => {
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=2e9c26310e35779ccc605d268785175f`

fetch(url)
.then(res => res.json())
.then(data => setwResults(data.main.temp))
.catch(err => console.log(err)); 



const handleSubmit = (event) => {
event.preventDefault();
fetchTemp();
 }


return
      (
      <div>
   {
  <h3>{wResults}</h3>
    }
   </div>             )

 };




export default Weather;