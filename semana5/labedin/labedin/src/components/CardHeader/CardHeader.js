import React from 'react';
import "./CardHeader.css"

function CardHeader(props) {
    return(
        <div className="card-header">
            <h4>{props.titulo}</h4>
           <img src={ props.imagem } />
        </div>
    )
}

export default CardHeader;