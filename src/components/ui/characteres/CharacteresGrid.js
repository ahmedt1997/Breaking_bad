import React from 'react';

const CharacteresGrid = ({isLoding,items}) => {
    return isLoding ? <h1>is Loading ...</h1> : <section className='cards'>{items.map((item) => (
        <h1 key={item.char_id}>{item.name}</h1>
    ))}</section>
}

export default CharacteresGrid;
