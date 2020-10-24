import { fetchDecks as fetDecksFromApi } from "../../utils/api";

export const SET_DECKS = "GET_DECKS";
export const ADD_DECK = "ADD_DECK";

export const setDecks = (decks) => {
  return {
    type: SET_DECKS,
    decks,
  };
};
export const addDeck = (deck) => {
  return {
    type: ADD_DECK,
    deck,
  };
};
export const handleFetchDecks = () => {
  return async (dispatch) => {
    try {
      const decks = await fetDecksFromApi();
      dispatch(setDecks(decks));
    } catch (err) {
      console.error(err);
    }
  };
};
export const handleAddDeck = (deck) => {
  return async (dispatch, getState) => {
    try {
      dispatch(addDeck(deck));
    } catch (err) {
      console.error(err);
    }
  };
};
