import React from "react";

export const Item: React.FC = () => {
    return <>
        <div className="item">
            <img className="item__image" src="./bg.jpg" />
            <div className="item__text-container">
                <div className="item__title">Kill Bill: Vol.2</div>
                <div className="item__release-date">2004</div>
            </div>
            <div className="item__genre">Action & adventure</div>
        </div>
    </>
}