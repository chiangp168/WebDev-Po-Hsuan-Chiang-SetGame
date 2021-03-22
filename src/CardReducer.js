export default function CardReducer(state= {
    numOfSelectedCards: 0,
    currentDeck: [],
    displayDeck: [],
    keepSelecting: true,
    selectedCards: new Set([]),
    gameLevel: 1,
    url: "/",
    displaySize: 12,
}, action) {
    if (action.type === "createDeck") {
        let allCircles = [];
        let shapes = ["circle", "triangle", "square"];
        let colors = ["green", "red", "blue"];
        let shadings = ["solid", "empty", "stripe"];
        let nums = [1, 2, 3]
        let id = 0;
        if(state.gameLevel === 1) {
            for(let i = 0; i < shapes.length; i++) {
                for(let j = 0; j < colors.length; j++) {
                    for(let k = 0; k < shadings.length; k++) {
                        let count = 1;
                        let shading = shadings[k]
                        let color = colors[j]
                        let shape = shapes[i]
                        const patterns = [];
                        if(shape === "circle" && shading === "solid") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg viewBox="0 0 50 50">
                                        <circle cx="50%" cy="50%" r="23" stroke={color} fill={color}/>
                                    </svg>)
                            }
                        } else if(shape === "circle" && shading === "empty") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg viewBox="0 0 50 50">
                                        <circle cx="50%" cy="50%" r="23" stroke={color} fill="none"/>
                                    </svg>)
                            }
                        } else if(shape === "circle" && shading === "stripe") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    // this pattern is reference from https://codepen.io/chriscoyier/pen/BmJdrY
                                    <svg viewBox="0 0 50 50">
                                        <defs>
                                            <pattern id="pattern-stripe" 
                                            width="5" height="3" 
                                            patternUnits="userSpaceOnUse"
                                            patternTransform="rotate(45)">
                                            <rect width="4" height="3" transform="translate(0,0)" fill="white"></rect>
                                            </pattern>
                                            <mask id="mask-stripe">
                                            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
                                            </mask>      
                                        </defs>
                                        <circle cx="50%" cy="50%" r="23" stroke={color} mask="url(#mask-stripe)" fill={color}/>
                                    </svg>)
                                    
                            }
                        } else if(shape === "triangle" && shading === "solid") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg id="triangle" viewBox="0 0 100 100">
                                        <polygon points="50 0, 100 100, 0 100" stroke={color} fill={color}/>
                                    </svg>)
                            }
                        } else if(shape === "triangle" && shading === "empty") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg id="triangle" viewBox="0 0 100 100">
                                        <polygon points="50 0, 99 99, 0 99" stroke={color} strokeWidth="2" fill="none"/>
                                    </svg>)
                            }
                        } else if(shape === "triangle" && shading === "stripe") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg viewBox="0 0 50 50">
                                        <defs>
                                            <pattern id="pattern-stripe" 
                                            width="4" height="4" 
                                            patternUnits="userSpaceOnUse"
                                            patternTransform="rotate(45)">
                                            <rect width="2" height="4" transform="translate(0,0)" fill="white"></rect>
                                            </pattern>
                                            <mask id="mask-stripe">
                                            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
                                            </mask>      
                                        </defs>
                                        <polygon points="25 0, 50 50, 0 50" stroke={color} mask="url(#mask-stripe)" fill={color}/>
                                    </svg>)
                            }
                        } else if(shape === "square" && shading === "solid") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg viewBox="0 0 100 100">
                                        <rect x="0" y="0" width="100%" height="100%" stroke={color} fill={color}/>
                                    </svg>)
                            }
                        } else if(shape === "square" && shading === "empty") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg viewBox="0 0 100 100">
                                        <rect x="0" y="0" width="100%" height="100%" stroke={color} strokeWidth="3" fill="none"/>
                                    </svg>)
                            }
                        } else if(shape === "square" && shading === "stripe") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg viewBox="0 0 50 50">
                                        <defs>
                                            <pattern id="pattern-stripe" 
                                            width="4" height="4" 
                                            patternUnits="userSpaceOnUse"
                                            patternTransform="rotate(45)">
                                            <rect width="2" height="4" transform="translate(0,0)" fill="white"></rect>
                                            </pattern>
                                            <mask id="mask-stripe">
                                            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
                                            </mask>      
                                        </defs>
                                        <rect x="0" y="0" width="100%" height="100%" stroke={color} mask="url(#mask-stripe)" fill={color}/>
                                    </svg>)
                            }
                        }

                        allCircles.push({design: patterns, selected: false, id: id});
                        id++;
                    }
                }
            }

        } else {
            for(let i = 0; i < shapes.length; i++) {
                for(let j = 0; j < colors.length; j++) {
                    for(let k = 0; k < shadings.length; k++) {
                        for(let l = 0; l < nums.length; l++) {
                            let count = nums[l];
                            let shading = shadings[k]
                            let color = colors[j]
                            let shape = shapes[i]
                            const patterns = [];
                            if(shape === "circle" && shading === "solid") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg viewBox="0 0 50 50">
                                            <circle cx="50%" cy="50%" r="23" stroke={color} fill={color}/>
                                        </svg>)
                                }
                            } else if(shape === "circle" && shading === "empty") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg viewBox="0 0 50 50">
                                            <circle cx="50%" cy="50%" r="23" stroke={color} fill="none"/>
                                        </svg>)
                                }
                            } else if(shape === "circle" && shading === "stripe") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        // this pattern is reference from https://codepen.io/chriscoyier/pen/BmJdrY
                                        <svg viewBox="0 0 50 50">
                                            <defs>
                                                <pattern id="pattern-stripe" 
                                                width="5" height="3" 
                                                patternUnits="userSpaceOnUse"
                                                patternTransform="rotate(45)">
                                                <rect width="4" height="3" transform="translate(0,0)" fill="white"></rect>
                                                </pattern>
                                                <mask id="mask-stripe">
                                                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
                                                </mask>      
                                            </defs>
                                            <circle cx="50%" cy="50%" r="23" stroke={color} mask="url(#mask-stripe)" fill={color}/>
                                        </svg>)
                                        
                                }
                            } else if(shape === "triangle" && shading === "solid") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg id="triangle" viewBox="0 0 100 100">
                                            <polygon points="50 0, 100 100, 0 100" stroke={color} fill={color}/>
                                        </svg>)
                                }
                            } else if(shape === "triangle" && shading === "empty") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg id="triangle" viewBox="0 0 100 100">
                                            <polygon points="50 0, 99 99, 0 99" stroke={color} strokeWidth="2" fill="none"/>
                                        </svg>)
                                }
                            } else if(shape === "triangle" && shading === "stripe") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg viewBox="0 0 50 50">
                                            <defs>
                                                <pattern id="pattern-stripe" 
                                                width="4" height="4" 
                                                patternUnits="userSpaceOnUse"
                                                patternTransform="rotate(45)">
                                                <rect width="2" height="4" transform="translate(0,0)" fill="white"></rect>
                                                </pattern>
                                                <mask id="mask-stripe">
                                                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
                                                </mask>      
                                            </defs>
                                            <polygon points="25 0, 50 50, 0 50" stroke={color} mask="url(#mask-stripe)" fill={color}/>
                                        </svg>)
                                }
                            } else if(shape === "square" && shading === "solid") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg viewBox="0 0 100 100">
                                            <rect x="0" y="0" width="100%" height="100%" stroke={color} fill={color}/>
                                        </svg>)
                                }
                            } else if(shape === "square" && shading === "empty") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg viewBox="0 0 100 100">
                                            <rect x="0" y="0" width="100%" height="100%" stroke={color} strokeWidth="3" fill="none"/>
                                        </svg>)
                                }
                            } else if(shape === "square" && shading === "stripe") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg viewBox="0 0 50 50">
                                            <defs>
                                                <pattern id="pattern-stripe" 
                                                width="4" height="4" 
                                                patternUnits="userSpaceOnUse"
                                                patternTransform="rotate(45)">
                                                <rect width="2" height="4" transform="translate(0,0)" fill="white"></rect>
                                                </pattern>
                                                <mask id="mask-stripe">
                                                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
                                                </mask>      
                                            </defs>
                                            <rect x="0" y="0" width="100%" height="100%" stroke={color} mask="url(#mask-stripe)" fill={color}/>
                                        </svg>)
                                }
                            }
                            allCircles.push({design: patterns, selected: false, id: id});
                            id++;
                        }
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
        
        console.log(allCircles)
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
        if(newCount === 3) {
            newCount = 0;
            let cardsToCheck = newDeck.filter(card => newSelectedCards.has(card.id))
            let card1 = cardsToCheck[0];
            let card2 = cardsToCheck[1];
            let card3 = cardsToCheck[2];
            let isSet = ((card1.color === card2.color && card2.color === card3.color && card3.color === card1.color) || 
                        (card1.color !== card2.color && card2.color !== card3.color && card3.color !== card1.color))
                        &&
                        ((card1.shape === card2.shape && card2.shape === card3.shape && card3.shape === card1.shape) ||
                        (card1.shape !== card2.shape && card2.shape !== card3.shape && card3.shape !== card1.shape)) 
                        &&
                        ((card1.count === card2.count && card2.count === card3.count && card3.count === card1.count) ||
                        (card1.count !== card2.count && card2.count !== card3.count && card3.count !== card1.count))
                        && 
                        ((card1.shading === card2.shading && card2.shading === card3.shading && card3.shading === card1.shading) ||
                        (card1.shading !== card2.shading && card2.shading !== card3.shading && card3.shading !== card1.shading))
            if(isSet) {
                newDeck = newDeck.filter(card => !newSelectedCards.has(card.id))
            }

            newDeck.forEach(card => card.selected = false);
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
    } else if (action.type === "setGameLevel"){
        let game = 1
        if(action.value === 1) {
            game = 1 
        } else if(action.value === 2){
            game = 2
        } else {
            game = 3
        }
        return {
            ...state,
            gameLevel: game
        }

    }else if (action.type === "checkCount"){
        if(state.numOfSelectedCards === 3) {
            let newDeck = [...state.currentDeck]
            newDeck.forEach(card => card.selected = false);
            // newDeck = newDeck.filter(card => !newSelectedCards.has(card.id))
        }
    // } 
    }
    return state
}