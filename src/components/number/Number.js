import classes from './Number.module.css';
import {useContext, useState} from "react";
import {GameContext} from "../../contexts/context";

const Number = props => {
    const [solved, setSolved] = useState(false);
    const ctx = useContext(GameContext);
    const curNumber = props.numberValue;

    const onClickedHanlder = () => {
        if (curNumber === ctx.nextNumber) {
            ctx.setNextNumber(curNumber + 1);
            if (!solved) {
                setSolved(true);
            }
        }
    }
    return (
        <button onClick={onClickedHanlder} className={`${classes['number-container']} ${solved && classes.solved}`}>{curNumber}</button>
    )
}

export default Number;