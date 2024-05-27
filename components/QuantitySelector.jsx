import { Alert, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const QuantitySelector = ({ quantity = 0, onDecrease, onIncrease }) => {
  const decrease = () => {
    if (quantity > 1) {
      onDecrease();
    }
  };
  const increase = () => {
    if (quantity < 5) {
      onIncrease();
    } else {
      Alert.alert("5 maximum!");
    }
  };
  return (
    <View className="border border-gray-200 rounded-md w-[96px] h-[32px] flex-row justify-between items-center px-2 ">
      <TouchableOpacity onPress={decrease}>
        <Text className="text-2xl">-</Text>
      </TouchableOpacity>
      <Text className="text-xl">{quantity}</Text>
      <TouchableOpacity onPress={increase}>
        <Text className="text-2xl">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuantitySelector;
