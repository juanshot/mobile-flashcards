import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, SafeAreaView } from "react-native";
import store from "./store";

import DecksMain from "./screens/DecksMain";

import { handleSaveDecks } from "./store/actions/decks";

export default function App() {
  store.subscribe(() => {
    const { decks } = store.getState();
    store.dispatch(handleSaveDecks(JSON.stringify(decks)));
  });
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <DecksMain />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccdfff",
  },
});
