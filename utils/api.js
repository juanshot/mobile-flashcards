import AsyncStorage from "@react-native-community/async-storage";

const DECKS = "DECKS";

export const fetchDecks = async () => {
  return AsyncStorage.getItem(DECKS);
};

export const saveDecks = async (decks) => {
  return AsyncStorage.setItem(DECKS, decks);
};
