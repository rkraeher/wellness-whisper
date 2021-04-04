import React, { useState, useContext, useEffect } from "react";
import { NewsContext, HEADLINES, SEARCH, KEYWORD } from "../../utils/NewsContext";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./style.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [state, dispatch] = useContext(NewsContext);
  const apiKey = process.env.REACT_APP_API_KEY;

  //TODO: convert these fetch requests to async functions

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`
      )
      .then((response) => dispatch({ type: HEADLINES, payload: response.data }))
      .catch((error) => console.log(error));
  }, []);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    axios.get(
      `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=popularity&apiKey=${apiKey}`
    )
      .then((response) => dispatch({ type: SEARCH, payload: response.data }))
      .then(() => dispatch({ type: KEYWORD, payload: searchValue }))
      .then(() => resetInputField())
      .catch((error) => console.log(error));
  }

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
