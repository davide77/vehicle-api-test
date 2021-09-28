import React from "react";

let MainImage = ({ media, name, toggle }) => {
    return (
        <div className="image-container" onClick={toggle}>
            <picture>
                <source media="(min-width: 1000px)" srcSet={media[0].url} />
                <img
                    src={media[1].url}
                    alt={name}
                    data-testid="test-main-image"
                    style={{ width: "100%" }}
                />
            </picture>
            <div className="image-container__more-info">Read more</div>
        </div>
    );
};

export default MainImage;
