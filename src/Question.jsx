import React from "react";


export default function QuestionComponent({ question, answer }){
    return(
        <div className="question-and-answer">
            <div className="question-content">
                <div className="question-letter">Q</div>
                <div className="question-line"></div>
                <div className="question-text">{question}</div>
            </div>
            <div className="answer-content">
                <div className="question-letter">A</div>
                <div className="question-line outilne-color"></div>
                <div className="question-text answer">{answer}</div>
            </div>
        </div>
    )
}