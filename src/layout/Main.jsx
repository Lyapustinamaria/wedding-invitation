import React from "react";
import {Footer} from './Footer'
import { Header } from "./Header";
import { Content } from "./Content";

function Main() {
    return (
        <React.Fragment>
            <Header/>
            <Content/>
            <Footer/>
        </React.Fragment>
    )
}

export {Main}