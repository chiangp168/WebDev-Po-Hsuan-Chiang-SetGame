import React from 'react';
import Card from './Card';
import {connect} from 'react-redux';



class App extends React.Component {
  constructor(props) {
      super(props);
  }

  incrementCount(e) {
    let id = e.currentTarget.getAttribute('identifier');
    this.props.dispatch({
      type: "incrementCount",
      value: id
    })
}

  decrementCount(e) {
    let id = e.currentTarget.getAttribute('identifier');
    this.props.dispatch({
      type: "decrementCount",
      value: id
    })
  }

  componentDidUpdate() {
    if(this.props.numOfSelectedCards === 3) {
      this.props.dispatch({type: "checkCardCount"})
      console.log("hit three")
    }
  }

  componentDidMount() {
    this.props.dispatch({type: "createDeck"})
  }
  

  render () {
    const oneValue = this.props.currentDeck.map((oneCard, index) => {
      return (
          <Card shape={oneCard.shape} color={oneCard.color} shading={oneCard.shading} count={oneCard.count} key={oneCard.id} countInt={(e) => this.incrementCount(e)} countDec={(e) => this.decrementCount(e)} cardCount={this.props.numOfSelectedCards} i={oneCard.id} clicked={oneCard.selected}/>
      )
  })
    return (
      <div className="AppContainer">
        {oneValue}
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
    selectedCards: state.card.selectedCards
      
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)