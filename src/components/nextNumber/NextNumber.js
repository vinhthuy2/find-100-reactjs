import {GameContext} from "../../contexts/context";
import {useContext} from "react";
import classes from './NextNumber.module.css';

export const NextNumber = () => {
    const gameCtx = useContext(GameContext);
    return (
        <div className={classes.container}>{gameCtx.nextNumber}</div>
    )
}