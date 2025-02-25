import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";

let TradeMark: string = "RANT™";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: "#0C0A09",
        tabBarInactiveBackgroundColor: "#0C0A09",

        tabBarActiveTintColor: "#FAFAFA",
        tabBarInactiveTintColor: "#A3A3A3",

        headerStyle: {
          backgroundColor: '#0C0A09',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: TradeMark,
          tabBarLabel: "JUST RANT",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: TradeMark,
          tabBarLabel: "YOUR RANTS",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}

