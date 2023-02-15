import React from "react";

export default function Button({ dataShortLink, childClick , type, estilo , text }) {
    
    return <button 
                data-shortlink = {dataShortLink} 
                onClick = {childClick}  
                type = {type} 
                className = {estilo}

            >{text}</button>
}