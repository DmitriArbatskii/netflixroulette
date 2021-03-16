import React from "react";

export const Header: React.FC = () => {
    return <>
        <header className="header">
            <div className="header__logo">netflixroulette</div>
            <label htmlFor="input" className="header__label">Find your movie</label>
            <input id="input" className="header__input" type="text" />
            <div className="header__filter">
                <span className="header__filter__text">Search by</span>
                <button className="header__filter__title-btn">Title</button>
                <button className="header__filter__genre-btn">Genre</button>
                <button className="header__filter__search-btn">Search</button>
            </div>
        </header>
    </>
}