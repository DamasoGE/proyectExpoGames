import { Link, Stack } from 'expo-router';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Detail(){

    const { id, game } = useLocalSearchParams();

    const gameData = typeof game === "string" ? JSON.parse(game) : null;

    return(
        <>
            <Stack.Screen
            options={{
                headerStyle: {backgroundColor: "orange"},
                headerTintColor: "white",
                headerTitle: "",
                headerLeft: () => null, //Hace aparecer una flecha para volver atrás
                headerRight: () => (
                    <Text>{gameData.title}</Text>
                )
            }}/>
            <View style={styles.container}>
                    <Text>Detalle del juego {gameData.title}</Text>
                    <View style={styles.card}>
                        <Text style={styles.title}>{gameData.title}</Text>
                        <Text style={styles.score}>{gameData.metacritic_score}</Text>
                        <Text style={styles.description}>{gameData.developer}</Text>
                    </View>

                    {Platform.OS === 'web' && (
                      <Link href="/" style={{ color: 'orange' }}>
                        Volver atrás
                      </Link>
                    )}
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 12,
        },
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
      color: "#fff",
    },
    score: {
      fontSize: 20,
      fontWeight: "bold",
      color: "green",
      marginBottom: 10,
    },
  });
  