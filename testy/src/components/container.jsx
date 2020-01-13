import React, {Component} from 'react';
import Btn from './btn';
import ModalWindow from './modalWindow';


export default class Container extends Component{

    render(){
        return(
            <div className="container__page">
                        <div className="btn__position">
                            <Btn text="Click"  />
                        </div>
                        <ModalWindow  title="Modal window" text="модалка, ширина и высота модалки зависит от ее содержимого, модалка центрируется в центре экрана стилями" />

                    )
            </div>
        )
    }
}

    // constructor(props){
    //     super(props)
    //     this.setState = {
    //         curValue:'none',
    //         nextValue:[
    //             'block',
    //             'none',
    //             'block'
    //         ]
    //     }
    // };
    // click(){
    //     const btn = document.getElementById('btnClick')
    //     const modal = document.getElementById('modal')
    //     btn.addEventListener('click', (display) =>{
    //         modal.style.display='block'
    //     });
    // };

