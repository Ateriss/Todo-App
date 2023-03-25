import React from "react";
import { TodoContext } from "../todoContext";
import './TodoSearch.css'



function TodoSearch(){

  const{searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return(
        <div className="header__search">
        <button className="header__search--img"></button>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Buscar"
          value={searchValue}
          minLength="4"
          onChange={onSearchValueChange}
        />
      </div>
    )
};

export {TodoSearch};