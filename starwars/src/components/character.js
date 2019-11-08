import React, { useState } from "react";
import Card from "./card";
import axios from "axios";

export default function character() {
const [data, setData] = useState([])
    const [gender, setGender] = useState("male")

    useEffect(() => {
        axios.get(`https:swapi.co/api/people/`)
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(error => {
            console.log("Error is found with data", error)
        })
    }, [])

    return(
        <div className='container'>
            <button onClick={() => setGender('male')}>Male</button>
            <button onClick={() => setGender('female')}>Female</button>
            <div className="info">
                {data.map((datas,index) => {
                    return <Card key={index} gender={gender}/>
                })} 
            </div>
        </div>
    );
}

