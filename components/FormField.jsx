import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  handleChangeText,
  keyboardType,
  placeholder,
  inputRef,
  prefix,
  inputLength,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="space-y-2 mt-7">
      <Text className="text-base">
        {title}
        <Text className="text-red-600">*</Text>
      </Text>
      <View
        className={`w-full h-16 bg-white border border-gray-200 rounded-2xl px-4 focus:border-primary items-center flex-row ${inputLength}`}
      >
        {title === "Phone Number" && (
          <Text className="pr-4 text-gray-400">🇰🇷 +82</Text>
        )}
        <TextInput
          ref={inputRef}
          className=" font-base  flex-1"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
