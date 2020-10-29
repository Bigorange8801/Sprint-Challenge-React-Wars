import React from "react";

export default function CharacterCard(props) {

    return (
        <div className="character-card">
           <p className="character-head">{props.CharacterName}</p>
            <p>Height: {props.CharacterHeight}</p>
            <p>Eye Color: {props.CharacterEyeColor}</p>
            <p>Gender: {props.CharacterGender}</p>
        </div>

    )
}