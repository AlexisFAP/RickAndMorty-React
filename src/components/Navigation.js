import styledComponents from "styled-components";

export const Container = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0077b6;
`
export const ButtonNavigation = styledComponents.button`
    border-radius: 10px;
    font-size: 1.2rem;
    background-color: #00B4D8;
    color: white;
    cursor: pointer;
    border: solid 5px #023E8A;
    margin: 10px;
    padding: 5px 10px;
`

export const TextNavigation = styledComponents.div`
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #00B4D8;
    color: white;
    border: solid 5px #023E8A;
    margin: 10px;
    padding: 5px 10px;
`