import React, { useState } from 'react'
import Cardsection from './components/cardssection/Cardsection'
import Navbar from './components/navbar/Navbar'
import { Searchprovider } from './context/searchcontext'
import Footer from './components/footer/Footer'

const App = () => {

  const [search, setSearch] = useState("");

  return (
    <div>
      <Searchprovider value={{search, setSearch}}>
        <Navbar/>
        <Cardsection/>
        <Footer/>
      </Searchprovider>
    </div>
  )
}

export default App