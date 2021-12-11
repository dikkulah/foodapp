import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";

import useRestaurants from "../hooks/useRestauransts";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi,restaurants,errorMessage]=useRestaurants();

  return (
    <View style={styles.background}>
      {errorMessage ? <Text>{errorMessage} </Text> : null}
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have found {restaurants.length} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
