import { StatusBar } from "expo-status-bar";
import { View, Image, Text } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Catogories from "../Components/Catogories";
import FeaturedRow from "../Components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [feturedcategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"]{
            ...,
            resturants[] ->{
                ...,
                dishes[]->
               
            }
            
          }`
      )
      .then((data) => setFeaturedCategories(data));
  }, []);

  //   console.log(feturedcategories);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      {/* Header */}
      <View style={tw`flex-row pb-3 items-center mx-4`}>
        <Image
          source={{ url: "https://links.papareact.com/wru" }}
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
        />
        <View style={tw`mx-2 flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Delivery Now!</Text>
          <Text style={tw`font-bold text-xl`}>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={32} color="#00CCBB" />
      </View>

      <View style={tw`mx-4 flex-row items-center pb-2`}>
        <View style={tw`flex-row flex-1 space-x-2 bg-gray-100 p-3 rounded-lg`}>
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants, groceries, dishes"
            keyboardType="default"
          />
        </View>
        <View style={tw`mx-3`}>
          <AdjustmentsHorizontalIcon size={25} color="#00CCBB" />
        </View>
      </View>

      {/* Body */}
      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Catogories */}
        <Catogories />
        {/* Featured-row */}
        {feturedcategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}

        {/* <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="1234"
          title="Testy Discount"
          description="Everyone's between 10-20% off"
        />
        <FeaturedRow
          id="12345"
          title="Offers near you"
          description="Why not support a local business"
        /> */}
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
