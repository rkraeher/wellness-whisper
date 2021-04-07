import React from 'react';
import placeholderImg from "../../images/mr-cup-fabien-barral-Mwuod2cm8g4-unsplash.jpg";
import "../ArticleItem/style.css";

function Image({ data, srcProp, altProp }) {
    return (
        <>
            <img
                width={206}
                height={data.height}
                className={`ml-3 img ${data.class}`}
                src={srcProp ?? placeholderImg}
                alt={altProp ? "Follow article link for image alt property." : "No image found. Placeholder image."}
            />
        </>
    );
}
export default Image;