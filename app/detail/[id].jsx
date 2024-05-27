import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { Rating } from "react-native-ratings";
import QuantitySelector from "../../components/QuantitySelector";
import CustomButton from "../../components/CustomButton";
import { icons } from "../../constants";
import { router, useLocalSearchParams } from "expo-router";
import WishButton from "../../components/WishButton";
import { updateCheckoutList } from "../../store/slices/checkoutSlice";
import { SafeAreaView } from "react-native-safe-area-context";

const Detail = () => {
  const wishedItems = useSelector((state) => state.wishedItems);
  const dispatch = useDispatch();
  const { id } = useLocalSearchParams();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [hasWished, setHasWished] = useState(false);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, []);

  useEffect(() => {
    const wished = wishedItems.some((item) => item.id === product.id);
    setHasWished(wished);
  }, [product, wishedItems]);

  const onPressAddToCart = () => {
    const itemsToAdd = { ...product, quantity: 1, selected: true };
    dispatch(addToCart(itemsToAdd));
  };

  const onPressBuyNow = () => {
    dispatch(updateCheckoutList([{ ...product, quantity: 1 }]));
    router.push("/shipping");
  };

  return product.id ? (
    <SafeAreaView className="bg-white">
      <ScrollView className=" h-full relative">
        <ImageBackground
          source={{ uri: product.image }}
          resizeMode="contain"
          className="w-full h-[300px] bg-purple-200"
        >
          <View className="flex-row justify-between px-4">
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={icons.leftArrow}
                className="w-[32px] h-[32px]"
              ></Image>
            </TouchableOpacity>
            <WishButton iconDisplay={hasWished} product={product} />
          </View>
        </ImageBackground>
        <View className=" bg-white h-full -mt-4 rounded-t-3xl px-4 pt-6 ">
          <View className="w-[88px] h-[24px] rounded-xl bg-green-400 items-center justify-center">
            <Text className="text-white text-xs">Free Shipping</Text>
          </View>
          <View className="flex-row justify-between items-baseline my-4">
            <Text
              className="w-[253px] text-xl font-psemibold"
              numberOfLines={2}
            >
              {product.title}
            </Text>
            <Text className="text-xl font-psemibold">${product.price}</Text>
          </View>
          <View className="flex-row items-center">
            <Rating
              ratingCount={5}
              startingValue={product?.rating?.rate}
              readonly
              imageSize={15}
            ></Rating>
            <Text className="px-1">{product?.rating?.rate}</Text>
            <Text>({product?.rating?.count} reviews)</Text>
          </View>
          <Text className="text-gray-400 pt-4">{product?.description}</Text>

          {/* <Text className="font-psemibold text-md pt-4 pb-2">Quantity</Text>
          <QuantitySelector
            onIncrease={() => setQuantity((prev) => ++prev)}
            onDecrease={() => setQuantity((prev) => --prev)}
            quantity={quantity}
          ></QuantitySelector> */}
        </View>
      </ScrollView>
      <View className="flex-row justify-between absolute bottom-0 w-full px-6 mb-6">
        <CustomButton
          title="Buy Now"
          containerStyles="bg-white border border-gray-200 w-[170px]"
          textStyles="text-black"
          handlePress={onPressBuyNow}
        ></CustomButton>
        <CustomButton
          icon={icons.cart}
          title="Add To Cart"
          containerStyles="bg-black  w-[170px]"
          handlePress={onPressAddToCart}
        ></CustomButton>
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView className=" px-4  bg-white h-full">
      <TouchableOpacity onPress={() => router.back()}>
        <Image source={icons.leftArrow} className="w-[32px] h-[32px]"></Image>
      </TouchableOpacity>
      <ActivityIndicator
        size="large"
        className="mt-[200px]"
      ></ActivityIndicator>
    </SafeAreaView>
  );
};

export default Detail;
