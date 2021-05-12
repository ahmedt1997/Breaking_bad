
import './App.css';
import Header from './components/ui/Header'
import {useState,useEffect} from 'react'
import axios from 'axios'
import CharacteresGrid from './components/ui/characteres/CharacteresGrid'
import Search from '../src/components/ui/Search'



function App() {
  // define la variable pour stocker l'api
  const [items,setItems]=useState([])
  // le hook 
  const [isLoding,setIsLoding]=useState(true)

  const [query,setQuery]=useState('')

  
  // ce hook sera declancher lors de l'ouverture de la page

  useEffect(()=> {
    const fetchItems = async () => {
        // with fetch methode
        // const res = await fetch(`https://www.breakingbadapi.com/api/characters`)
        // const result = await res.json()
        // console.log(result)


        // with axios 

        const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        console.log(res.data)

        setItems(res.data)
        setIsLoding(false)


    }
    fetchItems()
},[query])

  return (
    <div className="container">
      <Header  />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacteresGrid isLoding={isLoding} items={items}   />
    </div>
  );
}

export default App;
