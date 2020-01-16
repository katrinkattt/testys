import React, {Component} from 'react';

export default function Btn (props){
    return(
        <div className="btn__sort__main">
            <button type="button" onClick={ props.func} id={props.id} className="btn btn-primary">{props.text}</button>
        </div>
    )
}

