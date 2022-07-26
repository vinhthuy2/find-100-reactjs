// input: maxRange,
import classes from "./Panel.module.css";
import Number from "../number/Number";
import {useRef} from "react";

const Panel = props => {
    const numbers = Array.from({length: props.maxRange}, (_,i) => i + 1);
    const panelRef = useRef();
    const PANEL_SIZE = 500;
    const style = {
        height: PANEL_SIZE,
        width: PANEL_SIZE
    }
    setTimeout(()=>{
        console.log(panelRef.current)
    })
    return (
        <div ref={panelRef} className={classes.panel} style={style}>
            {numbers.map((n) => <Number panelSize={PANEL_SIZE} key={`number_${n}`} numberValue={n}/>)}
        </div>
    )
}

export default Panel;