import {
  FlatList,
  Modal,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Stories, { Story } from "../../components/Stories";
import Post from "../../components/Post";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Feed = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView className=" h-full">
      <GestureHandlerRootView>
        <FlatList
          data={[...Array(4)]}
          ListHeaderComponent={() => (
            <View>
              <View className="flex-row justify-between px-2 relative">
                <Pressable
                  className="flex-row gap-1 items-center"
                  onPress={() => setIsShowModal(!isShowModal)}
                >
                  <Text className="text-2xl"> Einstagram</Text>
                  <EvilIcons name="chevron-down" size={30} color="black" />
                </Pressable>
                {isShowModal && (
                  <View className="bg-white p-2 absolute left-[15px] top-[30px] w-[150px]  rounded-lg transition-all ease-in-out z-10">
                    <View className="relative gap-2">
                      <Text className="">Following</Text>
                      <Text>Favorites</Text>
                    </View>
                  </View>
                )}

                <View className="flex-row gap-[24px] items-center">
                  <AntDesign name="hearto" size={24} color="black" />
                  <AntDesign name="message1" size={20} color="black" />
                  <MaterialIcons name="video-call" size={28} color="black" />
                </View>
              </View>
              <Stories />
            </View>
          )}
          ListEmptyComponent={() => (
            <View className=" h-full items-center justify-center">
              <Text className="text-3xl">No post</Text>
              <Text>Be the first to create a post</Text>
            </View>
          )}
          renderItem={({ item, index }) => <Post />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  areaView: {
    height: "100%",
  },
});
