import { ScrollView, View, Image, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";
import { urlFor } from "../sanity";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      raiting,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  return (
    <ScrollView>
      <View>
        <Image
          source={{ url: urlFor(imgUrl).url() }}
          style={tw`w-full h-56 bg-gray-300 p-4`}
        />
        <TouchableOpacity>
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default RestaurantScreen;
