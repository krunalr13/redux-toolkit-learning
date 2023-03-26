import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer, // combined reducer
    movies: moviesReducer // combined reducer
  }
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
