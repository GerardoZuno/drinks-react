import React, {useContext, useState} from 'react'
import {CategoriasContext} from '../context/CategoriasContext'
import {RecetasContext} from '../context/RecetasContext'



function Form() {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const handleChange = (e) => {
        setBusqueda({
            ...busqueda,
           [e.target.name] : e.target.value
        })
    }

    const {categories} = useContext(CategoriasContext)
    const {setSearch} = useContext(RecetasContext)

    
    return (
        <form className="col-12"
        onSubmit={e => {
                  e.preventDefault()
                  setSearch(busqueda) }}
        >
            <fieldset className="text-center">
                <legend>
                    Busca Bebidas Por Categoria o Ingrediente
                </legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Buscar por Ingrediente"
                    onChange={handleChange} />
                </div>
                <div className="col-md-4">
                    <select 
                    name="categoria"
                    className="form-control"
                    onChange={handleChange}>
                        <option value="">--Seleccionar Categoria</option>
                        {categories.map((category, index) =>(
                            <option key={index} value={category.strCategory}>{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                    type="submit"
                     value="Buscar Bebidas"
                     className="btn btn-block btn-primary"
                     />
                </div>
            </div>
        </form>
    )
}

export default Form
