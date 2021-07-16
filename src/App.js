import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(response => {
      setData(response.data)
      console.log(response.data)
    })
    .catch(err =>
    console.log(err)
  )},)
    console.log(data)

    const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;`
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container>
    <div className="App">
    <h1 className="Header">Characters</h1>
      <Characters characters={data}/>
    </div>
    </Container>
  );
}

export default App;
