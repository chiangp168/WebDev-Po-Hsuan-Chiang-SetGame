export default function CardReducer(state= {
    numOfSelectedCards: 0,
    currentDeck: [],
    displayDeck: [],
    keepSelecting: true,
    selectedCards: new Set([]),
    gameLevel: 1,
    url: "/",
    displaySize: 12,
    gameFinished: false
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
                        let featureCombo = {cardCount: count, cardShading: shading, cardColor: color, cardShape: shape}
                        const patterns = [];
                        if(shape === "circle" && shading === "solid") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg viewBox="0 0 50 50" key={i}>
                                        <circle cx="50%" cy="50%" r="23" stroke={color} fill={color}/>
                                    </svg>)
                            }
                        } else if(shape === "circle" && shading === "empty") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg viewBox="0 0 50 50" key={i}>
                                        <circle cx="50%" cy="50%" r="23" stroke={color} fill="none"/>
                                    </svg>)
                            }
                        } else if(shape === "circle" && shading === "stripe") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    // this pattern is reference from https://codepen.io/chriscoyier/pen/BmJdrY
                                    <svg viewBox="0 0 50 50" key={i}>
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
                                    <svg id="triangle" viewBox="0 0 100 100" key={i}>
                                        <polygon points="50 0, 100 100, 0 100" stroke={color} fill={color}/>
                                    </svg>)
                            }
                        } else if(shape === "triangle" && shading === "empty") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg id="triangle" viewBox="0 0 100 100" key={i}>
                                        <polygon points="50 0, 99 99, 0 99" stroke={color} strokeWidth="2" fill="none"/>
                                    </svg>)
                            }
                        } else if(shape === "triangle" && shading === "stripe") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg viewBox="0 0 50 50" key={i}>
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
                                    <svg viewBox="0 0 100 100" key={i}>
                                        <rect x="0" y="0" width="100%" height="100%" stroke={color} fill={color}/>
                                    </svg>)
                            }
                        } else if(shape === "square" && shading === "empty") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg viewBox="0 0 100 100" key={i}>
                                        <rect x="0" y="0" width="100%" height="100%" stroke={color} strokeWidth="3" fill="none"/>
                                    </svg>)
                            }
                        } else if(shape === "square" && shading === "stripe") {
                            for (let i = 0; i < count; i++) {
                                patterns.push(
                                    <svg viewBox="0 0 50 50" key={i}>
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

                        allCircles.push({design: patterns, selected: false, id: id, features: featureCombo});
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
                            let featureCombo = {cardCount: count, cardShading: shading, cardColor: color, cardShape: shape}
                            const patterns = [];
                            if(shape === "circle" && shading === "solid") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg viewBox="0 0 50 50" key={i}>
                                            <circle cx="50%" cy="50%" r="23" stroke={color} fill={color}/>
                                        </svg>)
                                }
                            } else if(shape === "circle" && shading === "empty") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg viewBox="0 0 50 50" key={i}>
                                            <circle cx="50%" cy="50%" r="23" stroke={color} fill="none"/>
                                        </svg>)
                                }
                            } else if(shape === "circle" && shading === "stripe") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        // this pattern is reference from https://codepen.io/chriscoyier/pen/BmJdrY
                                        <svg viewBox="0 0 50 50" key={i}>
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
                                        <svg id="triangle" viewBox="0 0 100 100" key={i}>
                                            <polygon points="50 0, 100 100, 0 100" stroke={color} fill={color}/>
                                        </svg>)
                                }
                            } else if(shape === "triangle" && shading === "empty") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg id="triangle" viewBox="0 0 100 100" key={i}>
                                            <polygon points="50 0, 99 99, 0 99" stroke={color} strokeWidth="2" fill="none"/>
                                        </svg>)
                                }
                            } else if(shape === "triangle" && shading === "stripe") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg viewBox="0 0 50 50" key={i}>
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
                                        <svg viewBox="0 0 100 100" key={i}>
                                            <rect x="0" y="0" width="100%" height="100%" stroke={color} fill={color}/>
                                        </svg>)
                                }
                            } else if(shape === "square" && shading === "empty") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg viewBox="0 0 100 100" key={i}>
                                            <rect x="0" y="0" width="100%" height="100%" stroke={color} strokeWidth="3" fill="none"/>
                                        </svg>)
                                }
                            } else if(shape === "square" && shading === "stripe") {
                                for (let i = 0; i < count; i++) {
                                    patterns.push(
                                        <svg viewBox="0 0 50 50" key={i}>
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
                            allCircles.push({design: patterns, selected: false, id: id, features: featureCombo});
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
        
        return{
            ...state,
            currentDeck: allCircles,
            displaySize: 12,
            gameFinished: false
        }
    } else if (action.type === "incrementCount") {
        let newCard = state.currentDeck.find(card => {return card.id === Number(action.value)});
        newCard.selected = true;
        let newSelectedCards = new Set([])
        for(let value of state.selectedCards){newSelectedCards.add(value)}
        newSelectedCards.add(Number(action.value))
        return {
            ...state,
            numOfSelectedCards: state.numOfSelectedCards + 1,
            selectedCards: newSelectedCards
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

    } else if(action.type === "draw") {
        return {
            ...state,
            displaySize: state.displaySize + 3
        }
    } else if (action.type === "checkCount"){
        console.log("checkCount")
        let newDeck = [...state.currentDeck]
        let newCount = state.numOfSelectedCards
        let displayNumber = state.displaySize
        let newSelectedCards = state.selectedCards
        if(state.numOfSelectedCards === 3) {
            let cardsToCheck = newDeck.filter(card => state.selectedCards.has(card.id))
            let card1 = cardsToCheck[0];
            let card2 = cardsToCheck[1];
            let card3 = cardsToCheck[2];
            let isSet = ((card1.features.cardColor === card2.features.cardColor && card2.features.cardColor === card3.features.cardColor && card3.features.cardColor === card1.features.cardColor) || 
                        (card1.features.cardColor !== card2.features.cardColor && card2.features.cardColor !== card3.features.cardColor && card3.features.cardColor !== card1.features.cardColor))
                        &&
                        ((card1.features.cardShape === card2.features.cardShape && card2.features.cardShape === card3.features.cardShape && card3.features.cardShape === card1.features.cardShape) ||
                        (card1.features.cardShape !== card2.features.cardShape && card2.features.cardShape !== card3.features.cardShape && card3.features.cardShape !== card1.features.cardShape))
                        &&
                        ((card1.features.cardCount === card2.features.cardCount && card2.features.cardCount === card3.features.cardCount && card3.features.cardCount === card1.features.cardCount) ||
                        (card1.features.cardCount !== card2.features.cardCount && card2.features.cardCount !== card3.features.cardCount && card3.features.cardCount !== card1.features.cardCount))
                        && 
                        ((card1.features.cardShading === card2.features.cardShading && card2.features.cardShading === card3.features.cardShading && card3.features.cardShading === card1.features.cardShading) ||
                        (card1.features.cardShading !== card2.features.cardShading && card2.features.cardShading !== card3.features.cardShading && card3.features.cardShading !== card1.features.cardShading))
            if(isSet) {
                newDeck = newDeck.filter(card => !state.selectedCards.has(card.id));
                if(displayNumber > 12) {
                    displayNumber -= 3
                }
            }
            newDeck.forEach(card => card.selected = false);
            newSelectedCards = []
            newCount = 0
        }

        return {
            ...state,
            numOfSelectedCards: newCount,
            currentDeck: newDeck,
            displaySize: displayNumber,
            selectedCards: newSelectedCards,
        }
    } else if (action.type === "autoDraw") {
        console.log("autoDraw")
        let newDisplaySize = state.displaySize
        if(state.gameLevel === 2) {
            let hasSet = false
            while(!hasSet && newDisplaySize < 81) {
                let currentDisplay = state.currentDeck.slice(0, newDisplaySize)
                let count = currentDisplay.length
                for (let i = 0; i < count; i++) {
                    for (let j = i + 1; j < count; j++) {
                        for (let k = j + 1; k < count; k++) {
                            let card1 = currentDisplay[i]
                            let card2 = currentDisplay[j]
                            let card3 = currentDisplay[k]
                            hasSet = ((card1.features.cardColor === card2.features.cardColor && card2.features.cardColor === card3.features.cardColor && card3.features.cardColor === card1.features.cardColor) || 
                            (card1.features.cardColor !== card2.features.cardColor && card2.features.cardColor !== card3.features.cardColor && card3.features.cardColor !== card1.features.cardColor))
                            &&
                            ((card1.features.cardShape === card2.features.cardShape && card2.features.cardShape === card3.features.cardShape && card3.features.cardShape === card1.features.cardShape) ||
                            (card1.features.cardShape !== card2.features.cardShape && card2.features.cardShape !== card3.features.cardShape && card3.features.cardShape !== card1.features.cardShape))
                            &&
                            ((card1.features.cardCount === card2.features.cardCount && card2.features.cardCount === card3.features.cardCount && card3.features.cardCount === card1.features.cardCount) ||
                            (card1.features.cardCount !== card2.features.cardCount && card2.features.cardCount !== card3.features.cardCount && card3.features.cardCount !== card1.features.cardCount))
                            && 
                            ((card1.features.cardShading === card2.features.cardShading && card2.features.cardShading === card3.features.cardShading && card3.features.cardShading === card1.features.cardShading) ||
                            (card1.features.cardShading !== card2.features.cardShading && card2.features.cardShading !== card3.features.cardShading && card3.features.cardShading !== card1.features.cardShading))
                            if(hasSet) {
                                console.log("there is a set")
                                console.log(i, j, k)
                                return {
                                    ...state,
                                    displaySize: newDisplaySize
                                }
                            }
                        }
                        
                    }
                }
                console.log("no set")
                newDisplaySize += 3 
            }
            console.log("0 set possible")
            return {
                ...state,
                displaySize: newDisplaySize,
                gameFinished: true
            }
        } else {
            console.log("is there a set?")
            let hasSet = false
            while(!hasSet && newDisplaySize < 81) {
                let currentDisplay = state.currentDeck.slice(0, newDisplaySize)
                let count = currentDisplay.length
                for (let i = 0; i < count; i++) {
                    for (let j = i + 1; j < count; j++) {
                        for (let k = j + 1; k < count; k++) {
                            let card1 = currentDisplay[i]
                            let card2 = currentDisplay[j]
                            let card3 = currentDisplay[k]
                            hasSet = ((card1.features.cardColor === card2.features.cardColor && card2.features.cardColor === card3.features.cardColor && card3.features.cardColor === card1.features.cardColor) || 
                            (card1.features.cardColor !== card2.features.cardColor && card2.features.cardColor !== card3.features.cardColor && card3.features.cardColor !== card1.features.cardColor))
                            &&
                            ((card1.features.cardShape === card2.features.cardShape && card2.features.cardShape === card3.features.cardShape && card3.features.cardShape === card1.features.cardShape) ||
                            (card1.features.cardShape !== card2.features.cardShape && card2.features.cardShape !== card3.features.cardShape && card3.features.cardShape !== card1.features.cardShape))
                            &&
                            ((card1.features.cardCount === card2.features.cardCount && card2.features.cardCount === card3.features.cardCount && card3.features.cardCount === card1.features.cardCount) ||
                            (card1.features.cardCount !== card2.features.cardCount && card2.features.cardCount !== card3.features.cardCount && card3.features.cardCount !== card1.features.cardCount))
                            && 
                            ((card1.features.cardShading === card2.features.cardShading && card2.features.cardShading === card3.features.cardShading && card3.features.cardShading === card1.features.cardShading) ||
                            (card1.features.cardShading !== card2.features.cardShading && card2.features.cardShading !== card3.features.cardShading && card3.features.cardShading !== card1.features.cardShading))
                            if(hasSet) {
                                console.log("there is a set")
                                console.log(i, j, k)
                                return {
                                    ...state
                                }
                            }
                        }
                        
                    }
                }
                newDisplaySize += 3 
            }
            console.log("0 set possible")
            return {
                ...state,
                gameFinished: true
            }
        }
    }
    return state
}