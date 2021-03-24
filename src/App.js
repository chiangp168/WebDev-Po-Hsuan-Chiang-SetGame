import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    gameLevel(num) {
        if(num === 1) {
            this.props.dispatch({
                type: "setGameLevel",
                value: num 
            })
        } else if(num === 2) {
            this.props.dispatch({
                type: "setGameLevel",
                value: num 
            })
        } else {
            this.props.dispatch({
                type: "setGameLevel",
                value: num 
            })
        }
    }


    render() {
        let easy = "Easy level Game"
        let medium = "Medium level Game"
        let hard = "Hard level Game"
        if(this.props.gameLevel === 1) {
            return (
                <div>
                    <Navbar/>
                    <div className="header">
                        <h1>Choose Game Level</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="p-2">
                            <button type="button" className="btn btn-outline-dark" onClick={() => this.gameLevel(1)}>Easy</button>
                        </div>
                        <div className="p-2">
                            <button type="button" className="btn btn-outline-dark" onClick={() => this.gameLevel(2)}>Medium</button>
                        </div>
                        <div className="p-2">
                            <button type="button" className="btn btn-outline-dark" onClick={() => this.gameLevel(3)}>Hard</button>
                        </div>
                    </div>
                    <div className="header">
                        <h3>You have selected {easy}</h3>
                    </div>
                    <div className="header">
                        <Link to="/game">
                            <button type="button" className="btn btn-outline-dark">
                            Play!
                            </button>
                        </Link>
                    </div>
                    
                </div>
            )
        } else if(this.props.gameLevel === 2) {
            return (
                <div>
                    <Navbar/>
                    <div className="header">
                        <h1>Choose Game Level</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="p-2">
                            <button type="button" className="btn btn-outline-dark" onClick={() => this.gameLevel(1)}>Easy</button>
                        </div>
                        <div className="p-2">
                            <button type="button" className="btn btn-outline-dark" onClick={() => this.gameLevel(2)}>Medium</button>
                        </div>
                        <div className="p-2">
                            <button type="button" className="btn btn-outline-dark" onClick={() => this.gameLevel(3)}>Hard</button>
                        </div>
                    </div>
                    <div className="header">
                        <h3>You have selected {medium}</h3>
                    </div>
                    <div className="header">
                        <Link to="/game">
                            <button type="button" className="btn btn-outline-dark">
                            Play!
                            </button>
                        </Link>
                    </div>
                    
                </div>
            )
        } else {
            return (
                <div>
                    <Navbar/>
                    <div className="header">
                        <h1>Choose Game Level</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="p-2">
                            <button type="button" className="btn btn-outline-dark" onClick={() => this.gameLevel(1)}>Easy</button>
                        </div>
                        <div className="p-2">
                            <button type="button" className="btn btn-outline-dark" onClick={() => this.gameLevel(2)}>Medium</button>
                        </div>
                        <div className="p-2">
                            <button type="button" className="btn btn-outline-dark" onClick={() => this.gameLevel(3)}>Hard</button>
                        </div>
                    </div>
                    <div className="header">
                        <h3>You have selected {hard}</h3>
                    </div>
                    <div className="header">
                        <Link to="/game">
                            <button type="button" className="btn btn-outline-dark">
                            Play!
                            </button>
                        </Link>
                    </div>
                    
                </div>
            )
        }
        
        
    }
}

let mapDispatchToProps = function(dispatch, props) {
    return {
        dispatch: dispatch,
    }
  }

let mapStateToProps = function(state, props) {
    return {
      numOfSelectedCards: state.card.numOfSelectedCards,
      currentDeck: state.card.currentDeck,
      displayDeck: state.card.displayDeck,
      selectedCards: state.card.selectedCards,
      gameLevel: state.card.gameLevel
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)