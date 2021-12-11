import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import RestaurantDetail from "./RestaurantDetail";

const RestaurantList = ({ title, restaurants }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(restaurants) => restaurants.id}
        renderItem={({ item }) => {
          return <RestaurantDetail restaurant={item}/>;
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
  container:{
      marginBottom:10,
      
  }
});
export default RestaurantList;
