import Song from "../../new/classes/Song.class";

export function addSong(song:Song){
    debugger
    return {type:'ADD_SONG',payload:song}
}

export function deleteSong(song:Song){
    return{type:'DELETE_SONG',payload:song.id}
}

export function editSong(song:Song){
    debugger
    alert('editSong');
    return{type:'EDIT_SONG',payload:song}
}



// export const editSong = (songId:number,song:Song) => {
//     return {
//         type: "EDIT_SONG",
//         payload: {songId,song}
//     }
// }
