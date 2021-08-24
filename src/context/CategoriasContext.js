import React, {createContext, useState} from 'react'

export const CategoriasContext = createContext()

const CategoriasProvider = (props) => {

    return (

        <CategoriasContext.Provider >
            {props.children}
        </CategoriasContext.Provider>

    )
}

export default CategoriasProvider