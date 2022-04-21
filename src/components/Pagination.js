import React, { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

import { Container, ButtonNavigation, TextNavigation } from './style/Pagination.element';

function Pagination() {
    const { pageN } = useParams();
    const navigate = useNavigate();
    const [ number, setNumber ] = useState() 

    const fetchApi = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character`);
        const json = await response.json();
        setNumber(json.info.pages)
    }
    
    useEffect( () => { 
        fetchApi();
      }, [])

    return <div>
        <Container>
            <ButtonNavigation onClick={() => navigate(`/page/${!pageN ? '1' : pageN > 1 ? pageN -1 : 1}`)}> <BsFillArrowLeftCircleFill/> </ButtonNavigation>
            <TextNavigation> {!pageN ? '1' : pageN} </TextNavigation>
            <ButtonNavigation onClick={() => navigate(`/page/${!pageN ? '1' : pageN < number ? parseInt(pageN) + 1 : number}`)}> <BsFillArrowRightCircleFill/> </ButtonNavigation>
        </Container>
    </div>
}

export default Pagination;