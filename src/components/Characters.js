// Write your Character component here
import styled from "styled-components";
import React from "react";
import Character from './Character'

const Characters = (props) =>{

    const{characters} = props
    console.log(characters)
    
    
    return(
        <div classname = 'character-wrapper'>
            {characters.map(char =>
            <Character key = {char.id} name = {char.name} char = {char}/>)}
        </div>
    )
}
export default Characters

