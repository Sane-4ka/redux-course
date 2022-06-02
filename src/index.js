import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
import {legacy_createStore as createStore, bindActionCreators} from 'redux'
import reducer from './reducer';
// import {inc, dec, rnd, reset} from './actions'
// import * as actions from './actions'
import { Provider } from 'react-redux';

import App from './components/App';

const store = createStore(reducer);

// const  {dispatch, subscribe, getState} = store;
// const {inc, dec, rnd, reset} = bindActionCreators(actions, dispatch);
// const update = () => {
    
// }
ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            {/* <Counter 
                counter={getState().value}
                inc={inc}
                dec={dec}
                rnd={() => {
                    const value = Math.floor(Math.random() * 10);
                    rnd(value);
                }}
                reset={reset}
            /> */}
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
// update();
// вызыв при изм state
// subscribe(update);
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


// document.getElementById('inc').addEventListener('click', inc);
// // document.getElementById('dec').addEventListener('click', decDispatch)
// document.getElementById('dec').addEventListener('click', dec)
// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10);
//     rnd(value);
// })
// document.getElementById('reset').addEventListener('click', () => {
//     dispatch(reset());
// })

// let state = reducer(initialState, {type: 'INC'})
// state = reducer(state, {type: 'INC'})
// state = reducer(state, {type: 'INC'})
// state = reducer(state, {type: 'INC'})
// console.log(state);


