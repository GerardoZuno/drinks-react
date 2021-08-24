import React, {useContext} from 'react'
import {CategoriasContext} from './context/CategoriasContext'


function Form() {

    const {} = useContext(CategoriasContext)

    return (
        <form className="col-12">
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
                    placeholder="Buscar por Ingrediente" />
                </div>
                <div className="col-md-4">
                    <select 
                    name="categoria"
                    className="form-control">
                        <option value="">--Seleccionar Categoria</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                    type="submit"
                     value="Buscar Bebidas"
                     className="btn btn-block btn-primary"/>
                </div>
            </div>
        </form>
    )
}

export default Form
