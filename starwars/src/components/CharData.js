import React, { useEffect } from 'react';
import axios from 'axios';

export default function CharData(props) {
    
    useEffect(() => {
        axios
            .get(`https://henry-mock-swapi.herokuapp.com/api`)
            .then(res => { props.data(res.data.results) })
            .catch(error => console.log('Unexpected Error: ', error))
    }, [])


    return (
        <div></div>
    )
}