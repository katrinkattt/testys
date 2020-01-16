import React, {Component} from 'react';

export default function Footer(props){
    return(
        <div className="footer__main">
            <div className="footer__content">
                <div className="footer__text">{props.text}</div>
            </div>
        </div>
    )
}