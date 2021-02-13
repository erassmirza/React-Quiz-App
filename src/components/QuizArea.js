import React from 'react'
import Question from './Question'
import AnswerList from './AnswerList'
import UserGreeting from './UserGreeting'
import Status from './Status'

function QuizArea(props) {
    if (props.isFinished) {
        return (
            <div>
                <UserGreeting />
                <Status status={props.status}/>
            </div>
        )
    } else {
        return (
            <div>
                <Question dataSet={props.dataSet} />
                <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
            </div>
        )
    }
}

export default QuizArea;
