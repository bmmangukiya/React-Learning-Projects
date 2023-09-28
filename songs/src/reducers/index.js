import { combineReducers } from "redux";

const songsReducers = () => {
  return [
    { title: "No Scrub", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it That Wat", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  song: songsReducers,
  selectedSong: selectedSongReducer,
});
