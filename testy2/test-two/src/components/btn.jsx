import React, {Component} from 'react';

export default function Btn (props){
    return(
        <div className="btn__sort__main">
            <button type="button"  onClick={props.onClick} id={props.id} className="btn btn-primary">{props.text}</button>
            {/* <a  href="#" id={`${props.id}`}></a> */}
        </div>
    )
}