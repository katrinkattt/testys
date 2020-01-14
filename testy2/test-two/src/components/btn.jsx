import React, {Component} from 'react';

export default function Btn (props){
    return(
        <div className="btn__sort__main">
            <a href="#" id={`${props.id}`}>{props.text}</a>
        </div>
    )
}