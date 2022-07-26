import classes from './Number.module.css';

const Number = props => {
    const x_per = Math.random()*(props.panelSize - 40);
    const y_per = Math.random()*(props.panelSize - 40);
    const NUMBER_SIZE = 40;

    const style = {
        transform: `translate(${x_per}px, ${y_per}px)`,
        transformBox: 'content-box',
        height: NUMBER_SIZE,
        width: NUMBER_SIZE
    }
    return (
        <div className={classes['number-container']} style={style}>
            <span>{props.numberValue}</span>
        </div>
    )
}

export default Number;