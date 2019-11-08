import React from "react";

const card = props => {
    return (
        <div className="character-card">
            <img className="character-image" alt="Star Wars character"/>
            <h2>{props.name}</h2>
        </div>
    )
}

export default card;