import React from 'react';
import Media from "react-bootstrap/Media";
import placeholderImg from "../../images/mr-cup-fabien-barral-Mwuod2cm8g4-unsplash.jpg";
import "./style.css";
import DayJS from 'react-dayjs';


function ArticleItem({ data }) {
    return (
        <div>
            <Media className="media">
                <img
                    width={206}
                    height={160}
                    className="ml-3 img img-lg"
                    src={data.urlToImage ? data.urlToImage : placeholderImg}
                    alt={data.urlToImage ? "Follow article link for image alt property." : "No image found. Placeholder image."}
                />
                <Media.Body>
                    <img
                        width={206}
                        height={123}
                        className="img img-sm"
                        src={data.urlToImage ? data.urlToImage : placeholderImg}
                        alt={data.urlToImage ? "Follow article link for image alt property." : "No image found. Placeholder image."}
                    />
                    <h5>{data.title ? data.title : "Headline unavailable."}</h5>
                    <p>{data.description ? data.description : "Article summary unavailable."}</p>
                    <p className="article-info">
                        <a target="_blank"
                            rel="noreferrer"
                            href={data.url ? data.url : "#"}>
                            {data.url ? "Read more" : "Link unavailable"}
                        </a>&nbsp;|
                            &nbsp;{data.source.name ? data.source.name : "Source name unavailable"} |
                            &nbsp;{data.publishedAt ? <DayJS format="MM-DD-YYYY">{data.publishedAt}</DayJS> : "Date unavailable."}
                    </p>
                </Media.Body>
            </Media>
            <hr />
        </div>
    );
}

export default ArticleItem
