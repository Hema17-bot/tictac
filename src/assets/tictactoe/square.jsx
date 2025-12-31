
import React from 'react';

const Square = (props)=>{

    return(
        <div  
        onClick={props.onClick}
        style={{width: "100px", height: "100px", border: "2px solid black", display: "flex", justifyContent: "center",alignItems:"center"}} className="square">
            <h1>{props.value}</h1>

        </div>
    )
}

export default Square;