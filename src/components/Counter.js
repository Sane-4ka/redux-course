// import { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions'
// import { bindActionCreators } from "redux";

// class Counter extends Component {
//     render() {
//         const {counter, inc, dec, rnd, reset} = this.props;
//         return (
//             <div className="jumbotron">
//                 <h1>{counter}</h1>
//                 <button onClick={dec} className="btn btn-primary">DEC</button>
//                 <button onClick={inc} className="btn btn-primary">INC</button>
//                 <button onClick={rnd} className="btn btn-primary">RND</button>
//                 <button onClick={reset} className="btn btn-primary">RESET</button>
//             </div>
//         )
//     }
// }

const Counter = ({counter, inc, dec, rnd, reset}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
            <button onClick={reset} className="btn btn-primary">RESET</button>
        </div>
    )
}

const mapStateToProps = (reduserState) => {
    return {
        counter: reduserState.value
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// }

export default connect(mapStateToProps, actions)(Counter);