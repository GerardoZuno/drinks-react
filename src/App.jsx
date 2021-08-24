import React from 'react'
import Form from './components/Form'
import Header from './components/Header'
import CategoriasProvider from './context/CategoriasContext'


function App() {
  return (
    <CategoriasProvider>
      <Header/>
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </CategoriasProvider>
  )
}

export default App
