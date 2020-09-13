import React, { useRef } from 'react';
import RandomWord from "../components/RandomWord";

const Home = () => {

    return (
        <div className="container" >
            <RandomWord renderWord={(word) => (
                <p >{word}</p >
            )}/>
        </div >
    );
};

export default Home;
