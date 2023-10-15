import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const CatogoryCard = ({ imgUrl, tittle }) => {
  return (
    <TouchableOpacity style={tw`relative mr-2`}>
      <Image source={{ url: imgUrl }} style={tw`h-20 w-20 rounded`} />
      <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>
        {tittle}
      </Text>
    </TouchableOpacity>
  );
};

export default CatogoryCard;
