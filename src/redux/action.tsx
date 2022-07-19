import React from 'react';
import { act } from 'react-dom/test-utils';
import Song from '../classes/Song.class';

export function GetAllSongs(songs: Song[]) {
  return { type: "GET_ALL_SONGS", payload: songs };
}
export function addSong(newSong: Song) {
  return { type: 'ADD_SONG', payload: newSong }
}
export function deleteSong(id: string) {
  return { type: 'DELETE_SONG', payload: id }
}
export function editSong(editSong: Song) {
  return { type: 'EDIT_SONG', payload: editSong }
}
export function getByArtist(artist: string, songs: Array<Song>) {
  return { type: 'GET_BY_ARTIST', payload: songs }
}