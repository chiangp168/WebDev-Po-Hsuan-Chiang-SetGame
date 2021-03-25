import React from 'react';
import Card from './Card';
import FeatureBtn from './FeatureBtn';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';



class Game extends React.Component {
  constructor(props) {
      super(props);
  }

  incrementCount(e) {
    let id = e.currentTarget.getAttribute('identifier');
    this.props.dispatch({
      type: "incrementCount",
      value: id
    })
    this.sleep(100).then(() => {this.props.dispatch({
      type: "checkCount"
    })})
    this.sleep(200).then(() => {this.props.dispatch({
      type: "autoDraw"
    })})
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
    this.props.dispatch({type: "autoDraw"})
  }

  checkCount() {
    this.props.dispatch({type: "checkCount"})
  }

  sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  

  render () {
    let size = this.props.displaySize;
    const oneValue = this.props.currentDeck.slice(0, size).map((oneCard, index) => {
      return (
          <Card design={oneCard.design} feature={oneCard.feature} key={index} countInt={(e) => this.incrementCount(e)} countDec={(e) => this.decrementCount(e)} i={oneCard.id} clicked={oneCard.selected}/>
      )
    })
    if(!this.props.gameFinished){
      return (
        <div className="appContainer">
          <Navbar/>
          <FeatureBtn/>
          <div className="header">
            <h3>{this.props.message}</h3>
          </div>
          <div className='cardContainer'>
            {oneValue}
          </div>
        </div>
      );
    }else{
      return (
        <div className="appContainer">
          <Navbar/>
          <FeatureBtn/>
          <div className="header">
            <h2>Congratulations! No more set possible!</h2>
          </div>
          
        </div>
      );
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
    displaySize: state.card.displaySize,
    gameFinished: state.card.gameFinished,
    message: state.card.message  
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)