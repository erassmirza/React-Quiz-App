import React, { Component } from 'react'
import dataSet from '../api/dataSet';
import QuizArea from './QuizArea';
import ScoreArea from './ScoreArea';

class Questionnaire extends Component {

    constructor() {
        super();
        this.state = {
            current: 0,
            dataSet: dataSet,
            correct: 0,
            incorrect: 0,
            isFinished: false,
            status: " "
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(choice) {
        if (choice === this.state.dataSet[this.state.current].correct) {
            this.setState(
                {
                    correct : this.state.correct + 1
                }
            )
        } else {
            this.setState(
                {
                    incorrect : this.state.incorrect + 1
                }
            )
        }

        if (this.state.current === this.state.dataSet.length - 1) {
            this.setState(
                {
                    isFinished : true
                }
            )
            if (this.state.correct >= 2 || this.state.incorrect <= 1) {
                this.setState(
                    {
                        status : "Passed"
                    }
                )
            } else if (this.state.incorrect >= 2 || this.state.correct <= 1) {
                this.setState(
                    {
                        status : "Failed"
                    }
                )
            }
        } else {
            this.setState(
                {
                    current : this.state.current + 1
                }
            )
        }
    }

    render() {
        return (
            <div>
                <QuizArea handleClick={this.handleClick} status={this.state.status} isFinished={this.state.isFinished} dataSet={this.state.dataSet[this.state.current]} />
                <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
            </div>
        )
    }
}

export default Questionnaire;
