import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ContainerInput, InputContainerInput, ButtonContainerInput } from "./style/InputSearch.element";
import {  BsSearch } from "react-icons/bs";

function InputSearch() {
    const [ searchC, setSearchC ] = useState(1)
    const navigate = useNavigate();

    const changeSearch = (e) => setSearchC(e.target.value)

    return <ContainerInput> 
        <InputContainerInput type="number" min="1" value={searchC} onChange={changeSearch}></InputContainerInput>
        <ButtonContainerInput onClick={() => navigate(`/character/${searchC}`)}> <BsSearch></BsSearch></ButtonContainerInput>
  </ContainerInput>
}

export default InputSearch;