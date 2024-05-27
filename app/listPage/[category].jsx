import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import ProductCard from "../../components/ProductCard";
import { icons } from "../../constants";

const ListPage = () => {
  const { category } = useLocalSearchParams();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [list, setList] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setIsRefreshing(true);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setList(json);
        setIsRefreshing(false);
      });
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    getProducts();
  };
  const Header = () => {
    return (
      <View className="flex-row w-full items-center pb-4 border-b border-gray-200 mb-1 ml-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={icons.leftArrow} className="w-[32px] h-[32px]"></Image>
        </TouchableOpacity>
        <Text className="text-lg pl-4">{category}</Text>
      </View>
    );
  };
  const Footer = () => {
    return (
      <View className="items-center justify-center h-[50px]">
        <Text className="text-gray-400">- end -</Text>
      </View>
    );
  };
  const renderItem = ({ item }) => <ProductCard item={item}></ProductCard>;

  return (
    <SafeAreaView className=" bg-white w-full h-full items-center">
      <Header></Header>
      {list.length === 0 ? (
        <ActivityIndicator size="large" className="mt-[200px]" />
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          // ListHeaderComponent={<Header></Header>}
          ListFooterComponent={<Footer></Footer>}
        ></FlatList>
      )}
    </SafeAreaView>
  );
};

export default ListPage;
