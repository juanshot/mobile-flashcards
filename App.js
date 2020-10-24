import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, SafeAreaView } from "react-native";
import store from "./store";

import DeckDetail from "./screens/DecksMain";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <DeckDetail />
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
