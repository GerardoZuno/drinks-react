import React from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ListsRecipes from './components/ListsRecipes'
import CategoriasProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext'


function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
      <ModalProvider>  
      <Header/>
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
        <ListsRecipes />
      </div>
      </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  )
}

export default App
