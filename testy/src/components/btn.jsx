import React, {Component} from 'react';


export default function Btn(props){

    return(
        <div className="btn__main">
            <a href="#" className="btn__link"
            onClick={props.func}
            >
                <span id="btnClick" className="text__btn">{props.text}</span>
            </a>
        </div>
    )
}

