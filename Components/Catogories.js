import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CatogoryCard from "./CatogoryCard";
import sanityClient, { urlFor } from "../sanity";

const Catogories = () => {
  const [catogories, setCatogories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "category"]{
          ...,
          category[] ->{
              ...,
            dish[]->
              
          }
          
        }`
      )
      .then((data) => setCatogories(data));
  }, []);

  // console.log(catogories);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Category Card */}
      {catogories.map((catogory) => (
        <CatogoryCard
          key={catogory._id}
          imgUrl={urlFor(catogory.image).width(200).url()}
          tittle={catogory.name}
        />
      ))}

      {/* <CatogoryCard
        imgUrl="https://links.papareact.com/gn7"
        tittle="Testing1"
      />
      <CatogoryCard
        imgUrl="https://links.papareact.com/gn7"
        tittle="Testing1"
      />
      <CatogoryCard
        imgUrl="https://links.papareact.com/gn7"
        tittle="Testing1"
      />
      <CatogoryCard
        imgUrl="https://links.papareact.com/gn7"
        tittle="Testing1"
      />
      <CatogoryCard
        imgUrl="https://links.papareact.com/gn7"
        tittle="Testing1"
      />
      <CatogoryCard
        imgUrl="https://links.papareact.com/gn7"
        tittle="Testing1"
      />
      <CatogoryCard
        imgUrl="https://links.papareact.com/gn7"
        tittle="Testing1"
      />
      <CatogoryCard
        imgUrl="https://links.papareact.com/gn7"
        tittle="Testing1"
      />
      <CatogoryCard
        imgUrl="https://links.papareact.com/gn7"
        tittle="Testing1"
      /> */}
    </ScrollView>
  );
};

export default Catogories;
