import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  handlePress,
  isLoading,
  icon,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-black flex-row rounded-xl min-h-[62px] items-center justify-center ${containerStyles} ${
        (isLoading ? "opacity-50" : "", disabled && "bg-slate-500")
      }`}
      disabled={isLoading || disabled}
    >
      <Text className={` font-psemibold text-lg text-white ${textStyles}`}>
        {title}
      </Text>
      {icon && <Image source={icon} className="w-[22px] h-[22px] ml-2"></Image>}
    </TouchableOpacity>
  );
};

export default CustomButton;
