import React from "react";
import { View, StyleSheet } from "react-native";

const ScreenWithActionsLayout = (props) => (
  <React.Fragment>
    <View style={styles.deckDetail}>{props.top}</View>
    <View style={styles.deckActions}>{props.bottom}</View>
  </React.Fragment>
);

export default ScreenWithActionsLayout;

const styles = StyleSheet.create({
  deckDetail: {
    flex: 3,
    justifyContent: "flex-start",
  },
  deckActions: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
