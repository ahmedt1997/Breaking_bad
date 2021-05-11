
import './App.css';
import Header from './components/ui/Header'
import {useState,useEffect} from 'react'
import axios from 'axios'
import CharacteresGrid from './components/ui/characteres/CharacteresGrid'

function App() {
  const [items,setItems]=useState([])
  const [isLoding,setIsLoding]=useState(true)

  

  useEffect(()=> {
    const fetchItems = async () => {
        // with fetch methode
        // const res = await fetch(`https://www.breakingbadapi.com/api/characters`)
        // const result = await res.json()
        // console.log(result)


        // with axios 

        const res = await axios(`https://www.breakingbadapi.com/api/characters`)
        console.log(res.data)

        setItems(res.data)
        setIsLoding(false)


    }
    fetchItems()
},[])

  return (
    <div className="container">
      <Header />
      <CharacteresGrid isLoding={isLoding} items={items}   />
    </div>
  );
}

export default App;
