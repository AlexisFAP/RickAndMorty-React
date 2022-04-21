import styled from "styled-components";

export const ContainerInput = styled.div`
    align-items: center;
    right: 0;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 16px;
`

export const InputContainerInput = styled.input`
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    font-weight: bold;
    margin-right: 12px;
`

export const ButtonContainerInput = styled.button`
    font-size: 20px;
    color: #03045E;
    background-color: #90E0EF;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    padding: 4px 10px;
    
    &:hover{
        color: #023E8A;
        transform: scale(0.95);
    }
`