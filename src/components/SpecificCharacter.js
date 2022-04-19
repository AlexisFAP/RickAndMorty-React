import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ContainerSpecific, TextContainerSpecific, TextSpecific, TextBoxSpecific, ImgSpecific } from "./SpecificCharacter.element";

function SpecificCharacter() {
    const [ person,setPerson ] = useState();
    const [ origin,setOrigin ] = useState();
    const [ location,setLocation ] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    const fetchApi = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const json = await response.json();
        setPerson(json)
        if(json.origin.url !== '') {
            const response2 = await fetch(`${json.origin.url}`);
            const json2 = await response2.json();
            setOrigin(json2)
        }
        if(json.location.url !== '') {
            const response2 = await fetch(`${json.location.url}`);
            const json2 = await response2.json();
            setLocation(json2)
        }
    }

    useEffect( () => {
        fetchApi();
    }, [id])

    return <div>{!person ? <h1>Loading... </h1> : person.error === "Character not found" ? navigate('/') :
        <ContainerSpecific>
                <TextContainerSpecific>
                    <TextSpecific><TextBoxSpecific>ID:</TextBoxSpecific> {person.id}</TextSpecific>
                    <TextSpecific><TextBoxSpecific>Name:</TextBoxSpecific> {person.name}</TextSpecific>
                    <TextSpecific><TextBoxSpecific>Status:</TextBoxSpecific> {person.status}</TextSpecific>
                    <TextSpecific><TextBoxSpecific>Specie:</TextBoxSpecific> {person.species}</TextSpecific>
                    <TextSpecific><TextBoxSpecific>Type:</TextBoxSpecific> {!person.type ? 'unknown' : person.type}</TextSpecific>
                    <TextSpecific><TextBoxSpecific>Gender:</TextBoxSpecific> {person.gender}</TextSpecific>

                    <TextSpecific><TextBoxSpecific>Origin:</TextBoxSpecific> {person.origin.name}</TextSpecific>
                    { !origin ? <div></div> : 
                        <div>
                            <TextSpecific><u>Origin-ID:</u> {origin.id}</TextSpecific>
                            <TextSpecific><u>Origin-Name:</u> {origin.name}</TextSpecific>
                            <TextSpecific><u>Origin-Type:</u> {origin.type}</TextSpecific>
                            <TextSpecific><u>Origin-Dimension:</u> {origin.dimension}</TextSpecific>
                            <TextSpecific><u>Origin-Residents:</u> {origin.residents.length}</TextSpecific>
                            <TextSpecific><u>Origin-Created:</u> {origin.created}</TextSpecific>
                        </div>
                    }

                    <TextSpecific><TextBoxSpecific>Location:</TextBoxSpecific> {person.location.name}</TextSpecific>
                    { !location ? <div></div> : 
                        <div>
                            <TextSpecific><u>Location-ID:</u> {location.id}</TextSpecific>
                            <TextSpecific><u>Location-Name:</u> {location.name}</TextSpecific>
                            <TextSpecific><u>Location-Type:</u> {location.type}</TextSpecific>
                            <TextSpecific><u>Location-Dimension:</u> {location.dimension}</TextSpecific>
                            <TextSpecific><u>Location-Residents:</u> {location.residents.length}</TextSpecific>
                            <TextSpecific><u>Location-Created:</u> {location.created}</TextSpecific>
                        </div>
                    }

                    <TextSpecific><TextBoxSpecific>Appearance in Episodes:</TextBoxSpecific> {person.episode.length}</TextSpecific>
                    <TextSpecific><TextBoxSpecific>Created:</TextBoxSpecific> {person.created}</TextSpecific>
                </TextContainerSpecific>
                <ImgSpecific src={person.image}></ImgSpecific>
        </ContainerSpecific>}
    </div>
}

export default SpecificCharacter;