import React, { useEffect } from "react";
import axios from "axios";

const CharData (props){
useEffect( () => {
    axios
    .get(`https://henry-mock-swapi.herokuapp.com/api`)
    .then(response => { props.data(response.data.results) })
    .catch(error => console.log('Unexpected Error: ', error))

},[])
return (
    <div></div>
)
}

export default CharData;