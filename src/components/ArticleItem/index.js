import React from 'react';
import Media from "react-bootstrap/Media";
import placeholderImg from "../../images/mr-cup-fabien-barral-Mwuod2cm8g4-unsplash.jpg";
import DayJS from "react-dayjs";
import "./style.css";

function ArticleItem({ data }) {
    return (
        <div>
            <Media className="media">
                {/* Make this a component */}
                {/* Use thumbnail instead? */}
                {/* also do error handling on the link */}
                {/* Below chain ? : operators */}
                {data.image !== undefined ?
                    <img
                        width={206}
                        height={160}
                        className="ml-3 img img-lg"
                        src={data.image.contentUrl ?? placeholderImg}
                        alt={data.image.contentUrl ? "Follow article link for image alt property." : "No image found. Placeholder image."}
                    />
                    :
                    <p>...</p>
                }
                <Media.Body>
                    {/* <img
                        width={206}
                        height={123}
                        className="img img-sm"
                        src={data.image.contentUrl ?? data.image.contentUrl ?? placeholderImg}
                        alt={data.image.contentUrl ? "Follow article link for image alt property." : "No image found. Placeholder image."}
                    /> */}
                    {data.image !== undefined ?
                        <img
                            width={206}
                            height={123}
                            className="ml-3 img img-sm"
                            src={data.image.contentUrl ?? placeholderImg}
                            alt={data.image.contentUrl ? "Follow article link for image alt property." : "No image found. Placeholder image."}
                        />
                        :
                        <p>...</p>
                    }
                    <h5>{data.name ? data.name : "Headline unavailable."}</h5>
                    <p>&nbsp;{data.description ? data.description : "Article summary unavailable."}</p>
                    <p className="article-info">
                        <a target="_blank"
                            rel="noreferrer"
                            href={data.url ? data.url : "#"}>
                            {data.url ? "Read more" : "Link unavailable"}
                        </a>&nbsp;|
                            &nbsp;{data.provider[0].name ? data.provider[0].name : "Source name unavailable"} |
                            &nbsp;{data.datePublished ? <DayJS format="MM-DD-YYYY">{data.datePublished}</DayJS> : "Date unavailable."}
                    </p>
                </Media.Body>
            </Media>
            <hr />
        </div>
    );
}

export default ArticleItem
