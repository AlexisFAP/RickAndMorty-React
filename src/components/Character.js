import React from "react";

import { useNavigate } from "react-router-dom";

import { ContainerCharacter, ImgCharacter, TextCharacter, TextContainerCharacter } from "./style/Character.element";

function Character(props) {
    const navigate = useNavigate();

    return <ContainerCharacter onClick={() => navigate(`/character/${props.character.id}`)}>
        <TextContainerCharacter>
            <TextCharacter><u>ID:</u> {props.character.id}</TextCharacter>
            <TextCharacter><u>Name:</u> {props.character.name}</TextCharacter>
            <TextCharacter><u>Status:</u> {props.character.status}</TextCharacter>
            <TextCharacter><u>Specie:</u> {props.character.species}</TextCharacter>
            <TextCharacter><u>Type:</u> {props.character.type}</TextCharacter>
            <TextCharacter><u>Gender:</u> {props.character.gender}</TextCharacter>
        </TextContainerCharacter>
        <ImgCharacter src={props.character.image}></ImgCharacter>
    </ContainerCharacter>
}

export default Character;