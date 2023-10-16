import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { urlFor } from "../sanity";

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity>
      <View>
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
