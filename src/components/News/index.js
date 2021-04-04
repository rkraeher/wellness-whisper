import React, { useContext } from "react";
import { NewsContext } from "../../utils/NewsContext";
import ArticleItem from "../ArticleItem";
import "../Layout/style.css";

function News() {
  const [state] = useContext(NewsContext);
  return (
    <div>
      {state
        ? state.data.articles.map((news) => (
          <ArticleItem data={news} key={news.url} />
        ))
        : <h3 className="header">Loading...</h3>}
    </div>
  );
}

export default News;
