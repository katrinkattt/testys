import React, {Component} from 'react';

export default function ModalWindow(props){
    return(
        <div id="modal" className="modal__main">
            <div className="modal__title">
                <div className="modal__text__title">{props.title}</div>
                <div id="btnClose" className="modal__close">X</div>
            </div>
            <div className="modal__text">{props.text}</div>
            <div className="modal__footer"></div>
        </div>
    )
}