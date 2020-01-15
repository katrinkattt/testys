import React, {Component} from 'react';
import Btn from './btn';
import StateBtn from './stateBtn';


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
        }
    }
Sorting(l){

    var arr = this.initialState.people
    function SortingVal(param){
        return function (a, b){
            if(a[param] > b[param]){
                return 1
            }
            if(a[param] < b[param]){
                return -1
            }
            return 0
        };
    }

    if(l == 'id'){
        arr.sort(SortingVal('id'));
        return
            this.initialState.people.id = arr.sort(SortingVal('id'));
    }
    else if(l == 'name'){
        arr.sort(SortingVal('name'));
        return
            this.initialState.people.name = arr.sort(SortingVal('name'));
    }
    else if(l == 'date'){
        arr.sort(SortingVal('count'));
        return
            this.initialState.people.count = arr.sort(SortingVal('count'));
    }
    else if(l == 'count'){
        arr.sort(SortingVal('count'));
        return
            this.initialState.people.count = arr.sort(SortingVal('count'));
    }
    this.render()
}



    render(){
        return(
            <div className="table__main">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th scope="col"><Btn text='id' id='idBtn' onClick={this.Sorting('id')} /></th>
                        <th scope="col"><Btn text='name' id='nameBtn' onClick={this.Sorting('name')}  /></th>
                        <th scope="col"><Btn text='date' id='dateBtn' onClick={this.Sorting('date')}/></th>
                        <th scope="col"><Btn text='count' id='countBtn'  onClick={this.Sorting('count')}/></th>
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

