import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

 export default function TabsLayout(){
    return (
    
    <Tabs
        screenOptions={{
            headerShown: false,
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: () => <Ionicons name="home"/>
            }}
        />
        <Tabs.Screen
            name="about"
            options={{
                title: 'About',
                tabBarIcon: () => <Ionicons name="information"/>
            }}
        />
        <Tabs.Screen
            name="newGame"
            options={{
                title: 'newGame',
                tabBarIcon: () => <Ionicons name="file-tray"/>
            }}
        />
    </Tabs>
    )
 }