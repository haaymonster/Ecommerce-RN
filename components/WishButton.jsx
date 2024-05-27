import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { icons } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { updateWishList } from "../store/slices/wishListSlice";

const WishButton = ({ product, iconDisplay, type }) => {
  const dispatch = useDispatch();
  const [isCollected, setIsCollected] = useState(false);
  const onPressHeart = () => {
    dispatch(updateWishList(product));
    // setIsCollected(wishedItems.some((item) => item.id === product.id));
  };

  return (
    <TouchableOpacity
      className={`w-[24px] h-[24px] rounded-full ${
        type === "wishList"
          ? "bg-white mt-14"
          : "bg-black absolute right-2 top-2"
      } items-center justify-center `}
      onPress={onPressHeart}
    >
      <Image
        source={iconDisplay ? icons.like : icons.unlike}
        className={` ${
          type === "wishList" ? "w-[24px] h-[24px]" : "w-[16px] h-[16px]"
        }`}
      ></Image>
    </TouchableOpacity>
  );
};

export default WishButton;
