import React, { useState, useContext, useEffect } from "react";
import { NewsContext, HEADLINES, SEARCH, KEYWORD } from "../../utils/NewsContext";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./style.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [state, dispatch] = useContext(NewsContext);
  const apiKey = process.env.REACT_APP_API_KEY;
  const APP_FRONT_PAGE = "https://api.bing.microsoft.com/v7.0/news/search?q=progressive+news&originalImg=true"
  const SEARCH_NEWS = `https://api.bing.microsoft.com/v7.0/news/search?q=${searchValue}&originalImg=true`

  useEffect(() => {
    loadHeadlines();
  }, []);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const loadHeadlines = async () => {
    try {
      const resp = await axios({
        method: 'get',
        url: APP_FRONT_PAGE,
        headers: {
          "Ocp-Apim-Subscription-Key": apiKey
        }
      });
      return dispatch({ type: HEADLINES, payload: resp.data.value });
    } catch (err) {
      console.error(err);
    }
  };

  const callSearchFunction = async (e) => {
    e.preventDefault();
    try {
      const searchResults = await axios({
        method: 'get',
        url: SEARCH_NEWS,
        headers: {
          "Ocp-Apim-Subscription-Key": apiKey
        }
      });
      dispatch({ type: SEARCH, payload: searchResults.data.value });
      dispatch({ type: KEYWORD, payload: searchValue });
      resetInputField();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="search-form">
      <input
        id="search-bar"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <Button
        id="search-button"
        onClick={callSearchFunction}
        type="submit">
        Search
      </Button>
    </form>
  );
}
export default Search;
