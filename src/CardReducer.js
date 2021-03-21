export default function CardReducer(state= {
    numOfSelectedCards: 0,
    currentDeck: [],
    displayDeck: [],
    keepSelecting: true,
    selectedCards: new Set([])
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
        // if(newCount === 3) {
        //     newCount = 0;
        //     newDeck.forEach(card => card.selected = false);
        //     newDeck = newDeck.filter(card => !newSelectedCards.has(card.id))
        //     newSelectedCards = []
        // }
        let newCard = state.currentDeck.find(card => {return card.id === Number(action.value)});
        newCard.selected = true;
        console.log(newCard.id)
        console.log(state.selectedCards)
        let newSelectedCards = new Set([])
        console.log(newSelectedCards)
        for(let value of state.selectedCards){newSelectedCards.add(value)}
        newSelectedCards.add(Number(action.value))
        console.log(newSelectedCards)
        let newCount = state.numOfSelectedCards + 1
        let newDeck = [...state.currentDeck]
        if(newCount === 4) {
            newCount = 0;
            newDeck.forEach(card => card.selected = false);
            // newDeck = newDeck.filter(card => !newSelectedCards.has(card.id))
            newSelectedCards = []
        }
        return {
            ...state,
            numOfSelectedCards: newCount,
            selectedCards: newSelectedCards,
            currentDeck: newDeck
        }
        
    } else if (action.type === "decrementCount"){
        let newCard = state.currentDeck.find(card => {return card.id === Number(action.value)});
        newCard.selected = false;
        let newSelectedCards = new Set(state.selectedCards)
        newSelectedCards.delete(Number(action.value))
        return {
            ...state,
            numOfSelectedCards: state.numOfSelectedCards - 1,
            selectedCards: newSelectedCards
        } 
    } else if (action.type === "checkCount"){
        if(state.numOfSelectedCards === 3) {
            let newDeck = [...state.currentDeck]
            newDeck.forEach(card => card.selected = false);
            // newDeck = newDeck.filter(card => !newSelectedCards.has(card.id))
        }
    }
    return state
}