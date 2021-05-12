import React from 'react';
import CharactereItems from './CharactereItems'
import spinner from '../../../img/spinner.gif'


const CharacteresGrid = ({isLoding,items}) => {
    return isLoding ? <img src={spinner} />: <section className='cards'>{items.map((item) => (
        
        <CharactereItems  key={item.char_id} item={item} />
    ))}</section>
}

export default CharacteresGrid;
