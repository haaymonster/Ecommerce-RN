import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { router, useLocalSearchParams } from "expo-router";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import CheckoutStatusBar from "../../components/CheckoutStatusBar";
import { useDispatch, useSelector } from "react-redux";
import ProductCardAdded from "../../components/ProductCardAdded";
import { updateOrderHistory } from "../../store/slices/orderSlice";
import { getFormatTime } from "../../utils/timeFormat";
import HeaderBar from "../../components/HeaderBar";
import { batchDeleteFromCart } from "../../store/slices/cartSlice";

const Review = () => {
  const dispatch = useDispatch();
  const { fullName, phoneNumber, postCode, address, from } =
    useLocalSearchParams();
  const checkoutItems = useSelector((state) => state.checkoutItems);
  const [totalPrice, setTotalPrice] = useState();
  const sumPrice = () => {
    const total = checkoutItems.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.quantity,
      0
    );
    setTotalPrice(total.toFixed(2));
  };

  useEffect(() => {
    sumPrice();
  }, []);

  const handlePlaceOrder = () => {
    const now = new Date();
    const id = uuidv4();
    if (from === "cart") {
      dispatch(batchDeleteFromCart(checkoutItems));
    }
    dispatch(
      updateOrderHistory({
        id,
        items: checkoutItems,
        price: totalPrice,
        time: getFormatTime(now),
      })
    );
    router.push("/orderPlaced");
  };
  return (
    <SafeAreaView className="px-4 items-center bg-white h-full">
      <HeaderBar title="Checkout"></HeaderBar>
      <ScrollView className="w-full">
        <View className="items-center">
          <CheckoutStatusBar status="review" />
          <View className="w-full mt-4 mb-2">
            <Text className="text-lg">Items</Text>
          </View>
          {checkoutItems.map((item) => {
            return (
              <ProductCardAdded
                key={item.id}
                item={item}
                type="checkout"
              ></ProductCardAdded>
            );
          })}
        </View>
        <View className="h-[150px] justify-between w-full border-t border-gray-300 pt-2">
          <Text className="text-lg">Shipping Info</Text>
          <View className="flex-row justify-between">
            <Text className="text-sm text-gray-400">Full Name</Text>
            <Text className="text-sm text-gray-400">{fullName}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-sm text-gray-400">Mobile Number</Text>
            <Text className="text-sm text-gray-400">+82{phoneNumber}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-sm text-gray-400">Address</Text>
            <Text className="text-sm text-gray-400">{address}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-sm text-gray-400">Post Code</Text>
            <Text className="text-sm text-gray-400">{postCode}</Text>
          </View>
        </View>
        <View className="h-[130px] justify-between w-full border-t border-gray-300 pt-2 mt-2 mb-[100px]">
          <Text className="text-lg">Order Info</Text>
          <View className="flex-row justify-between">
            <Text className="text-sm text-gray-400">Subtotal</Text>
            <Text className="text-sm text-gray-400">${totalPrice}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-sm text-gray-400">Shipping Cost</Text>
            <Text className="text-sm text-gray-400">$0.00</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-lg">Total</Text>
            <Text className="text-lg">${totalPrice}</Text>
          </View>
        </View>
      </ScrollView>

      <CustomButton
        title="Place Order"
        handlePress={handlePlaceOrder}
        containerStyles="w-full absolute bottom-12"
      ></CustomButton>
    </SafeAreaView>
  );
};

export default Review;
