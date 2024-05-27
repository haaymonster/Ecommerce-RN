import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CartEmpty from "../../assets/images/cart-empty.png";
import ProductCardAdded from "../../components/ProductCardAdded";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, toggleSelectItem } from "../../store/slices/cartSlice";
import { router } from "expo-router";
import { updateCheckoutList } from "../../store/slices/checkoutSlice";

const Cart = () => {
  const itemsInCart = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState();
  const [currentItemToDelete, setCurrentItemToDelete] = useState(null);
  useEffect(() => {
    sumPrice();
  }, [itemsInCart]);

  const toggleItemSelection = (id) => {
    dispatch(toggleSelectItem(id));
  };

  const sumPrice = () => {
    const total = itemsInCart.reduce(
      (acc, item) =>
        acc + (item.selected ? parseFloat(item.price) * item.quantity : 0),
      0
    );
    setTotalPrice(total.toFixed(2));
  };

  deleteItem = (id) => {
    setModalVisible(true);
    setCurrentItemToDelete(id);
  };

  const onConfirmDelete = () => {
    dispatch(deleteFromCart(currentItemToDelete));
    setModalVisible(false);
  };

  const RenderItem = ({ item }) => (
    <ProductCardAdded
      type="cart"
      item={item}
      onSelectChange={toggleItemSelection}
      onPressDelete={() => deleteItem(item.id)}
    ></ProductCardAdded>
  );

  const handleCheckout = () => {
    const checkoutItems = itemsInCart.filter((item) => item.selected === true);
    dispatch(updateCheckoutList(checkoutItems));
    router.push({ pathname: "/shipping", params: { from: "cart" } });
  };

  const Footer = () => {
    return (
      <View className="h-[190px] justify-between w-full border-t border-gray-300">
        <Text className="text-lg">Order Info</Text>
        <View className="flex-row justify-between">
          <Text className="text-sm text-gray-100">Subtotal</Text>
          <Text className="text-sm text-gray-100">${totalPrice}</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-sm text-gray-100">Shipping Cost</Text>
          <Text className="text-sm text-gray-100">$0.00</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-lg">Total</Text>
          <Text className="text-lg">${totalPrice}</Text>
        </View>
        <CustomButton
          handlePress={() => handleCheckout()}
          containerStyles="bg-black-100"
          title="Checkout"
          disabled={totalPrice === 0}
        ></CustomButton>
      </View>
    );
  };
  const Header = () => {
    return (
      <>
        <Text className="text-2xl pb-3">My Cart</Text>
        <View className="h-[1px] bg-gray-100 mb-1"></View>
      </>
    );
  };

  const Empty = () => {
    return (
      <View className="w-full mt-16 justify-center items-center">
        <Image source={CartEmpty} className="w-[240px] h-[240px]"></Image>
        <Text className="font-psemibold text-lg mb-2">Your cart is empty</Text>
        <Text className="text-gray-100 text-center px-4">
          Looks like you have not added anything in your cart. Go ahead and
          explore top categories.
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView className="px-4 bg-white h-full relative">
      <FlatList
        data={itemsInCart}
        keyExtractor={(item) => item.id}
        renderItem={RenderItem}
        ListHeaderComponent={Header}
        ListEmptyComponent={Empty}
      ></FlatList>
      {itemsInCart.length > 0 && <Footer></Footer>}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="w-full h-full bg-black-200/50 justify-end items-center">
          <View className="w-full h-[260px] bg-white px-4 justify-around py-2 rounded-t-3xl">
            <Text className="text-lg">Delete product from cart</Text>
            <CustomButton
              title="Delete this product"
              handlePress={onConfirmDelete}
            ></CustomButton>
            <CustomButton
              containerStyles="bg-white"
              textStyles="text-black"
              title="Cancel"
              handlePress={() => setModalVisible(!modalVisible)}
            ></CustomButton>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Cart;
