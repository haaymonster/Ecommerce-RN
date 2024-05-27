import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../components/HeaderBar";

const Web = () => {
  return (
    <SafeAreaView className="h-full bg-white px-4">
      <HeaderBar />
      <WebView source={{ uri: "https://expo.dev" }} />
    </SafeAreaView>
  );
};

export default Web;
