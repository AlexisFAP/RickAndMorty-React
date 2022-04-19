import React from "react";

import Character from "./Character";

function Characters(props) {
  return props.characters.map( character => <Character  character={character} key={character.id}/>)
}

export default Characters;