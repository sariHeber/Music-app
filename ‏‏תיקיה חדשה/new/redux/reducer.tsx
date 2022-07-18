import React from "react";
// import {  getAll1} from "../Api/SongsApi";
// import { Gener } from "../classes/Gener.enum";
// import Song from "../classes/Song.class";

// type Action = { type: "ADD_SONG", payload: Song } | { type: "EDIT_SONG", payload: Song } |
// { type: "DELETE_SONG", payload: String }|{type:'GET_ALL',payload: null}
//  const initialState: any = [];
// //  const initialState: Song[] =
// // [
// //   new Song("3", "c", "cc", Gener.CLASSICAL, 3, 3),
// //   new Song("4", "d", "dd", Gener.ROCK, 4, 4),
// //   new Song("5", "e", "ee", Gener.ROCK, 5, 5),
// //   new Song("6", "f", "ff", Gener.RAP, 8, 8),
// // ];
// const songReducer = (state = initialState, action: Action) => {
//   switch (action.type) {
//     case 'GET_ALL':
//       debugger
//             state = action.payload;
//             break;
//     case "ADD_SONG":
//         action.payload.id=state.length.toString();
//         return [...state, action.payload]

//     // case "EDIT_SONG":
//     //     console.log(action.payload)
//     //     const songss: Song[] = state.map(song => song.id === action.payload.id ? song = action.payload : song = song)
//     //     return songss

//     case "DELETE_SONG":
//       console.log('kkkkkkkkkkkk')
//       alert('hhhhhhhhhhhhhh')
//       return state.filter((song: Song) => song.id !== action.payload)

//     default: return state
// }

// };
// export default songReducer;
