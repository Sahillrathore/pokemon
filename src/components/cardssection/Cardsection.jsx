import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../card/Card';
import { useSearch } from '../../context/searchcontext';

const Cardsection = () => {

  const [apiData, setApiData] = useState([]);
  const {search, setSearch} = useSearch();

  const apiRequest = async () => {
    try {
        const req = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setApiData(req.data.results);
    } catch (err) {
        console.log(err);
    }
    
  }

   useEffect(()=>{
        apiRequest();
    },[])

  return (
    <div className='flex gap-8 flex-wrap py-10 px-20 justify-center card-section bg-gradient-to-t from-[#f5501e] to-white min-h-screen'>
      {
        apiData?.
        filter((item) => {
          if(search) {
            return item.name.includes(search);
          }
          else {
            return item;
          }
        })
        .map((item, i) => (
            <Card title={item.name} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.url.slice(-3,-1)}.png`} key={item.name}/>
        ))
      }
    </div>
  )
}

export default Cardsection