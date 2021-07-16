import React, {useState} from 'react'
import styled from 'styled-components'

const Character = (props) => {
    const [expand, setExpand] = useState(false)
    
    const { char } = props

    function toggleExpand(){
        setExpand(!expand)
    }
    const Style = styled.div`
    display:flex;
    flex-flow:column nowrap;  
    justify-content: center;
    text-align: center;
    align-items: center;
    border: 1px solid black;
    width: 100%;

    
    .nodisplay{
        display:none;
    }

    h2 {
    color:white;
    }
    `

    return(
        <Style>
            <div classname = "name"> <h2>{char.name}</h2> </div>
            <div className = 'display'/>
            <div>{char.gender}</div>
            <div>{char.height}</div>
            <div>{char.mass}</div>
            <div>{char.birth_year}</div>
            <div>{char.eye_color}</div>
            <div>{char.hair_color}</div>
            <div>{char.skin_color}</div>
        </Style>
    )
}
//            <button onClick = {toggleExpand}>test</button>
//<div className = {expand === true?'display':'nodisplay'} onClick = {toggleExpand}>
export default Character

