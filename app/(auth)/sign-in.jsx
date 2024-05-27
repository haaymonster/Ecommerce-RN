import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../store/slices/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.password) {
      Alert.alert("plase fill in all the fields");
      return;
    }
    setIsSubmitting(true);

    try {
      dispatch(updateUserInfo(form.username));
      router.replace("/home");
    } catch (error) {
      Alert.alert("error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full  px-4 mt-6">
          <Image
            source={images.quickmartstart}
            className="w-[125px] h-[45px]"
            resizeMode="contain"
          ></Image>
          <Text className="text-3xl font-psemibold mt-10">Login</Text>
          <FormField
            title="UserName"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            keyboardType="email-adress"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            keyboardType="password"
          />
          <CustomButton
            title="Login"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <Text className=" text-center leading-5 mt-10">
            By login , you agree to our{" "}
            <TouchableOpacity onPress={() => router.push("/privacyPolicy")}>
              <Text className="text-sky-600">Privacy Policy</Text>
            </TouchableOpacity>{" "}
            and
            <TouchableOpacity>
              <Text className="text-sky-600">Terms & Conditions.</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622"></StatusBar>
    </SafeAreaView>
  );
};

export default SignIn;
