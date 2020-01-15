import React, {Component, useState} from 'react';
import Btn from './btn';
import StateBtn from './stateBtn';


export default function Table() {
    const [state, setState] = useState(initialState);
        var initialState = {
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
function sorting(param){
    var arr = initialState.people
    return function (a, b){
        if(a[param] > b[param]){
            return 1
        }
        if(a[param] < b[param]){
            return -1
        }
        return initialState.people.param = arr.sort(sorting(param));
    }
}
    return(
            <div className="table__main">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col"><Btn text='id' id='idBtn' func={sorting('id')} /></th>
                            <th scope="col"><Btn text='name' id='nameBtn' func={sorting('name')}  /></th>
                            <th scope="col"><Btn text='date' id='dateBtn' func={sorting('date')}/></th>
                            <th scope="col"><Btn text='count' id='countBtn'  func={sorting('count')}/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            initialState.people.map((score, c) =>
                            <tr>
                                <th scope="row">{initialState.people[c].id}</th>
                                <td>{initialState.people[c].name}</td>
                                <td>{initialState.people[c].date}</td>
                                <td>{initialState.people[c].count}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
