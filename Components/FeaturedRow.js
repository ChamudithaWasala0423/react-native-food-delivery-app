import { ScrollView, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import tw from "twrnc";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == $id]{
            ...,
            resturants[] ->{
                ...,
                dishes[]->,
              type->{
              name
              }
            }
            
          }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.resturants));
  }, []);

  // console.log(restaurants);

  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>

      {/* Featured Row */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={tw`pt-4`}
      >
        {/* Restaurant card */}

        {restaurants?.map((resturantn) => (
          <RestaurantCard
            key={resturantn._id}
            id={resturantn._id}
            imgUrl={resturantn.image}
            address={resturantn.address}
            title={resturantn.name}
            dishes={resturantn.dishes}
            raiting={resturantn.rating}
            short_description={resturantn.short_description}
            genre={resturantn.type?.name}
            long={resturantn.long}
            lat={resturantn.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
