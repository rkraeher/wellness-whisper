import React from 'react';
import placeholderImg from "../../images/mr-cup-fabien-barral-Mwuod2cm8g4-unsplash.jpg";
import "../ArticleItem/style.css";

function Image({ width, height, classProp, srcProp, altProp }) {
    return (
        <>
            <img
                width={width}
                height={height}
                className={`ml-3 img ${classProp}`}
                src={srcProp ?? placeholderImg}
                alt={altProp ? "Follow article link for image alt property." : "No image found. Placeholder image."}
            />
        </>
    );
}
export default Image;