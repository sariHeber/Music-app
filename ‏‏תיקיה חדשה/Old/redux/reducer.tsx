import produce from "immer";
import { Gener } from "../../new/classes/Gener.enum";
import Song from "../../new/classes/Song.class";
import { Songs } from "../../new/classes/Songs.interface";

type Action =
  | { type: "ADD_SONG"; payload: Song }
  | { type: "EDIT_SONG"; payload: Song }
  | { type: "DELETE_SONG"; payload: string };
 const initialState: Song[] = []
//   new Song("3", "c", "cc", Gener.CLASSICAL, 3, 3),
//   new Song("4", "d", "dd", Gener.ROCK, 4, 4),
//   new Song("5", "e", "ee", Gener.ROCK, 5, 5),
//   new Song("6", "f", "ff", Gener.RAP, 8, 8),
// ];
const songReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_SONG":
      action.payload.id = state.length.toString();
      return [...state, action.payload];
    // debugger;
    // const oldItems = state || [];

    // // return [...state, action.payload]
    // return [
    //   ...state,
    //   state: oldItems.concat(action.payload)]
    // ;
    // return[{...state.songsList},action.payload]
    case "EDIT_SONG":
      console.log(action.payload);
      const songss: Song[] = state.map((song) =>
        song.id === action.payload.id ? (song = action.payload) : (song = song)
      );
      return songss;

    case "DELETE_SONG":
      return state.filter((song: Song) => song.id !== action.payload);
    default:
      return state;
  }
};
export default songReducer;
