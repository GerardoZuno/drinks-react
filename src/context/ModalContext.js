import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idReceta, setIdReceta] = useState(null);
  const [recetaIdDetails, setRecetaIdDetails] = useState({});

  useEffect(() => {
    const obtenerReceta = async () => {
      if (idReceta === null) return null;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const result = await axios(url);
      setRecetaIdDetails(result.data.drinks[0]);
    };
    obtenerReceta();
  }, [idReceta]);

  return (
    <ModalContext.Provider
      value={{
        setIdReceta,
        recetaIdDetails,
        setRecetaIdDetails,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
