import React, { useState,useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";


export default function Character(props) {
const [peoples, setPeoples] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            console.log(response.data.results)
            setPeoples(response.data.results)
        })
        .catch(error => {
            console.log("Error is found with data", error)
        })
    }, [])

    return (
        <div className="container">
            {peoples.map(people => {
                return (
                <CharacterCard 
                key = {people.id}
                name = {people.name}
                height = {people.height}
                gender = {people.gender}
                />
                )
            })}
        </div>
    )
}

