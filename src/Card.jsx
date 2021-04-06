import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({data}) => {
    return (
       <>
        {
            data.map((card, index)=>(
                <div key={index} className="card">
                     <h1>{card.title}</h1>
                     <p>{card.description}</p>
                     <Link to={`/cards/${card.title}`}>Batafsil malumot</Link>
                </div>
            ))
        }
       </> 
       
    )
}

export default Card
