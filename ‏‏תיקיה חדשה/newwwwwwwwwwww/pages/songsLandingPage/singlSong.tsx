import React from 'react';
import { useSelector } from 'react-redux';
import Song from '../../../new/classes/Song.class';
import { RootState } from '../../../new/redux/store';

function SinglSong(props:Song) {
    
    let allSongs=useSelector((state:RootState) => state.songReducer);
    debugger
    return(
        <>
        </>
    )
}
