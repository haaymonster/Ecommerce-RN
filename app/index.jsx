import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/sign-in");
    }, 2000);
  }, []);
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full  relative">
          <View className="relative -mt-16">
            <Image
              source={images.quickmartstart}
              className="w-[263px] h-[76px]"
              resizeMode="contain"
            ></Image>
            <Text className="absolute right-[3px] bottom-[-4px]">
              Asia’s No 1 Ecommerce App
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622"></StatusBar>
    </SafeAreaView>
  );
}
