import React from "react";
import classes from "./ControlButtons.module.css";

const ControlButtons = (props) => {
const StartButton = (
	<div className={classes.btn}
		onClick={props.handleStart}>
	Start
	</div>
);
const ActiveButtons = (
    
	<div className={classes.btnGrp}>
	<div className={classes.btn}
		onClick={props.handleReset}>
		Reset
	</div>
	<div className={classes.btn}
		onClick={props.handlePauseResume}>
		{props.isPaused ? "Resume" : "Pause"}
	</div>
	</div>
);

return (
	<div className={classes.ControlButtons}>
	<div>{props.active ? ActiveButtons : StartButton}</div>
	</div>
);
}


export default ControlButtons;