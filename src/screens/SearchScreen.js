import React from "react";
import { View,Text, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";


const SearchScreen =() => {
return(
    <View style={styles.background} >
        <SearchBar></SearchBar>
        <Text>Arama ekranı </Text>
    </View>




)
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'white'
    }
});

export default SearchScreen;