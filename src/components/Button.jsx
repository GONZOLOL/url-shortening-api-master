import React from "react";

export default function Button({ dataShortLink, childClick , type, estilo , text, id}) {
    
    return <button 
                data-shortlink = {dataShortLink} 
                onClick = {childClick}  
                type = {type} 
                className = {estilo}
                id= {id}

            >{text}</button>
}