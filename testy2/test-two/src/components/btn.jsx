import React, {Component} from 'react';

export default function Btn (props){
    return(
        <div className="btn__sort__main">
            <a onClick={props.func} href="#" id={`${props.id}`}>{props.text}</a>
        </div>
    )
}