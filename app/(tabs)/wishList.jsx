import { View, Text, Image, FlatList } from "react-native";
import React, { useState } from "react";
import WhishEmpty from "../../assets/images/whish-empty.png";
import ProductCardAdded from "../../components/ProductCardAdded";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const WishList = () => {
  const wishList = useSelector((state) => state.wishedItems);

  const RenderItem = ({ item }) => (
    <ProductCardAdded item={item} type="wish"></ProductCardAdded>
  );

  const Header = () => {
    return (
      <>
        <Text className="text-2xl  mb-3">My Whishlist</Text>
        <View className="h-[1px] bg-gray-100 mb-1"></View>
      </>
    );
  };

  const Empty = () => {
    return (
      <View className="w-full mt-16 justify-center items-center">
        <Image source={WhishEmpty} className="w-[240px] h-[240px]"></Image>
        <Text className="font-psemibold text-lg mb-2">
          Your whishlist is empty
        </Text>
        <Text className="text-gray-100 text-center px-4">
          Tap heart button to start saving your favorite items.
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView className="px-4 bg-white h-full relative">
      <FlatList
        keyExtractor={(item) => item.id}
        data={wishList}
        renderItem={RenderItem}
        ListHeaderComponent={Header}
        ListEmptyComponent={Empty}
      ></FlatList>
    </SafeAreaView>
  );
};

export default WishList;
