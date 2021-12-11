import React, { useState, useEffect } from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";

import useRestaurants from "../hooks/useRestauransts";
import RestaurantList from "../Components/RestaurantList";
import { StatusBar } from "expo-status-bar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();
  const filterRestaurantsByPrice = (price) => {
    // $ $$ $$$
    return restaurants.filter((restaurants) => {
      return restaurants.price === price;
    });
  };
  return (
    <View style={styles.main}>
      {errorMessage ? <Text>{errorMessage} </Text> : null}
      <ScrollView>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />

        <Text>We have found {restaurants.length} </Text>
        <RestaurantList
          title="Cost Effective"
          restaurants={filterRestaurantsByPrice("$")}
        />
        <RestaurantList
          title="Bit Pricier"
          restaurants={filterRestaurantsByPrice("$$")}
        />
        <RestaurantList
          title="Big Spender"
          restaurants={filterRestaurantsByPrice("$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginLeft: 10,
    backgroundColor: "white",
  },
});

export default SearchScreen;
