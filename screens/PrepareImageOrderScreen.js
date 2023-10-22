import { View, Text } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import resturant from "../fooddeliveryapp/schemas/resturant";

const PrepareImageOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView style={tw`bg-[#2394b0] flex-1 justify-center items-center`}>
      <Animatable.Image
        source={require("../assets/giphy.gif")}
        animation="slideInUp"
        iterationCount={1}
        style={tw`h-96 w-96`}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={tw`text-lg my-10 text-white font-bold text-center`}
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Bar indeterminate={true} size={30} color="white" />
    </SafeAreaView>
  );
};

export default PrepareImageOrderScreen;
