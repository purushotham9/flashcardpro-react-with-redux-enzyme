import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Stack from './components/Stack'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './reducres';
import { setStack } from './actions';
import { Provider } from 'react-redux';
import StackForm from './components/StackForm'

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(setStack({ id: 0, title: 'example', cards: [] }))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/stack" component={Stack} />
                <Route exact path="/stack-form" component={StackForm} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
