import Song from "../classes/Song.class";
import Songs from "../classes/Songs.interface";

type Action =
  | { type: "GET_ALL_SONGS"; payload: Song[] }
  | { type: "ADD_SONG"; payload: Song }
  | { type: "EDIT_SONG"; payload: Song }
  | { type: "DELETE_SONG"; payload: string }
  | { type: "SAVE_CHANGES"; payload: string }
  | { type: "GET_BY_ARTIST"; payload: Song[] };

const initialState: Songs = {
  songsList: [],
};

export const songReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "GET_ALL_SONGS":
      return { ...state, songsList: [...action.payload] };
    case "ADD_SONG":
      return { ...state, songsList: [...state.songsList, action.payload] };
    case "DELETE_SONG":
      return {
        ...state,
        songsList: state.songsList.filter((song) => song.id !== action.payload),
      };
    case "EDIT_SONG":
      return {
        ...state,
        songsList: [
          ...state.songsList.map((song: Song) => {
            return song.id === action.payload.id ? action.payload : song;
          }),
        ],
      };
    default:
      return { state };
  }
};
