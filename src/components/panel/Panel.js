// input: maxRange,
import classes from "./Panel.module.css";
import Number from "../number/Number";
import {useRef, useContext, useMemo} from "react";
import {GameContext} from "../../contexts/context";

const Panel = props => {
    const gameContext = useContext(GameContext);
    const PANEL_SIZE = 500;
    const style = {
        height: PANEL_SIZE,
        width: PANEL_SIZE
    }

    const numbers = Array.from({length: gameContext.maxRange}, (_, i) => i + 1);
    const shuffled = useMemo(() => numbers.sort((a, b) => 0.5 - Math.random()), []);

    const panelRef = useRef();

    return (
        <div ref={panelRef} className={classes.panel} style={style}>
            {shuffled.map((n) => <Number panelSize={PANEL_SIZE} key={`number_${n}`} numberValue={n}/>)}
        </div>
    )
}

export default Panel;