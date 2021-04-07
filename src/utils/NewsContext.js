import React, { createContext, useState, useReducer } from "react";

export const NewsContext = createContext();
export const SEARCH = "SEARCH";
export const HEADLINES = "HEADLINES";
export const KEYWORD = "KEYWORD";

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        data: action.payload
      };
    case HEADLINES:
      return {
        ...state,
        data: action.payload
      };
    case KEYWORD:
      return {
        ...state,
        keyword: action.payload
      };
    default:
      return state
  }
}

const NewsContextProvider = (props) => {
  const [data] = useState([]);
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <NewsContext.Provider value={[state, dispatch]}>
      {props.children}
    </NewsContext.Provider>
  );
};
export default NewsContextProvider;