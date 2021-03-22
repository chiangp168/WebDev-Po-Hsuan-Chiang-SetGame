import React from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';



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

  componentDidMount() {
    this.props.dispatch({type: "createDeck"})
  }

  checkCount() {
    this.props.dispatch({type: "checkCount"})
  }

  // determineSize() {
  //   this.props.dispatch({type: "decideSize"})
  // }


  

  render () {
    let size = this.props.displaySize;
    let c = this.props.numOfSelectedCards;
    console.log(size)
    console.log(c)
    const oneValue = this.props.currentDeck.slice(0, size).map((oneCard, index) => {
      return (
          <Card design={oneCard.design} key={oneCard.id} countInt={(e) => this.incrementCount(e)} countDec={(e) => this.decrementCount(e)} cardCount={this.props.numOfSelectedCards} i={oneCard.id} clicked={oneCard.selected} checkCount={() => this.checkCount()}/>
      )
  })
    return (
      <div className="AppContainer">
        <Navbar/>
        <div className='CardContainer'>
          {oneValue}
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
)(App)