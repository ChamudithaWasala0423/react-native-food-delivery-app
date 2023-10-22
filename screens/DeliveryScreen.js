import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectResturant } from "../features/resturantSlice";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  return (
    <View>
      <Text>DeliveryScreen</Text>
    </View>
  );
};

export default DeliveryScreen;
