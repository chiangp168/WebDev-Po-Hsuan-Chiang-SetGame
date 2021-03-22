import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends Component {
    newGame() {
        this.props.dispatch({
            type: "createDeck"
        })
    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
                {/* <form className="form-inline"> */}
                    
                        <div className="p-2">
                            <Link to="/">
                                <button className="btn btn-outline-light" type="button">Main</button>
                            </Link>
                        </div>
                        <div className="p-2">
                            <Link to="/game">
                                <button className="btn btn-outline-light" type="button" onClick={() => {this.newGame();}}>New Game</button>
                            </Link>
                        </div>
                        <div className="p-2">
                            <Link to="/rule">
                                <button className="btn btn-outline-light" type="button">Rule</button>
                            </Link>
                        </div>
                        
                    
                {/* </form> */}
            </nav>
        )
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
      displaySize: state.card.displaySize
        
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
