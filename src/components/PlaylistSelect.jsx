import React from "react";
import PlaylistElem from "./PlaylistElem";

const PlaylistSelect = (props) => {
    return (
        <ul>
            <PlaylistElem key="Nature" name="Nature Channel" onClickHandle={props.natureOnClick}/>
            <PlaylistElem key="Music" name="Music Channel" onClickHandle={props.musicOnClick} />
            <PlaylistElem key="History" name="History Channel" onClickHandle={props.historyOnClick} />
            <PlaylistElem key="Documentary" name="Documentary Channel" onClickHandle={props.documentaryOnClick} />
            <PlaylistElem key="Science" name="Science Channel" onClickHandle={props.scienceOnClick} />
        </ul>
    )
}
export default PlaylistSelect