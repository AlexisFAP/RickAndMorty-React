import styled from "styled-components";

export const ContainerSpecific = styled.div`
    display: flex;
    border-radius: 20px;
    border: 5px #023E8A solid;
    text-align: left;
    padding: 12px;
    margin: 0 auto;
    flex-direction: row;
    width: max-content;
    background-color: #48CAE4;
`

export const TextContainerSpecific = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6px;
    margin: 6px;
`

export const TextSpecific = styled.div`
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-style: italic;
    font-size: 23px;
    line-height: 125%;
    padding: 6px;
    margin: 6px;
    color: black;
    width: 350px;
    display: flex;
    align-items: center;
    text-align: left;
`

export const TextBoxSpecific = styled.div`
    border: solid 2px #023E8A;
    border-radius: 10px;
    width: fit-content;
`

export const ImgSpecific = styled.img`
    border-radius: 20px;
    box-shadow: 8px 8px 3px #023E8A;
    padding: 1px;
    margin: 3px;
    max-height: 400px;
`