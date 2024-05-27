import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { icons } from "../constants";
import QuantitySelector from "./QuantitySelector";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { editQuantity } from "../store/slices/cartSlice";
import WishButton from "./WishButton";

const ProductCardAdded = ({ item, onSelectChange, type, onPressDelete }) => {
  const dispatch = useDispatch();
  const onPressTick = () => {
    onSelectChange(item.id);
  };
  const onIncrease = () => {
    dispatch(editQuantity({ id: item.id, type: "increase" }));
  };

  const onDecrease = () => {
    dispatch(editQuantity({ id: item.id, type: "decrease" }));
  };
  return (
    <TouchableOpacity
      className="w-full mb-4 flex-row item"
      onPress={() => router.push(`/detail/${item.id}`)}
      disabled={type === "checkout"}
    >
      <Image
        source={{ uri: item.image }}
        className="w-[100px] h-[100px] rounded-md mr-2"
      ></Image>
      <View className="flex-1 justify-between">
        <Text className="text-sm w-[220px]" numberOfLines={2}>
          {item.title}
        </Text>
        {type === "checkout" && <Text className="">x{item.quantity}</Text>}
        {type === "cart" && (
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          ></QuantitySelector>
        )}
        <Text className="text-base">${item.price}</Text>
      </View>
      {type === "cart" && (
        <View className="justify-between">
          <TouchableOpacity onPress={onPressTick}>
            <Image
              source={item.selected ? icons.tick : icons.tick_gray}
              className="w-[24px] h-[24px]"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressDelete()}>
            <Image source={icons.trash} className="w-[24px] h-[24px]"></Image>
          </TouchableOpacity>
        </View>
      )}
      {type === "wish" && (
        <WishButton type="wishList" product={item} iconDisplay={true} />
      )}
    </TouchableOpacity>
  );
};

export default ProductCardAdded;
