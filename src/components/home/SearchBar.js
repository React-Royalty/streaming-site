import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';


function SearchBar() {

  const { media, searchTerm, setSearchTerm, setSearchResultsMedia, matchingTerms, setMatchingTerms } = useOutletContext();

  const [ tempMatchingTerms, setTempMatchingTerms ] = useState([]);

  useEffect(() => {
    setTempMatchingTerms([]);
    setMatchingTerms([]);
    const filteredMedia = media.filter(indivMedia => findMatches(indivMedia, searchTerm));
    setSearchResultsMedia(filteredMedia);
    setMatchingTerms(tempMatchingTerms);
  }, [searchTerm]);
  

  function findMatches(media, text) {
    if (media.title.toLowerCase().includes(text.toLowerCase())) {
      tempMatchingTerms.push(media.title);
      return true;
    } 
    if (media.description.toLowerCase().includes(text.toLowerCase())) {
      const matchingWordIndex = media.description.toLowerCase().indexOf(text.toLowerCase());
      const matchingSubstring = media.description.toLowerCase().slice(matchingWordIndex);
      if ( media.description.charAt(matchingWordIndex - 1) === " ") {
        let matchingWord = matchingSubstring.substring(0, matchingSubstring.indexOf(" "))
        if ( !matchingTerms.includes(matchingWord) && matchingWord !== "" ) {
          matchingWord = matchingWord.replaceAll(",", "");
          tempMatchingTerms.push(matchingWord);
          return true;
        }
      }
    }

    // todo: check categories and crew
    else return false;
}



  return (
    <form className="home-nav__search-form">
      <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} type="text" className="home-nav__search-input" placeholder="Search movies and shows" />
      <button name="search" className="home-nav__search-button">
        <BiSearch className="home-nav__search-button--icon"/>
      </button>
    </form>
  )
}

export default SearchBar;