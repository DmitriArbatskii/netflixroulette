import React from 'react';
import "../styles/style.scss";
import {Header} from './Header';
import {Sort} from './Sort'
import {Footer} from './Footer';
import {Result} from "./Result";

export const App: React.FC<{}> = () => {
    return <>
        <Header />
        <Sort />
        <Result />
        <Footer />
    </>
}