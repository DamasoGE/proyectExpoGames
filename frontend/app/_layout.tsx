import { Stack, usePathname, useRouter } from "expo-router"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { Logo } from "../components/Logo"

export default function Layout(){

  const router = useRouter();
  const pathname = usePathname();

    const handlePress = () =>{
      if (pathname !== "/about") {
        router.push("/about");
      }
    }
    

    return(
        <View style={styles.container}>
            <Stack screenOptions={{
                 headerStyle: { backgroundColor: "black"},
                 headerTintColor: "white",
                 headerTitle: "",
                 headerLeft: () => <Logo />,
                 headerRight: () => (
                    <Pressable
                             onPressIn={handlePress} 
                              style={({ pressed }) => [
                                styles.button, // Aplica el estilo base del botón
                                { backgroundColor: pressed ? "darkorange" : "orange" }, // Cambia el color de fondo al presionar
                              ]}
                            >
                              <Text style={styles.buttonText}>Ir al ABOUT</Text>
                    </Pressable>
                 )
            }}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 12,

    },
    button: {
      backgroundColor: "orange",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 15,
      alignSelf: "center", // Ajusta el ancho al contenido
      fontWeight: "bold",
      cursor: "pointer" //solo en web
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
    },
  });
  