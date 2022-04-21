import styled from "styled-components"

export const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtoApp = styled.button`
    font-family: 'Courier New', Courier, monospace;
    font-size: 26px;
    padding: 12px;
    font-weight: bold;
    border-radius: 25px;
    background-color: #90E0EF;
    color: #03045E;
    border: solid 3px #023E8A;
    cursor: pointer;
    width: fit-content;

    &:hover{
        transform: translateY(6px);
        background-color: #90E0EFBB;
        color: #03045EBB;
    }
`

export const TitleApp = styled.div`
    text-align: center;
    color: white;
    font-size: 3rem;
    padding: 16px;
`

export const TextApp = styled.div`
    text-align: center;
    color: white;
    font-size: 1.4rem;
    padding: 16px;

    &>a{
        color: #90E0EF;
    }
`