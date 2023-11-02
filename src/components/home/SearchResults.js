import { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import DetailList from "../media/popup/DetailList";
import Nav from "./Nav";
import SearchSuggestions from "./SearchSuggestions";

function SearchResults() {

  const { setDetailedMediaTitle, setDetailedMediaToggle, searchTerm, setSearchTerm, searchResultsMedia, setSearchResultsMedia, matchingTerms } = useOutletContext();


  useEffect(() => {
    // TODO: MAKE STUFF SHOW UP WHEN SUGGESTION IS CLICKED
  }, [searchTerm])


  async function clickOutSearchResults(event) {
    if (event.target.id == "search-results-parent") {
      setSearchTerm("");
      setSearchResultsMedia([]);
    }
  }


  function handleCardClick(event) {
    const selectedCardAlt = (event.target.alt);
    const selectedTitle = selectedCardAlt.slice(0, -" Poster Title Card".length);
    setDetailedMediaTitle(selectedTitle);
    setDetailedMediaToggle(true);
    setSearchTerm("");
    setSearchResultsMedia([]);
  }


  return (
    <div id="search-results-parent" onClick={clickOutSearchResults} style={{position: "fixed", display: "flex", width: "100vw", height: "100vh", alignItems: "flex-start", justifyContent: "center", overflowY:"scroll"}}>
      <div className="search-results">
        {
          matchingTerms.length ? <SearchSuggestions contents={matchingTerms} /> : null
        }
        <section>
          {
            searchResultsMedia.length ? searchResultsMedia.map((indivMedia, index) => {
              return <img onClick={(event) => handleCardClick(event)} className="slider__card" src={indivMedia.wideTitleCard ? indivMedia.wideTitleCard.image : ""} alt={indivMedia.title + " Poster Title Card"} key={index}></img>
            })
            : null
          }
        </section>
      </div>
    </div>
  )
}

export default SearchResults;