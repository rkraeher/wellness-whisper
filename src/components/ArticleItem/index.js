import React from 'react';
import Media from "react-bootstrap/Media";
import placeholderImg from "../../images/mr-cup-fabien-barral-Mwuod2cm8g4-unsplash.jpg";
import DayJS from "react-dayjs";
import Image from "../Image";
import "./style.css";

function ArticleItem({ data }) {
    const imgData = {
        large: {
            height: 160,
            class: "img-lg",
        },
        small: {
            height: 123,
            class: "img-sm",
        }
    };

    return (
        <div>
            <Media className="media">
                {data.image !== undefined ?
                    <Image data={imgData.large}
                        srcProp={data.image.contentUrl}
                        altProp={data.image.contentUrl}
                    />
                    :
                    <Image data={imgData.large}
                        srcProp={placeholderImg}
                        altProp="Placeholder newspaper stack."
                    />
                }
                <Media.Body>
                    {data.image !== undefined ?
                        <Image data={imgData.small}
                            srcProp={data.image.contentUrl}
                            altProp={data.image.contentUrl}
                        />
                        :
                        <Image data={imgData.small}
                            srcProp={placeholderImg}
                            altProp="Placeholder newspaper stack."
                        />
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
