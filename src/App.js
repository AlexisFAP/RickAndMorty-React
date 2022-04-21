import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

import { ContainerApp, ButtoApp, TitleApp , TextApp} from './components/style/App.element';

function App() {
  const navigate = useNavigate();
  return <ContainerApp>
      <TitleApp>Rick and Morty Api by Alexis Patiño</TitleApp>
      <TextApp>
        This page was created by me (Alexis Patiño Agudelo) with the API <a target="_blank"  href="https://rickandmortyapi.com/">https://rickandmortyapi.com/</a>. <br/>
        You can see here all the characters of the serie Rick and Morty with all of their details.
      </TextApp>
      <TitleApp>About Me, Alexis Patiño Agudelo</TitleApp>
      <TextApp>
        Hi, i'm Alexis a System Engineering Student of the University of Medellín, <br/>
        i like building Web Apps, and in the last year i learn react and this app <br/> 
        is a form to show my skills with the framework. <br/>
        You can also view my other projects in my repository <a target="_blank" href="https://github.com/AlexisFAP">https://github.com/AlexisFAP</a>
      </TextApp>
      <ButtoApp onClick={() => navigate('/page/1')}>Show Characters</ButtoApp>
  </ContainerApp>
}

export default App;
