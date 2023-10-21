import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { useSelector, useDispatch } from "react-redux";
import { selectResturant } from "../features/resturantSlice";
import { selectBasketItems } from "../features/basketSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [groupBasketItems, setGroupBasketItems] = useState([]);

  useEffect(() => {
    const groupItems = items.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item);
      return result;
    }, {});

    setGroupBasketItems(groupItems);
  }, [items]);

  console.log(groupBasketItems);

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;
