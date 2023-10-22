import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectResturant } from "../features/resturantSlice";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);

  return (
    <View style={tw`bg-[#00CCBB] flex-1`}>
      <SafeAreaView style={tw`z-50`}>
        <View style={tw`flex-row justify-between items-center p-5`}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text style={tw`font-light text-white text-lg`}>Order Help</Text>
        </View>

        <View style={tw`bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md`}>
          <View style={tw`flex-row justify-between`}>
            <View>
              <Text style={tw`text-lg text-gray-400`}>Estimated Arrival</Text>
              <Text style={tw`text-4xl font-bold`}>45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              style={tw`h-20 w-20`}
            />
          </View>
          <Progress.Bar indeterminate={true} size={30} color="#00CCBB" />
          <Text style={tw`mt-3 text-gray-500`}>
            Your order at {resturant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        style={tw`flex-1 z-0 -mt-10`}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 6.9183317263583115,
          longitude: 79.84899524909764,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: 6.9183317263583115, //resturant.lat
            longitude: 79.84899524909764, //resturant.long
          }}
          title={resturant.title}
          description={resturant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <SafeAreaView>
        <Image />
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
