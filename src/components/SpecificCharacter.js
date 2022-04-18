import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Character from "./Character";

function SpecificCharacter() {
    const navigate = useNavigate();
    const [ person,setPerson ] = useState();
    const { id } = useParams();

    const fetchApi = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const json = await response.json();
        setPerson(json)
        console.log(json)
    }

    useEffect( () => {
        fetchApi();
    }, [])

    return <div>{!person ? <h1>Loading... </h1> : <Character character={person}/>}</div>
}

export default SpecificCharacter;