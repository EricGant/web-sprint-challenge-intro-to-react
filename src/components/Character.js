import React, {useState, useEffect} from 'react'
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
    border-radius: 1rem;
    width: 100%;
    background-color: #828282;
    padding:6%;
    margin:1%;

    .display{
        line-height: 1.3;
    }

    
    .nodisplay{
        display:none;
    }



    .btn{
        background-color: #4f4f4f;
        border-radius: 1rem;
        border:1px solid black;
        margin: 0 0 1rem 0;
        color:#E1DDDD;
        &:hover {
            cursor: pointer;
            background-color:#161616;
            transition: 1s;
        }
    }
    
`

    return(
        <Style>
            <div classname = "name"> <h2>{char.name}</h2></div>
            <button className = 'btn' onClick = {toggleExpand}>Click to show Character Data</button>
            <div className = {expand === true?'display':'nodisplay'} onClick = {toggleExpand}>
            <div className = 'display'/>
            <div>Gender: {char.gender}</div>
            <div>Height: {char.height}</div>
            <div>Mass: {char.mass}</div>
            <div>Birth Year: {char.birth_year}</div>
            <div>Eye Color: {char.eye_color}</div>
            <div>Hair Color: {char.hair_color}</div>
            <div>Skin Color: {char.skin_color}</div>
            </div>
        </Style>
    )
}
//            <button onClick = {toggleExpand}>test</button>
//<div className = {expand === true?'display':'nodisplay'} onClick = {toggleExpand}>
export default Character

