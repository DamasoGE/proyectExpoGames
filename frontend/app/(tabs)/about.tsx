import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Slot, Stack, useRouter } from "expo-router"
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"

export default function About(){
    
    const router = useRouter();

    const handleGoBack = () =>{
        router.back();
    }

    return(
        <>
            <Stack.Screen
                        options={{
                            headerStyle: {backgroundColor: "orange"},
                            headerTintColor: "white",
                            headerTitle: "",
                            headerLeft: () => null, //Hace aparecer una flecha para volver atrás
                            headerRight: () => (
                                <Text>About Us</Text>
                            )
                        }}/>
            <ScrollView>

                <Text style={{fontWeight: "bold"}}>Página About</Text>

                <Text style={styles.text}> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates quidem illo qui ad eius in velit nemo perferendis inventore magni saepe laudantium animi facere, cupiditate ut esse deleniti. Voluptas!
                    
                </Text>

                <Text style={styles.text}> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates quidem illo qui ad eius in velit nemo perferendis inventore magni saepe laudantium animi facere, cupiditate ut esse deleniti. Voluptas!
                    Iusto inventore dolor voluptatibus quam et hic quas voluptate nesciunt itaque, nulla odio ratione quisquam aspernatur at, libero suscipit officia sed architecto odit animi beatae? Vitae, distinctio! Animi, accusamus! Quae.
                    Doloremque a unde molestiae quo? Ex quos reiciendis vel unde aliquam adipisci quaerat incidunt repudiandae dolor sapiente nisi, quod sunt sequi odit. Sapiente tempora, accusantium aliquam dolor labore rem aspernatur?
                    
                </Text>

                <Text style={styles.text}> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates quidem illo qui ad eius in velit nemo perferendis inventore magni saepe laudantium animi facere, cupiditate ut esse deleniti. Voluptas!
                    
                    Blanditiis facere placeat amet perspiciatis itaque! Iste accusamus laudantium, at ipsa sed asperiores nulla possimus ipsam alias deleniti molestiae a molestias illum nostrum nesciunt dolorem, rerum vero ad! Inventore, modi.
                </Text>

                <Text style={styles.text}> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates quidem illo qui ad eius in velit nemo perferendis inventore magni saepe laudantium animi facere, cupiditate ut esse deleniti. Voluptas!
                    Iusto inventore dolor voluptatibus quam et hic quas voluptate nesciunt itaque, nulla odio ratione quisquam aspernatur at, libero suscipit officia sed architecto odit animi beatae? Vitae, distinctio! Animi, accusamus! Quae.
                
                </Text>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
      marginBottom: 10,
    },
})