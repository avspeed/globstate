import React from 'react';
import ReactDOM from 'react-dom';
import {useGlobalState} from '../index'

const ActionButton = () => {
    const [state, dispatch] = useGlobalState();
 
    return (
        <div style={{textAlign:"center"}}>
            <input type="button" value="Start" disabled={!(state.player1Name != "" && state.player2Name != "") }/>
        </div>
    )
}
export default ActionButton;
