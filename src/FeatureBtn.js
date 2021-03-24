import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class FeatureBtn extends Component {
    resetGame() {
        this.props.dispatch({type: "createDeck"})
        this.props.dispatch({type: "autoDraw"})
    }

    drawCards() {
        this.props.dispatch({type: "draw"})
    }
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <div className="p-2">
                        <button type="button" className="btn btn-outline-dark" onClick={() => this.resetGame()}>Reset</button>
                    </div>
                    <div className="p-2">
                        <button type="button" className="btn btn-outline-dark" onClick={() => this.drawCards()}>Draw 3 Cards</button>
                    </div>
                </div>
            </div>
        );
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
  )(FeatureBtn)