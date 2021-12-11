import React ,{useState,useEffect}from "react";
import { Image,View, StyleSheet,Text,FlatList } from "react-native";
import yelp from "../api/yelp";



const RestaurantScreen =({navigation}) => {
    const [restaurant,setRestaurant]= useState(null);

    const id = navigation.getParam('id');
    
    console.log(restaurant);

    const getRestaurant = async(id) => {
        const response= await yelp.get(`/${id}`);
        setRestaurant(response.data);

    };
    useEffect(()=> {
        getRestaurant(id);
    },[] );

    if(!restaurant){
        return null;

    }


    return(
        <View>
            <Text>{restaurant.name}</Text>
            <FlatList
                data={restaurant.photos}
                keyExtractor={(photo)=>photo }
                renderItem={({item}) => {
                    return(
                        <Image style={styles.image} source={{uri:item}}/>
                    )

                }}
            />
            
        </View>
    )

}

const styles = StyleSheet.create({
    image:{
        width:250,
        height:250,

    }

});

export default RestaurantScreen;