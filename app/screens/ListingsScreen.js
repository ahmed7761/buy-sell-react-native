import React, {useState, useEffect} from 'react';
import Screen from "../components/Screen";
import {FlatList, StyleSheet} from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from '../api/listings';
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";


const ListingsScreen = ({ navigation }) => {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadListings();
    },[]);

    const loadListings = async () => {
      setLoading(true);
      const response = await listingApi.getListings();
      setLoading(false);

      if(!response.ok){
          return setError(true);
      }

      setError(false);
      setListings(response.data);
    };


    return (
        <Screen style={styles.screen}>
            {error && <>
                <AppText>Couldn't retieve the listings</AppText>
                <AppButton title="Retry" onPress={loadListings} />
            </>
            }
            <AppActivityIndicator visible={loading} />
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate("ListingDetails", item)}
                    />
                }
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;