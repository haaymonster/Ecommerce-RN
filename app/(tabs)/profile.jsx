import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { icons, images } from "../../constants";
import { router } from "expo-router";
import { useSelector } from "react-redux";

const Profile = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const tabs = {
    personal: [
      { title: "Shipping Adress", icon: icons.box, goto: "" },
      { title: "Payment Method", icon: icons.card, goto: "" },
      { title: "Order History", icon: icons.order, goto: "/order" },
    ],
    support: [
      { title: "Privacy Policy", icon: icons.privacy, goto: "/privacyPolicy" },
      { title: "Terms & Conditions", icon: icons.document, goto: "" },
      { title: "FAQs", icon: icons.qna, goto: "" },
    ],
    account: [{ title: "Change Password", icon: icons.lock, goto: "" }],
  };
  const TabLayout = ({ tab }) => {
    return (
      <TouchableOpacity
        className="flex-row w-full h-[48px] border-b border-gray-200 items-center px-4 justify-between"
        onPress={() => (tab.goto ? router.push(tab.goto) : null)}
      >
        <View className="flex-row items-center">
          <Image source={tab.icon} className="w-[24px] h-[24px]"></Image>
          <Text className="pl-2 text-gray-500 text-[16px]">{tab.title}</Text>
        </View>

        <Image source={icons.rightArrow} className="w-[32px] h-[32px]"></Image>
      </TouchableOpacity>
    );
  };

  const handleLogout = () => {
    router.replace("/sign-in");
  };
  return (
    <View>
      <View className="flex-row w-full h-[180px] bg-primary items-center px-4 justify-between">
        <View className="flex-row items-center">
          <Image
            source={images.profile}
            className="w-[40px] h-[40px] rounded-md"
          ></Image>
          <View className="ml-4">
            <Text className="text-white text-lg">{userInfo.username}</Text>
            <Text className="text-white">{userInfo.username}@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <Image source={icons.logout} className="w-[32px] h-[32px]"></Image>
        </TouchableOpacity>
      </View>

      <View className="w-full h-full bg-white rounded-t-3xl -mt-6">
        <Text className="pl-4 pb-4 pt-6">Personal Information</Text>
        {tabs.personal.map((item) => {
          return <TabLayout tab={item} key={item.title}></TabLayout>;
        })}
        <Text className="pl-4 pb-4 pt-6">Support & Information</Text>
        {tabs.support.map((item) => {
          return <TabLayout tab={item} key={item.title}></TabLayout>;
        })}
        <Text className="pl-4 pb-4 pt-6">Account Management</Text>
        {tabs.account.map((item) => {
          return <TabLayout tab={item} key={item.title}></TabLayout>;
        })}
      </View>
    </View>
  );
};

export default Profile;
