import React from "react";
import Song from "../classes/Song.class";

export function addSong(song: Song) {
  return { type: "ADD_SONG", payload: song };
}

export function deleteSong(song: Song) {
  return { type: "DELETE_SONG", payload: song.id };
}

export function editSong(song: Song) {
  return { type: "EDIT_SONG", payload: song };
}
