import React from 'react';
import Card from './Card';


export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        numOfSelectedCards: 0,
    }
  }

  incrementCount() {
    this.setState({
      numOfSelectedCards: this.state.numOfSelectedCards + 1
    })
}

  decrementCount() {
      this.setState({
        numOfSelectedCards: this.state.numOfSelectedCards - 1
      })
  }


  render () {
    let allCircles = [];
    let shapes = ["circle", "triangle", "square"];
    let colors = ["green", "red", "blue"];
    let shadings = ["solid", "empty", "stripe"];
    let nums = [1, 2, 3]

    for(let i = 0; i < shapes.length; i++) {
      for(let j = 0; j < colors.length; j++) {
        for(let k = 0; k < shadings.length; k++) {
          for(let l = 0; l < nums.length; l++) {
            allCircles.push({count: nums[l], shading: shadings[k], color: colors[j], shape: shapes[i]})
          }
        }
      }
    }

    let totalCard = allCircles.length;
    for (let index = totalCard - 1; index > -1; index--) {
      let card = Math.floor(Math.random() * totalCard);
      let temp = allCircles[index]
      allCircles[index] = allCircles[card]
      allCircles[card] = temp
    }

    const oneValue = allCircles.map((oneCard, index) => {
      return (
          <Card shape={oneCard.shape} color={oneCard.color} shading={oneCard.shading} count={oneCard.count} key={index} countInt={() => this.incrementCount()} countDec={() => this.decrementCount()} cardCount={this.state.numOfSelectedCards}/>
      )
  })

    return (
      <div className="AppContainer">
        {oneValue}
      </div>
    );
  }
}