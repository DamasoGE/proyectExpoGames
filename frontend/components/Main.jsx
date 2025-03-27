import { useEffect, useState } from "react";
import { FlatList, View, ScrollView, ActivityIndicator, StyleSheet, RefreshControl } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";

import {API_URL} from 'react-native-dotenv';

import gamesApi from '../api/games.json' with { type: 'json' };

export function Main() {
  const [games, setGames] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();

  const fetchGames = async () =>{
    setRefreshing(true);
    try {
      const response = await fetch(`${API_URL}/`);
      if (!response.ok) {
        throw new Error('Error al obtener los juegos');
      }
      
      const data = await response.json();
      setGames(data.data);
    } catch (error) {
      console.error('Error al obtener los juegos:', error);
    } finally {
      setRefreshing(false);
    }

    // setRefreshing(true)
    // setTimeout(() => {
    //   setGames(gamesApi.games); // Simulación de actualización de datos
    //   setRefreshing(false);
    // }, 1000);
  }

  useEffect(() => {
    fetchGames()
    // getLatestGames().then((games) => {
    //   setGames(games);
    // });
  }, []);


  return (
    <View style={[{ paddingTop: insets.top, paddingBottom: insets.bottom }, styles.container]}>

    {games.length === 0 || refreshing ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game._id}
          refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              onRefresh={fetchGames} 
              colors={["#ff9800", "#ff5722"]}
              tintColor="#ff9800"
              progressBackgroundColor="#222" 
            />
          }
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} 
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingHorizontal: 12,
    flex: 1,  // Asegura que el contenedor ocupe el 100% del alto disponible
  }
});