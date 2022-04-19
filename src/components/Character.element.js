import styled from "styled-components";

export const ContainerCharacter = styled.div`
    background: #023E8A;
    border-radius: 20px;
    border: 5px #00B4D8 solid;
    text-align: left;
    padding: 12px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    width: max-content;
    cursor: pointer;
`

export const TextContainerCharacter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6px;
    margin: 6px;
`

export const TextCharacter = styled.div`
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-style: italic;
    font-size: 23px;
    line-height: 125%;
    padding: 6px;
    margin: 6px;
    color: white;
    width: 350px;
`

export const ImgCharacter = styled.img`
    border-radius: 20px;
    box-shadow: 8px 8px 3px #90E0EF;
    padding: 1px;
    margin: 3px;
`