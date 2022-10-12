import React from "react";

const PlaylistElem = (props) => {
    return (
        <button key={Math.random()} onClick={props.onClickHandle}>{props.name}</button>
    )
}

export default PlaylistElem