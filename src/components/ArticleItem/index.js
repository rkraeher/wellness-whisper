import React, { useEffect } from 'react';
import Media from "react-bootstrap/Media";
import 'holderjs';
import { run as runHolder } from 'holderjs/holder';
import "./style.css";

function ArticleItem(props) {

    useEffect(() => {
        //This ensures that the placeholder image loads on component mount if the API returns no image. 
        runHolder("ml-3");
    });

    return (
        <div>
            <Media className="media">
                <img
                    width={128}
                    height={128}
                    className="ml-3 img"
                    src="holder.js/128x128"
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>Headline Headline  Headline Headline Headline Headline  </h5>
                    <p>
                        Article summary / beginning of article / Article summary / beginning of article / Article summary / beginning of article /
                        Article summary / beginning of article / Article summary / beginning of article / Article summary / beginning of article
                    </p>
                    <p className="article-info">
                        <a href="#" >Publication link </a>&nbsp;| Author | Date/time
                    </p>
                </Media.Body>
            </Media>
            <hr />
        </div>
    );
}

export default ArticleItem
