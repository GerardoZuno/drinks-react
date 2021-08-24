import axios from 'axios'
import React, {createContext, useState, useEffect} from 'react'

export const CategoriasContext = createContext()

const CategoriasProvider = (props) => {

    const [categories, setCategories] = useState([

    ])

    useEffect(() =>{

        const obtenerCategorias = async () => {

            try {
                const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
                const result = await axios(url)
                setCategories(result.data.drinks)
            }catch(err) {
                console.log(err)
            }
            
        }
         obtenerCategorias()
    }, [])

    return (

        <CategoriasContext.Provider
        value={{categories}} >
            {props.children}
        </CategoriasContext.Provider>

    )
}

export default CategoriasProvider