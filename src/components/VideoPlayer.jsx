import React, { useEffect, useState, useRef } from "react"
import YouTube from "@u-wave/react-youtube"

import VolumeControls from './VolumeControls'
import playlistData from "../playLists.json"
import PlaylistSelect from './PlaylistSelect'

//Controls toggle youtube native controls, 0 to deactivate
//rel is for related videos, deactivate by principle to reduce clutter with 0 as value
//modest is for modest branding, removing the pesky youtube logo with 1 as value

//TODO : add option for privacy focused cookies, i'm SURE there is an optional parameter for this
// PLed8-hbpS2Hatx4qQGRzHckZ6TZrFxzJh
const VideoPlayer = (props) => {

    const [volume, setVolume] = useState(0)
    const [playlist, setPLaylist] = useState(playlistData.nature)
    const [muted, setMuted] = useState(false) //set to true for default mute
    const [numberpaused, setNumberpaused] = useState(0)
    const vidRef = useRef()

    const onPlayerReady = (event) => {
        const player = event.target
        player.loadPlaylist({
            listType: 'playlist',
            list: playlist
        })
        console.log(player.getPlaylist());
    }
    
    const onPlayerError = (event) => {
        console.log(`Personalized error handler`, event)
    }

    const handleVolume = (e) => {
        setVolume(e.target.value)
      }

    const handleMute = (e) => {
        e.preventDefault()
        !muted ? setMuted(true) : setMuted(false)

    }
    
      // this is so weird...the code breaks if the function below isn't used....gets choppy but it works!
    const onPlayerPause = (event) => {
        const player = event.target
        if(numberpaused === 0) {
            player.loadPlaylist({
                listType: 'playlist',
                list: playlist,
                index: Math.floor(Math.random() * 50)
            })
            setNumberpaused(numberpaused + 1)
        }
    }

    //to do, test a pre-page with info given through it
    const handleNature = (e) => {
        e.preventDefault()
            setPLaylist(playlistData.nature)
        console.log(vidRef.current.props.list)
        setNumberpaused(0)
      }
      const handleScience = (e) => {
        e.preventDefault()
        setPLaylist(playlistData.science)
        console.log(vidRef.current.props.list)
        setNumberpaused(0)
      }
      const handleHistory = (e) => {
        e.preventDefault()
        setPLaylist(playlistData.history)
        console.log(vidRef.current.props.list)
        setNumberpaused(0)
      }
      const handleDocumentary = (e) => {
        e.preventDefault()
        setPLaylist(playlistData.documentary)
        console.log(vidRef.current.props.list)
        setNumberpaused(0)
      }
      const handleMusic = (e) => {
        e.preventDefault()
        setPLaylist(playlistData.music)
        console.log(vidRef.current.props.list)
        setNumberpaused(0)
      }

    return (
        <>
        <YouTube list={playlist} listType="playlist" ref={vidRef} width="853" height="480" id="player" autoplay={props.autoplay} controls={props.controls} modestBranding={props.modestbranding} showRelatedVideos={props.rel} muted={muted} onReady={onPlayerReady} volume={volume} onError={onPlayerError} onPause={onPlayerPause} />
        <VolumeControls type="range" min={0} max={1} step={0.01} value={volume} onChangeHandler={handleVolume} muteClick={handleMute} ifMuted={muted}/>
        <PlaylistSelect natureOnClick={handleNature} scienceOnClick={handleScience} historyOnClick={handleHistory} documentaryOnClick={handleDocumentary} musicOnClick={handleMusic} />
        </>
    )
}

export default VideoPlayer