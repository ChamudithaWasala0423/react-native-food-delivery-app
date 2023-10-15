import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { urlFor } from "../sanity";
import { StatusBar } from "expo-status-bar";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

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
      <View style={tw`bg-white`}>
        <View style={tw`px-4 pt-4`}>
          <Text style={tw`text-3xl font-bold`}>{title}</Text>
          <View style={tw`flex-row my-1`}>
            <View style={tw`flex-row items-center`}>
              <StarIcon color="green" opacity={0.5} size={20} />
              <Text style={tw`mx-2 text-green-500 text-xs`}>{raiting} </Text>
              <Text style={tw`text-xs text-gray-500`}>{genre}</Text>
            </View>
            <View style={tw`flex-row items-center mx-2`}>
              <MapPinIcon color="gray" opacity={0.4} size={20} />
              <Text style={tw`text-xs text-gray-500`}>Nearby {address}</Text>
            </View>
          </View>
          <Text style={tw`text-gray-500 mt-2 pb-2`}>{short_description}</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default RestaurantScreen;
