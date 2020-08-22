import React from 'react';
import ReactDOM from 'react-dom';
import {useGlobalState} from '../index'

const PlayersDisplay = () => {
    const [state, dispatch] = useGlobalState();
 
    return (
        <div>
            <blockquote>{state.player1Name}</blockquote>
            <blockquote>{state.player2Name}</blockquote>
        </div>
    )
}
export default PlayersDisplay;
