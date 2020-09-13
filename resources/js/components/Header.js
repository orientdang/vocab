import { Link } from "react-router-dom";
import { PATHS } from "../constants";
import React from "react";

export default function Header() {
    return (
        <div className="header" >
            <div className="logo" >Vocab</div >
            <div className="menu" >
                <div className="header__text home" >
                    <Link className={ 'header__text' }
                          to={ PATHS.HOME } >Home</Link >
                </div >
                <div className="header__text practice" >
                    <Link className={ 'header__text' }
                          to={ PATHS.PRACTICE } >Practice</Link >
                </div >
            </div >
        </div >
    )
}

