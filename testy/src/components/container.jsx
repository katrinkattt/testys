import React, {Component} from 'react';
import Btn from './btn';
import ModalWindow from './modalWindow';


export default class Container extends Component{

    render(){
        return(
            <div id="containerPage" className="container__page">
                        <div className="btn__position">
                            <Btn text="Click"  />
                        </div>
                        <ModalWindow  title="Modal window" text= "модалка, ширина и высота модалки зависит от ее содержимого, модалка центрируется в центре экрана стилями"/>

                    )
            </div>
        )
    }
}

