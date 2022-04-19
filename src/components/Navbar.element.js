import styled from "styled-components";

export const ContainerNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    
    &>a{
        text-decoration: none;
    }

    &>div{
        margin-left: 10px;
    }
`

export const NavbarText = styled.div`
    font-family: 'Courier New', Courier, monospace;
    font-size: 26px;
    padding: 5px 20px;
    font-weight: bold;
    font-style: italic;
    color: white;
    width: fit-content;
    display: flex;
    align-items: flex-start;

    &:hover{
        border-radius: 25px;
        background-color: #90E0EF;
        color: #03045E;
    }

    &>div{
        margin-left: 10px;
    }
`