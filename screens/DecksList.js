import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import DeckItem from "../components/DeckItem";

const DATA = [
  {
    id: "bd7acbzea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68acfc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694az0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7aczbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68cafc-c605-48d3-a4f8-fbd91aa97f6ff3",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571fffe29d72",
    title: "Third Item",
  },
  {
    id: "bd7acb4fea-c1b1-46c2-aed5-3ad53afffbb28ba",
    title: "First Item",
  },
  {
    id: "3ac682afc-c605-48d3-a4f8-fbd91affa97f63",
    title: "Second Item",
  },
  {
    id: "5822694a0f-3da1-471f-bd96-145571e2ff9d72",
    title: "Third Item",
  },
  {
    id: "bd337acbea-c1b1-46c2-aed5-3ad53dddabb28ba",
    title: "First Item",
  },
  {
    id: "3ac6834afc-c605-48d3-a4f8-fbd91addda97f63",
    title: "Second Item",
  },
  {
    id: "5869434a0f-3da1-471f-bd96-14557dd1e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c134b1-46c2-aed5-3ad53abddb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-4834d3-a4f8-fbd91aadd97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-b34d96-145571edd9d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3a34d5dddd3abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fb34ddd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-1455dd3471e29d72",
    title: "Third Item",
  },
];

const DecksList = ({ navigation }) => {
  const handleCardSelected = (id) => {
    navigation.navigate({ name: "Detail", params: { id } });
  };
  const renderItem = ({ item }) => {
    return <DeckItem item={item} onPress={() => handleCardSelected(item.id)} />;
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      // extraData={selectedId}
    />
  );
};

export default DecksList;
