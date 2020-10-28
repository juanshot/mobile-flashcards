import { ADD_DECK, ADD_CARD, SET_DECKS } from "./../actions/decks";
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
    case ADD_CARD:
      const selectedDeck = state[action.card.deckId];
      selectedDeck.cards = [...selectedDeck.cards, action.card];
      return {
        ...state,
        [action.card.deckId]: { ...selectedDeck },
      };
    default:
      return state;
  }
}
