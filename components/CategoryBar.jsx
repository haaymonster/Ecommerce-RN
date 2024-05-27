import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";

const CategoryBar = () => {
  const [categories, setCategories] = useState([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setCategories(json);
  //       console.log(json);
  //     });
  // }, []);

  const categoryIcon = (category) => {
    switch (category) {
      case "electronics":
        return "📱";
      case "jewelery":
        return "💍";
      case "men's clothing":
        return "👕";
      case "women's clothing":
        return "👗";

      default:
        break;
    }
  };
  const categoryName = (category) => {
    switch (category) {
      case "electronics":
        return "Electronics";
      case "jewelery":
        return "Jewelery";
      case "men's clothing":
        return "Men";
      case "women's clothing":
        return "Women";

      default:
        break;
    }
  };
  const onPressCategory = (category) => {
    router.push(`/listPage/${category}`);
  };
  return (
    <>
      <Text className="font-semibold text-lg mt-2 mb-2">Categories</Text>

      <View className="flex-row justify-between mb-2">
        {categories.map((item) => {
          return (
            <TouchableOpacity
              className="w-[76px] h-[60px] rounded-lg justify-center items-center border-stone-300 border pt-2"
              onPress={() => onPressCategory(item)}
              key={item}
            >
              <Text>{categoryIcon(item)}</Text>
              <Text>{categoryName(item)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default CategoryBar;
