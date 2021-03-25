import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

export default class Rule extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Navbar/>
                <div className="header">
                        <h1>Game Rules</h1>
                </div>
                <div className="paragraph">
                    <div className="lead">The goal of this game is to identify a 'Set' of three cards from the 12 cards displayed. There might be unmatch cards at the end
                        of the game. 
                        Each card has a variation of the following four features:
                        <div>
                            <ol>
                            <li>Shape: Each card contains circles, squares or triangles.</li>
                            <li>Color: Each card is blue, red or green.</li>
                            <li>Shading: Each card is solid, empty, or striped</li>
                            <li>Number: Each card has one, two, or three shapes</li>
                            </ol>
                        </div>
                        
                    </div>
                </div>
                <div className="header">
                    <h2>Game Difficulty Levels</h2>
                </div>
                <div className="paragraph">
                    <div className="lead">There are 3 difficulty levels you can choose from:
                        <div>
                            <ul>
                                <li>Easy: The cards will contain only 3 of the 4 features decribed above. There are 27 cards in the whole deck.</li>
                                <li>Medium: The cards will have all 4 features with 81 total cards in a deck. The game will automatically draw 3 
                                cards if there isn't a set in the 12 display cards</li>
                                <li>Hard: Same as a Medium level game, except 3 cards won't be drawn for the player even if there isn't a set within
                                12 displayed cards.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}