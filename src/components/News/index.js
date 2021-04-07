import React, { useContext } from "react";
import { NewsContext } from "../../utils/NewsContext";
import ArticleItem from "../ArticleItem";
import "../Layout/style.css";

function News() {
  const [state] = useContext(NewsContext);
  return (
    <div>
      {!state.data ? <h3 className="header">Loading...</h3>
        : state.data.map((news) => (
          <ArticleItem data={news} key={news.url} />
        ))
      }
    </div>
  );
}

export default News;
