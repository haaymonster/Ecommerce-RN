import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SectionList,
} from "react-native";
import React, { useEffect, useState } from "react";
import QuickMart from "../../assets/images/quickmart.png";
import HomeBanner from "../../components/HomeBanner";
import CategoryBar from "../../components/CategoryBar";
import ProductCard from "../../components/ProductCard";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const Home = () => {
  const [list, setList] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setList(json);
        setIsRefreshing(false);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  const onRefresh = () => {
    setIsRefreshing(true);
    getProducts();
  };
  const renderItem = ({ item }) => <ProductCard item={item}></ProductCard>;

  const Header = () => (
    <>
      <HomeBanner></HomeBanner>
      <CategoryBar></CategoryBar>

      <Text className="font-semibold text-lg mt-2 mb-2 ">Latest Products</Text>
    </>
  );

  return (
    <View className="h-full  px-5 pt-14 bg-white ">
      <TouchableOpacity className="mb-4">
        <Image source={QuickMart} className="w-[104px] h-[32px]"></Image>
      </TouchableOpacity>
      {list.length > 0 ? (
        <FlatList
          // stickyHeaderIndices={[0]}
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          ListHeaderComponent={<Header></Header>}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
        ></FlatList>
      ) : (
        <ActivityIndicator size="large" className="mt-[200px]" />
      )}
    </View>
  );
};

export default Home;
