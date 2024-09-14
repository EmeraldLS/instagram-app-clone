import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const TabIcon = ({ color, focused, size }) => {
  return (
    <View>
      <MaterialIcons name="" size={size} color={color} />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: {},
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Feed",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <MaterialIcons name="search" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="reels"
          options={{
            title: "Reels",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="film" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="shop"
          options={{
            title: "Shop",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Feather name="shopping-bag" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="myprofile"
          options={{
            title: "Profile",
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
