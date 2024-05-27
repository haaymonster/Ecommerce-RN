import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../components/HeaderBar";
import OrderEmpty from "../../assets/images/order-empty.png";
import { useSelector } from "react-redux";
import { Shadow } from "react-native-shadow-2";

const Order = () => {
  const orderHistory = useSelector((state) => state.orderHistory);

  const Empty = () => (
    <View className="items-center">
      <Image source={OrderEmpty} className="w-[240px] h-[240px] mt-8"></Image>
      <Text className="text-2xl font-psemibold pt-4">No order</Text>
      <Text className="text-center text-gray-400 px-4 pt-4">
        We currently don't have any active orders in progress. Feel free to
        explore our products and place a new order.
      </Text>
    </View>
  );

  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity className=" bg-white  py-2 px-1 mb-2">
        <View className="flex-row items-center  pb-1">
          <View className="bg-primary rounded-lg p-1">
            <Text>Order ID</Text>
          </View>
          <Text className="text-gray-500 text-xs"> {item.id}</Text>
        </View>
        <View className="my-2 flex-row">
          <Image
            source={{ uri: item.items[0].image }}
            className="w-[100px] h-[100px] rounded-md"
          ></Image>
          <View className="w-[230px] pl-4 justify-between">
            <Text numberOfLines={2}>{item.items[0].title}...</Text>
            <Text>
              Total Order
              <Text className="text-blue-500">({item.items.length})</Text>: $
              {item.price}
            </Text>
          </View>
          <Text className="pt-2 text-white">
            {item.items.length === 1 ? "" : `(${item.items.length} Items)`}
          </Text>
        </View>
        <View className="flex-row items-center border-t border-gray-300 justify-between pt-2">
          <Text className="text-gray-500">Placed on:</Text>
          <Text className="text-gray-500">{item.time}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView className="px-4  bg-white h-full">
      <HeaderBar title="Order History"></HeaderBar>
      <FlatList
        data={orderHistory}
        keyExtractor={(item) => item.id}
        renderItem={RenderItem}
        ListEmptyComponent={<Empty></Empty>}
      ></FlatList>
    </SafeAreaView>
  );
};

export default Order;
