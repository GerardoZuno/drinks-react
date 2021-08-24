import React, {createContext, useState} from 'react'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([])
    
    const [search, setSearch] = useState({
        nombre: '',
        categoria: '',
    })

    return(
      <RecetasContext.Provider
      value={{setSearch}}>
          {props.children}
      </RecetasContext.Provider>
    )

} 

export default RecetasProvider