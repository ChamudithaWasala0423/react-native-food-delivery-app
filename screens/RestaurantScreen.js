import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { urlFor } from "../sanity";
import { StatusBar } from "expo-status-bar";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const RestaurantScreen = () => {
  const navigation = useNavigation();
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
        <TouchableOpacity
          onPress={navigation.goBack}
          style={tw`absolute bottom-34 left-5 p-2 bg-gray-100 rounded-full`}
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default RestaurantScreen;
