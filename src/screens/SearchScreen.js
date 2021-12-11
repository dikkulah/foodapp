import React, { useState, useEffect } from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";

import useRestaurants from "../hooks/useRestauransts";
import RestaurantList from "../Components/RestaurantList";
import { StatusBar } from "expo-status-bar";

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();
  const filterRestaurantsByPrice = (price) => {
    // $ $$ $$$
    return restaurants.filter((restaurants) => {
      return restaurants.price === price;
    });
  };
  return (
    <>
      {errorMessage ? <Text>{errorMessage} </Text> : null}
      
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
      <ScrollView>
        <Text>We have found {restaurants.length} </Text>
        <RestaurantList
          title="Cost Effective"
          restaurants={filterRestaurantsByPrice("$")}
          navigation={navigation}
        />
        <RestaurantList
          title="Bit Pricier"
          restaurants={filterRestaurantsByPrice("$$")}
          navigation={navigation}
        />
        <RestaurantList
          title="Big Spender"
          restaurants={filterRestaurantsByPrice("$$$")}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default SearchScreen;
