import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
import {legacy_createStore as createStore, bindActionCreators} from 'redux'
import reducer from './reducer';
// import {inc, dec, rnd, reset} from './actions'
import * as actions from './actions'

const store = createStore(reducer);

const  {dispatch, subscribe, getState} = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

// вызыв при изм state
subscribe(update);
// store.subscribe(() => {
//     update()
//     console.log(store.getState());
// })

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd
// }, dispatch);
const {inc, dec, rnd, reset} = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);
// document.getElementById('dec').addEventListener('click', decDispatch)
document.getElementById('dec').addEventListener('click', dec)
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
})
document.getElementById('reset').addEventListener('click', () => {
    dispatch(reset());
})

// let state = reducer(initialState, {type: 'INC'})
// state = reducer(state, {type: 'INC'})
// state = reducer(state, {type: 'INC'})
// state = reducer(state, {type: 'INC'})
// console.log(state);

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <>

            </>
        </React.StrictMode>
    );
