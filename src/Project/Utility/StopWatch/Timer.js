import React from "react";
import classes from "./Timer.module.css";

const  Timer = (props) => {
return (
	<div className={classes.timer}>
	<span className={classes.digits}>
		{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
	</span>
	<span className={classes.digits}>
		{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
	</span>
	<span className={classes.digitsMiliSec}>
		{("0" + ((props.time / 10) % 100)).slice(-2)}
	</span>
	</div>
);
}

export default Timer;
