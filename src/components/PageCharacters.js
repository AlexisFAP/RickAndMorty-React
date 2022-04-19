import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Characters from './Characters'
import Pagination from "./Pagination";

function PageCharacters() {
    const [ characters, setCharacters ] = useState();
    const { pageN } = useParams();    

    const container = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        background: '#0077b6'
    }

    const fetchApi = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageN}`);
        const json = await response.json();
        json.results.map( x => x.type === "" ? x.type = "unkown":'');
        setCharacters(json.results)
      }
    
      useEffect( () => { 
        fetchApi();
      }, [pageN])

    return <div>
        <div style={container}>{ !characters ? <h1>Loading ...</h1> : <Characters characters={characters}/>}</div>
        <Pagination/>
    </div>
     
}

export default PageCharacters;