import * as React from "react";
import { FlatList } from "react-native";
import { products } from "../products";
import ProductCard from "./ProductCard";

export default function ProductsList(props) {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => <ProductCard {...item} setProducts={props.setProducts}  />}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
    />
  );
}
