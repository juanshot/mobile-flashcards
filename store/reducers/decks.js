import { ADD_DECK, SET_DECKS } from "./../actions/decks";
export default function decks(state = {}, action) {
  switch (action.type) {
    case SET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      };
    default:
      return {};
  }
}
