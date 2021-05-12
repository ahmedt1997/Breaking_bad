import React from 'react';
import CharactereItems from './CharactereItems'
import Spinner from './Spinner'


const CharacteresGrid = ({isLoding,items}) => {
    return isLoding ? <Spinner />: <section className='cards'>{items.map((item) => (
        
        <CharactereItems  key={item.char_id} item={item} />
    ))}</section>
}

export default CharacteresGrid;
