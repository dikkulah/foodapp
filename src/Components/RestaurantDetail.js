import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const RestaurantDetail = ({ restaurant }) => {
  return (
    <View>
      
      <Image 
        source={{ uri: restaurant.image_url }}
        style={styles.imageStyle}
      />
      <Text style={styles.nameStyle}>{restaurant.name}</Text>
      <Text style={styles.infoStyle}>
        {restaurant.rating} Stars ,{restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 250,
    width: 250,
    borderRadius:4,
    marginRight:15,

    
    },
  nameStyle:{
      marginLeft:15,
      fontWeight:"bold",
      fontSize:18
  },
  infoStyle:{
    marginLeft:15,
    color:"grey",
    marginBottom:10,
}
});
export default RestaurantDetail;
