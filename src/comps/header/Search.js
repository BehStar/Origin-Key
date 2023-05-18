import React from "react";
import { useState } from "react";

const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const searchHandler = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className="search-header h-100 " onClick={searchHandler}>
      <i
        className={`fa fa-search search-header-icon
         ${isActive && "icon-click"}
         `}
      />
      <input
        type="text"
        className={`search-header-input 
      ${isActive && "input-click"}`}
      />
    </div>
  );
};

export default Search;
