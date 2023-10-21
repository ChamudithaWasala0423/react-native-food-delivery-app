import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { useSelector, useDispatch } from "react-redux";
import { selectResturant } from "../features/resturantSlice";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { ScrollView } from "react-native-gesture-handler";
import { urlFor } from "../sanity";

const BasketScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [groupBasketItems, setGroupBasketItems] = useState([]);
  const basketTotal = useSelector(selectBasketTotal);

  useEffect(() => {
    const groupItems = items.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item);
      return result;
    }, {});

    setGroupBasketItems(groupItems);
  }, [items]);

  console.log(groupBasketItems);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5 border-b border-[#00CCBB] bg-white shadow-md`}>
          <View>
            <Text style={tw`text-lg font-bold text-center`}>Basket</Text>
            <Text style={tw`text-center text-gray-400`}>{resturant.title}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`rounded-full bg-gray-100 absolute top-3 right-5 `}
          >
            <XCircleIcon width={40} height={40} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row items-center px-4 py-3 bg-white my-5`}>
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            style={tw`h-3 w-7 bg-gray-300 p-4 rounded-full `}
          />
          <Text style={tw`mx-4`}>Delivery in 50-75 min</Text>
          <TouchableOpacity>
            <Text style={tw`text-[#00CCBB] mx-30`}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Object.entries(groupBasketItems).map(([key, items]) => (
            <View
              key={key}
              style={tw`flex flex-row items-center bg-white py-2 px-5 justify-between`}
            >
              <Text style={tw`text-[#00CCBB]`}>{items.length} x</Text>
              <Image
                source={{ url: urlFor(items[0]?.imageUrl).url() }}
                style={tw`h-12 w-12 rounded-full `}
              />
              <Text style={tw`mx-3`}>{items[0]?.name}</Text>

              <Text style={tw`items-center text-gray-600`}>
                Rs.{items[0]?.price}.00
              </Text>
              <TouchableOpacity>
                <Text
                  style={tw`text-[#00CCBB] text-xs `}
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={tw`p-5 bg-white mt-5`}>
          <View style={tw`flex-row justify-between mb-4`}>
            <Text style={tw`text-gray-400`}>Subtotal</Text>
            <Text style={tw`text-gray-400`}>Rs.{basketTotal}.00</Text>
          </View>
          <View style={tw`flex-row justify-between mb-4`}>
            <Text style={tw`text-gray-400`}>Delivery Fee</Text>
            <Text style={tw`text-gray-400`}>Rs.190.00</Text>
          </View>
          <View style={tw`flex-row justify-between mb-4`}>
            <Text>Order Total</Text>
            <Text style={tw`font-extrabold`}>Rs.{basketTotal + 190}.00</Text>
          </View>
          <TouchableOpacity style={tw`p-4 rounded-lg bg-[#00CCBB] mx-4`}>
            <Text style={tw`text-center text-white text-lg font-bold`}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
