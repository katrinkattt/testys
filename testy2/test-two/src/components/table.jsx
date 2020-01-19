import React, {Component} from 'react';

import Btn from './btn';

export default class Table extends Component {
    constructor(props){
        super(props)

    this.state = {
            people: [
                {
                    id: 1,
                    name: 'Вася',
                    date:'15.06.2018',
                    count: 11
                },
                {
                    id: 2,
                    name: 'Петя',
                    date:'23.11.2018',
                    count: 23
                },
                {
                    id: 3,
                    name: 'Иван',
                    date:'12 марта 2017',
                    count: 3
                },
                {
                    id: 4,
                    name: 'Александр',
                    date: '20/12/2010',
                    count: 1
                },
                {
                    id: 5,
                    name: 'Евгений',
                    date:'12.09.2018',
                    count: 112
                },
                {
                    id: 6,
                    name: 'Мария',
                    date:'01.08.2016',
                    count: 122
                },
                {
                    id: 7,
                    name: 'Анастасия',
                    date:'20.11.2018',
                    count: 34
                },
                {
                    id: 8,
                    name: 'Степан',
                    date:'12.11.2019',
                    count: 10
                },
        ]
    };
}

sorting(param){
    var arr = this.state.people;
        // alert(param)
        var res = arr.sort((a, b) => (a[param] > b[param]) ? 1 : ((a[param] < b[param]) ? -1 : 0));
        this.setState({state : res})
}


render(){
    return(
        <div className="table__main">
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col"><Btn text='id' id='idBtn' func={() => this.sorting('id')} /></th>
                        <th scope="col"><Btn text='name' id='nameBtn'  func={() => this.sorting('name')}/></th>
                        <th scope="col"><Btn text='date' id='dateBtn' func={() => this.sorting('date')}/></th>
                        <th scope="col"><Btn text='count' id='countBtn' func={() => this.sorting('count')} /></th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    {
                        this.state.people.map((score, c) =>
                        <tr>
                            <th scope="row">{this.state.people[c].id}</th>
                            <td>{this.state.people[c].name}</td>
                            <td>{this.state.people[c].date}</td>
                            <td>{this.state.people[c].count}</td>
                        </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
