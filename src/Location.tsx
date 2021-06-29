import React from 'react';


class Location extends React.Component {
constructor(props: number) {
 super(props);
  this.state = {
       lat: '',
      lng: '',
   };
}
 getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getCoords)
    } else {
       alert('GeoLocation not enabled');
   }
 }
 getCoords = pos => {
    console.log(pos)
    this.setState({
        lat: pos.coords.latitude,
        lng: pos.coords.longitute
  })
 }
 render() {
  return (
      <div>
        <button onClick={this.getLocation}>Click me</button>
            <p>lat: {this.state.lat}</p>
             <p>long: {this.state.lng}</p>
        </div>
   )
 }



}

export default Location; 





// const Location = () => {
//     const [lat, setLat] = useState(null);
//     const [lng, setLng] = useState(null);
//     const [status, setStatus] = useState(null);

//     const getLocation = () => {
//         if (!navigator.geolocation) {
// 			setStatus('Geolocation is not supported by your browser');
// 		} else {
//             setStatus('Locating...');
//             navigator.geolocation.getCurrentPosition((position) => {
//                 setStatus(null);
//                 setLat(position.coords.latitude);
//                 setLng(position.coords.longitude);
//             }, () => {
//                 setStatus('Unable to retrieve your location');
//             });
//         }
//     }

// 	return (
// 		<div className="App">
// 			<button onClick={getLocation}>Get Location</button>
// 			<h1>Coordinates</h1>
//             <p>{status}</p>
// 			{lat && <p>Latitude: {lat}</p>}
// 			{lng && <p>Longitude: {lng}</p>}
// 		</div>
// 	);
// }