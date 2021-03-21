import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class LandingPage extends React.Component {
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
                    <button onClick={() => this.gameLevel(1)}>Easy</button>
                    <button onClick={() => this.gameLevel(2)}>Medium</button>
                    <button onClick={() => this.gameLevel(3)}>Hard</button>
                    <Link to="/game">
                        <button>
                        Play!
                        </button>
                    </Link>
                    
                    <h1>You have selected {easy}</h1>
                </div>
            )
        } else if(this.props.gameLevel === 2) {
            return (
                <div>
                    <button onClick={() => this.gameLevel(1)}>Easy</button>
                    <button onClick={() => this.gameLevel(2)}>Medium</button>
                    <button onClick={() => this.gameLevel(3)}>Hard</button>
                    <Link to="/game">
                        <button>
                        Play!
                        </button>
                    </Link>
                    <h1>You have selected {medium}</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={() => this.gameLevel(1)}>Easy</button>
                    <button onClick={() => this.gameLevel(2)}>Medium</button>
                    <button onClick={() => this.gameLevel(3)}>Hard</button>
                    <Link to="/game">
                        <button>
                        Play!
                        </button>
                    </Link>
                    <h1>You have selected {hard}</h1>
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
  )(LandingPage)