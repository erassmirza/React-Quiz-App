import React from 'react'

function Answer(props) {
    return (
        <button className="answer" type="button" onClick={() => { props.handleClick(props.choice) }}>{props.answer}</button>
    )
}

export default Answer;
