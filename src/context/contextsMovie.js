import axios from "axios";
import React, { useReducer } from "react";
import { CASE_GET_MOVIE, CASE_GET_ONE_MOVIE } from "../helpers/cases";
import { MOVIES_API } from "../helpers/const";

export const contextsMovie = React.createContext();

const INIT_STATE = {
  movie: [],
  oneMovie: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_MOVIE:
      return {
        ...state,
        movie: action.payload.data,
      };
    case CASE_GET_ONE_MOVIE:
      return {
        ...state,
        oneMovie: action.payload.data,
      };
    default:
      return state;
  }
};

const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getMovie() {
    let result = await axios(MOVIES_API + window.location.search);
    console.log(result);
    dispatch({
      type: CASE_GET_MOVIE,
      payload: result,
    });
  }

  async function getOneMovie(id) {
    let result = await axios(`${MOVIES_API}/${id}`);
    dispatch({
      type: CASE_GET_ONE_MOVIE,
      payload: result,
    });
  }

  return (
    <contextsMovie.Provider
      value={{
        movie: state.movie,
        oneMOvie: state.oneMovie,
        getMovie,
        getOneMovie,
      }}
    >
      {children}
    </contextsMovie.Provider>
  );
};

export default MovieContextProvider;
