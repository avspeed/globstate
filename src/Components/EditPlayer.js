import React from 'react';
import ReactDOM from 'react-dom';
import {useGlobalState} from '../index'

const EditPlayer = () => {
    const [state, dispatch] = useGlobalState();
 
    const onFormChange = (e) =>{
        if (e.target.id === "player1-name")
        {
            dispatch( { player1Name: e.target.value })
        }
        else if (e.target.id === "player2-name")
        {
            dispatch( { player2Name: e.target.value })
        }
    }

    return (
        <div>
            <form onChange={onFormChange}>
                <label for="player1-name">Player 1:</label><br/>
                <input type="text" id="player1-name" name="player1-name" value={state.player1Name}/><br/>
                <label for="player2-name">Player 2:</label><br/>
                <input type="text" id="player2-name" name="player2-name" value={state.player2Name}/><br/><br/>
            </form> 
        </div>
    )
}
export default EditPlayer;
