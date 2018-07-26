import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Filters from "./components/filters"
import AddTodo from "./components/addTodo"
import {store} from "./store"
import Visibletodolist from './containers'
import "./styles/styles.scss"


const App = () => (
    <div className="app">
        <AddTodo/>
        <Visibletodolist/>
        <Filters/>
    </div>
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);