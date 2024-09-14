import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import squirrel from "../assets/squirrel.jpg";

export const Story = ({ mystory, viewed, username, size, imgSrc }) => {
  return (
    <View className="flex-col justify-center items-center gap-1 ">
      <View
        className={`${
          !viewed && "rounded-full p-[2px]"
        } from-pink via-red to-yellow`}
      >
        <Pressable
          className={`rounded-full bg-gradient-to-r  relative bg-gray-200`}
          onPress={() => {}}
        >
          <Image
            source={squirrel}
            resizeMode="cover"
            className="w-24 h-24 rounded-full"
          />
          {mystory && (
            <Pressable
              className=" bg-blue-400 w-[25px] h-[25px] rounded-full items-center justify-center absolute bottom-0 right-0"
              onPress={() => {}}
            >
              <FontAwesome5 name="plus" size={18} color="white" />
            </Pressable>
          )}
        </Pressable>
      </View>
      <Text className="text-sx text-black">{username}</Text>
    </View>
  );
};

const Stories = () => {
  return (
    <View className="flex-row mt-2 mb-5 px-2">
      <Story mystory={true} username="Your Story" size={18} />
      <FlatList
        horizontal
        contentContainerStyle={{
          gap: 5,
          marginLeft: 5,
        }}
        data={[...Array(10)]}
        renderItem={({ index }) => (
          <Story username={`user-${index + 1}`} size={18} />
        )}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({});
