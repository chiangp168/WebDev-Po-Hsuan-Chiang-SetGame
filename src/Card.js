import React from 'react';
import './index.css';
import {connect} from 'react-redux';


class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    selectCard(e) {
        if(!this.props.clicked) {
            this.props.countInt(e);
        } else {
            this.props.countDec(e);
        }
    }



    render() {
        let styleClass = this.props.clicked ? "selectedCard" : "noneSelectedCard";
        return (
            <div className="cardWrap" >
                <div className={styleClass} onClick={(e) => {this.selectCard(e);}} identifier={this.props.i} key={this.props.key}>
                    {this.props.design}
                </div>
            </div>
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
    selectedCards: state.card.selectedCards
    
}
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(Card)