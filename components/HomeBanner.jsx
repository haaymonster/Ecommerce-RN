import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import BlueBanner from "../assets/images/banner/blueBanner.png";
import GreenBanner from "../assets/images/banner/greenBanner.jpeg";
import PurpleBanner from "../assets/images/banner/purpleBanner.webp";
import WhiteBanner from "../assets/images/banner/whiteBanner.jpg";
import { router } from "expo-router";

const HomeBanner = () => {
  const bannerList = [
    { id: 1, image: BlueBanner, goto: "" },
    { id: 2, image: PurpleBanner, goto: "" },
    { id: 3, image: GreenBanner, goto: "" },
    { id: 4, image: WhiteBanner, goto: "" },
  ];

  const [activeItem, setActiveItem] = useState(bannerList[0]);

  const zoomIn = {
    0: { scale: 0.9 },
    1: { scale: 1 },
  };
  const zoomOut = {
    0: { scale: 1 },
    1: { scale: 0.9 },
  };
  const viewbleItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  const BannerItem = ({ activeItem, item }) => {
    return (
      <Animatable.View
        animation={activeItem === item.id ? zoomIn : zoomOut}
        duration={500}
      >
        <TouchableOpacity onPress={() => router.push("/web")}>
          <Image
            className="w-[300px] h-[160px] rounded-xl"
            source={item.image}
          ></Image>
        </TouchableOpacity>
      </Animatable.View>
    );
  };
  return (
    <View>
      <FlatList
        data={bannerList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BannerItem activeItem={activeItem} item={item}></BannerItem>
        )}
        horizontal={true}
        onViewableItemsChanged={viewbleItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 30 }}
        contentOffset={{ x: 0 }}
      ></FlatList>
    </View>
  );
};

export default HomeBanner;
