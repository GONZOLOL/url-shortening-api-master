// const Card = (props) => (
//     <Card>
//         <Image src={props.image} />
//         <Information>
//             <Title description={props.title} />
//             <Info description={props.description} />
//         </Information>
//     </Card>
// );

import React from "react";

function Card({ type , tittle, text, svg }) {
    return  <div className={type}> 
                <img className="card__image" src={svg} alt="React Logo" />
                <span>{tittle}</span>
                <p>{text}</p>
            </div>
}
export default Card;