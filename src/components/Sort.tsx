import React from "react";

export const Sort: React.FC = () => {
    return <>
        <div className="sort">
            <span className="sort__res">7 movies found</span>
            <span className="sort__by">Sort by</span>
            <button className="sort__date-btn">release date</button>
            <button className="sort__rating-btn">rating</button>
        </div>
    </>
}