import AsyncStorage from "@react-native-community/async-storage";

const DECKS = "DECKS";

export const fetchDecks = async () => {
  return AsyncStorage.getItem(DECKS);
};

const getDeck = (deckId) => {
  return {};
};

export const saveDeckTitle = async (title) => {
  return AsyncStorage.setItem(DECKS, JSON.stringify({ title }));
};

const addDeckQuestion = (deckId, question) => {
  // add question passed to the deck
};
