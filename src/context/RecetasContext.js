import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([]);

  const [search, setSearch] = useState({
    nombre: "",
    categoria: "",
  });



  useEffect(() => {
    const consultaRecetas = async () => {
        const { nombre, categoria } = search;
 
      if (nombre === '' || categoria === '') return null;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
      const result = await axios(url);
      setRecetas(result.data.drinks);
    };
    consultaRecetas();
  }, [search]);
  return (
    <RecetasContext.Provider
      value={{
        recetas,
        setSearch,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
