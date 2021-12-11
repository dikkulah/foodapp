import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const SearchBar = ({ term, onTermChange , onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />

      <TextInput
        value={term}
        placeholder="Search"
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 40,
    borderRadius: 10, // köşe yumuşatma
    margin: 10, // kenarlardan boşluk
    flexDirection: "row", //satır haline getirme
    marginBottom:10,
    
  },
  inputStyle: {
    flex: 1, // yayma
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center", //iconu merkez alma
    marginHorizontal: 10, // yatay boşluk
  },
});

export default SearchBar;
