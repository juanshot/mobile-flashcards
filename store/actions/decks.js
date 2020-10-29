import { fetchDecks as fetDecksFromApi, saveDecks } from "../../utils/api";
export const SET_DECKS = "SET_DECKS";
export const ADD_CARD = "ADD_CARD";
export const ADD_DECK = "ADD_DECK";

export const setDecks = (decks) => {
  return {
    type: SET_DECKS,
    decks,
  };
};
export const addCard = (card) => {
  return {
    type: ADD_CARD,
    card,
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
      dispatch(setDecks(JSON.parse(decks)));
    } catch (err) {
      console.error(err);
    }
  };
};

export const handleAddCard = (card) => {
  return async (dispatch) => {
    try {
      dispatch(addCard(card));
    } catch (err) {
      console.error(err);
    }
  };
};

export const handleAddDeck = (deck) => {
  return async (dispatch) => {
    try {
      dispatch(addDeck(deck));
    } catch (err) {
      console.error(err);
    }
  };
};

export const handleSaveDecks = (decks) => {
  return async () => {
    try {
      const result = await saveDecks(decks);
    } catch (err) {
      console.error(err);
    }
  };
};
