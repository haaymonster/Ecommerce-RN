import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { icons } from "../constants";
import { router } from "expo-router";

const HeaderBar = ({ title }) => {
  return (
    <View className="flex-row w-full items-center pb-4 border-b border-gray-200 mb-2">
      <TouchableOpacity onPress={() => router.back()}>
        <Image source={icons.leftArrow} className="w-[32px] h-[32px]"></Image>
      </TouchableOpacity>
      <Text className="text-lg pl-4">{title}</Text>
    </View>
  );
};

export default HeaderBar;
