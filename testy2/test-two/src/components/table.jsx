import React, {Component} from 'react';
import Btn from './btn';

export default class Table extends Component {
    constructor(props){
        super(props)
        this.initialState = {
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
                    date:'1.08.2016',
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
        }
    }
    render(){
        return(
            <div className="table__main">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th scope="col"><Btn text='id' id='idNum'/></th>
                        <th scope="col"><Btn text='name' id='name'/></th>
                        <th scope="col"><Btn text='date' id='date'/></th>
                        <th scope="col"><Btn text='count' id='count'/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.initialState.people.map((score, c) =>
                            <tr>
                                <th scope="row">{this.initialState.people[c].id}</th>
                                <td>{this.initialState.people[c].name}</td>
                                <td>{this.initialState.people[c].date}</td>
                                <td>{this.initialState.people[c].count}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}