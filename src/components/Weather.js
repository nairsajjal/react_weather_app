import React from "react";
var imgStyle = {
	height: '100px' ,width:'100px' ,position: 'relative', right: '-25px', bottom: '10px'
}


const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 	
	 	props.icon && <p className="weather__key"> Icon: 
	 	<span className="weather__value"> <img src={require('../icons/'+props.icon+'.png')} alt="icon" style={imgStyle}/></span>
	 </p> 
	 }
	 
	 
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	 
	</div>
);

export default Weather;