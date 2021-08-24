import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idReceta, setIdReceta] = useState(null)

    return (
     <ModalContext.Provider
      value={{
          setIdReceta
      }} >
         {props.children}
     </ModalContext.Provider>
    )
}


export default ModalProvider;