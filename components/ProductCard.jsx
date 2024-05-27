import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router } from "expo-router";
import WishButton from "./WishButton";
import { useSelector } from "react-redux";
import { Rating } from "react-native-ratings";

const ProductCard = ({ item }) => {
  const wishedItems = useSelector((state) => state.wishedItems);

  const onPressProduct = (id) => {
    router.push(`/detail/${id}`);
  };
  return (
    <TouchableOpacity
      className="w-[160px] h-[240px] my-2 mx-2 justify-between "
      onPress={() => onPressProduct(item.id)}
    >
      <Image
        className="w-[160px] h-[160px] rounded-[24px] "
        source={{ url: item.image }}
      ></Image>
      {/* <View className="w-[88px] h-[18px] rounded-sm bg-green-400 items-center justify-center mt-1">
        <Text className="text-white text-xs">Free Shipping</Text>
      </View> */}
      <Text numberOfLines={2} className="font-psemibold">
        {item.title}
      </Text>
      <Text className="">${item.price}</Text>
      <View className="flex-row items-center">
        <Rating
          ratingCount={5}
          startingValue={item?.rating?.rate}
          readonly
          imageSize={15}
          // ratingBackgroundColor="#21D4B4"
        ></Rating>
        <Text className="pl-4 text-gray-400">{item?.rating?.count}</Text>
      </View>
      <WishButton
        product={item}
        iconDisplay={wishedItems.some((it) => it.id === item.id)}
      />
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
