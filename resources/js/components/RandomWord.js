import React, { useState } from 'react';

export default function RandomWord(props) {
    const [ word, setWord ] = useState('English');
    let timer = null;

    function setNewWord(word) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            setWord(word)
        }, 0.7);
    }

    function onMouseEnter() {
        setNewWord('Vietnamese')
    }

    function onMouseLeave() {
        setNewWord('English')
    }

    return (
        <div className="random-word"
             onMouseEnter={ onMouseEnter }
             onMouseLeave={ onMouseLeave }
        >
            { props.renderWord(word) }
        </div >
    )
}
