import './App.css';
import Panel from "./components/panel/Panel";
import React, {memo, useState} from "react";
import {GameContext} from "./contexts/context";
import {NextNumber} from "./components/nextNumber/NextNumber";

const DefaultGameCtx = {
    maxRange: 100,
    nextNumber: 1,
    setNextNumber: null
}
const MemoPanel = memo(Panel);

function App() {
    let [nextNumber, setNextNumber] = useState(1);
    const ctxValue = {
        ...DefaultGameCtx,
        nextNumber,
        setNextNumber
    }

    return (
        <GameContext.Provider value={ctxValue}>
            <div className="App">
                <MemoPanel/>
                <NextNumber/>
            </div>
        </GameContext.Provider>
    );
}

export default App;
