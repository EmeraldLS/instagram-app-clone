import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import Boyimg from "../assets/free.jpg";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { router } from "expo-router";

const Post = ({ username, audio, description, total_coments, postImg }) => {
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      setLike(true);
    });

  const [like, setLike] = useState(false);
  return (
    <View className="space-y-2 mb-2">
      <View className="flex-row items-center justify-between px-5">
        <View className="flex-row gap-2 items-center">
          <Pressable
            className="h-8 w-8 rounded-full bg-black"
            onPress={() => router.push("/user/itscassieblanko")}
          >
            <Image />
          </Pressable>
          <View>
            <Text className="text-sm font-semibold">itscassieblanko</Text>
            <View className="flex-row gap-1">
              <Feather name="music" size={14} color="black" />
              <Text className="text-xs">itscassieblanko Original audio</Text>
            </View>
          </View>
        </View>
        <View>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </View>
      </View>
      <GestureDetector gesture={doubleTap} className=" h-[300px] w-full border">
        <Image
          source={Boyimg}
          resizeMode="cover"
          className=" overflow-hidden h-[300px] w-full"
        />
      </GestureDetector>
      <View className="flex-row items-center justify-between px-5 pt-1">
        <View className="flex-row gap-3 ">
          <TouchableOpacity activeOpacity={0.5} onPress={() => setLike(!like)}>
            <AntDesign name="hearto" size={20} color={like ? "red" : "black"} />
          </TouchableOpacity>
          <EvilIcons name="comment" size={24} color="black" />
          <FontAwesome5 name="telegram-plane" size={20} color="black" />
        </View>
        <FontAwesome5 name="bookmark" size={24} color="black" />
      </View>
      <View className="px-5">
        <Text className="font-semibold">1,954 likes</Text>
        <Text className="mt-1 flex-row">
          <Text className="font-semibold">itscassieblanko</Text>
          <Text>The devil doesnt want me to pray this over you</Text>
        </Text>
        <Text className=" text-gray-400 mt-1">View all 164 comments</Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
