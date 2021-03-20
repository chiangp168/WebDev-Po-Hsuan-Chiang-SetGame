export default function CardReducer(state= {
    numOfSelectedCards: 0,
    currentDeck: [],
    displayDeck: [],
    selectedCards: []
}, action) {
    if (action.type === "createDeck") {
        let allCircles = [];
        let shapes = ["circle", "triangle", "square"];
        let colors = ["green", "red", "blue"];
        let shadings = ["solid", "empty", "stripe"];
        let nums = [1, 2, 3]
        let id = 0;

        for(let i = 0; i < shapes.length; i++) {
        for(let j = 0; j < colors.length; j++) {
            for(let k = 0; k < shadings.length; k++) {
            for(let l = 0; l < nums.length; l++) {
                allCircles.push({count: nums[l], shading: shadings[k], color: colors[j], shape: shapes[i], selected: false, id: id});
                id++;
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

        return{...state, currentDeck: allCircles}
    } else if (action.type === "incrementCount") {
        // let id = e.currentTarget.getAttribute('identifier');
        let newCard = state.currentDeck.find(card => {return card.id === Number(action.value)});
        console.log(state.numOfSelectedCards)
        console.log(state.selectedCards)
        return {
            ...state,
            numOfSelectedCards: state.numOfSelectedCards + 1,
            selectedCards: [...state.selectedCards, newCard]
        }
        
    } else if (action.type === "decrementCount"){
        console.log(state.numOfSelectedCards)
        console.log(state.selectedCards)
        return {
            ...state,
            numOfSelectedCards: state.numOfSelectedCards - 1,
            selectedCards: state.selectedCards.filter(card => card.id !== Number(action.value))
        } 
    } else if (action.type === "checkCardCount") {
        let newDeck = [...state.currentDeck]
        newDeck.forEach(card => card.selected = false)
        console.log("hi")
        console.log(state.currentDeck)
        return {
            ...state,
            currentDeck: newDeck
        }
    }
    return state
}