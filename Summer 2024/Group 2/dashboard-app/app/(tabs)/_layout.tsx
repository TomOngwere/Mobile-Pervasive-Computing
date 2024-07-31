import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Vitals",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="barschart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="complications"
        options={{
          title: "Complications",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={focused ? "exclamationcircle" : "exclamationcircleo"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
