import React, {useContext} from 'react'
import {RecetasContext} from '../context/RecetasContext'
import Recipe from './Recipe'


function ListsRecipes() {

   const {recetas} = useContext(RecetasContext)
   console.log(recetas)

    return (
        <div className="row mt-5">
           {recetas.map(receta =>(
             <Recipe receta={receta} key={receta.idDrink}/>
           ))}
        </div>
    )
}

export default ListsRecipes
