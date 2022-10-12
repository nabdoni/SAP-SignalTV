import React from "react";

const VolumeControls = (props) => {

    return (
        <div>
    <input className="volume" type={props.type} min={props.min} max={props.max} step={props.step} value={props.value} onChange={props.onChangeHandler} /> 
    <button onClick={props.muteClick}>{!props.ifMuted ? `click to mute` : `muted`}</button>
        </div>
    )
}

export default VolumeControls