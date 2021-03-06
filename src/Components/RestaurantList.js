import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import RestaurantDetail from "./RestaurantDetail";
import { withNavigation } from "react-navigation";

const RestaurantList = ({ title, restaurants, navigation }) => {
  if (!restaurants.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(restaurants) => restaurants.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Restaurant", { id: item.id })}
            >
              <RestaurantDetail restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    marginBottom: 10,
  },
});
export default withNavigation(RestaurantList);
