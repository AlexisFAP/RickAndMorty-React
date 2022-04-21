import React from "react";
import InputSearch from "./InputSearch";
import { Link } from "react-router-dom";

import { ContainerNavbar, NavbarText } from "./style/Navbar.element";

import { BsFillHouseDoorFill } from "react-icons/bs";

function Navbar(){
    return <ContainerNavbar>
        <Link to="/"><NavbarText> <BsFillHouseDoorFill></BsFillHouseDoorFill> <div>HOME</div></NavbarText></Link>
        <InputSearch/>
    </ContainerNavbar>
}

export default Navbar;