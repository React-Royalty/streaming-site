import React from "react";
import { useOutletContext } from "react-router-dom";

function SearchSuggestions({ contents }) {

  const { searchTerm, setSearchTerm } = useOutletContext();

  return (
    <div className="search-results__suggestions"><strong>Explore titles related to:</strong>
    {
      contents && contents.length ? contents.map((item, index) => {
        return <div className="list-item-container" key={index}>
          <div className="list-item" onClick={() => setSearchTerm(item)} >{item}</div>
          { index !== contents.length - 1 ? <div className="pipe"></div> : null }
        </div>
      }) : null
    }
    </div>
  );
}

export default SearchSuggestions;