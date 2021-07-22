import React from 'react'
import './components.style.css'
import Card from './card'
const CardList = (props) => {
    const {monsters} = props    
    return (
        <div className='card-list'>
           {monsters.map(monster => <Card key={monster.id} monster={monster}/>)}
        </div>
    )
}

export default CardList
