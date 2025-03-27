import { Link, router } from "expo-router";
import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated, Pressable } from "react-native";

export function GameCard({ game }) {

  const handlePress = () =>{
    router.push({pathname: `/${game.id}`, params: {game : JSON.stringify(game)}})
  }

  return (
      <Pressable
      onPress={handlePress}>
        <View key={game.id} style={styles.card}>
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.score}>{game.metacritic_score}</Text>
          <Text style={styles.description}>{game.developer}</Text>
        </View>
      </Pressable>

  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
