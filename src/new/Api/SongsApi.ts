import React from "react";
import axios from "axios"
import { addSong, deleteSong, editSong, GetAllSongs, getByArtist } from "../redux/action";
import Song from "../classes/Song.class";

export const getAll :any= () => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get('http://localhost:8080/songs/all');
            dispatch(GetAllSongs(res.data));
        }
        catch (err) {
            return err;
        }
    }
}

export const add:any = (song: Song) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.post('http://localhost:8080/songs/add', song, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            dispatch(addSong(res.data));
        }
        catch (err) {
            return err;
        }
    }
}

export const getSongByArtist:any= (artist: string) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get(`http://localhost:8080/songs/byArtist/${artist}`);
            dispatch(GetAllSongs(res.data));
        }
        catch (err) {
            return err;
        }
    }
}
export const deleteS:any = (id: string) => {
    return async (dispatch: any) => {
        try {
            await axios.delete(`http://localhost:8080/songs/delete/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            dispatch(deleteSong(id));
        }
        catch (err) {
            return err;
        }
    }
}

export const edit:any = (song: Song) => {
    return async (dispatch: any) => {
        try {
         const res=   await axios.put(`http://localhost:8080/songs/edit/${song.id}`,
            song,{
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            dispatch(editSong(song));
        }
        catch (err) {
            return err;
        }
    }
}
