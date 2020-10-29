import React from "react";
import { connect } from "react-redux";
import { FlatList } from "react-native";
import Container from "../components/Container";
import DeckItem from "../components/DeckItem";

const DecksList = ({ navigation, decks }) => {
  const handleCardSelected = (id) => {
    navigation.navigate({ name: "Detail", params: { id } });
  };
  const renderItem = ({ item }) => {
    return <DeckItem item={item} onPress={() => handleCardSelected(item.id)} />;
  };

  return (
    <Container>
      <FlatList
        data={decks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

const mapStateToProps = ({ decks }) => ({
  decks: Object.values(decks),
});

export default connect(mapStateToProps)(DecksList);
