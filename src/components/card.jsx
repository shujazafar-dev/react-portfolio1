import React from 'react'
import  './components.style.css'


const card = (props) => {
    const { monster } = props
    return (
        <div className='card-container'>
            <img alt='monsters' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
            <h1>{monster.name}</h1>
        </div>
    )
}

export default card
