import React, {Component} from 'react';
import Table from './table';

export default class Container extends Component{

    render(){
        return(
            <div id="containerPage" className="container__page">
                <Table />
            )
            </div>
        )
    }
}



