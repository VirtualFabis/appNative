import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Switch, Text, View } from "react-native";
import { useColorScheme,  } from "nativewind";
import ProductsList from "./ProductsList";
import { AntDesign } from "@expo/vector-icons";
import {  useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const prod = atomWithStorage('prod', [])

export default function Productos() {
  const { colorScheme } = useColorScheme();
  const [products, setProducts] = useAtom(prod)
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <View className={"flex-row w-full gap-20"}>
        <Text className="dark:text-white text-2xl font-bold gap-4">
         Carrito
         <AntDesign
              name="shoppingcart"
              size={30}
              color={colorScheme === "light" ? "black" : "white"}
            />
            <Text> {products.length} </Text>
            <Tab.Screen name="Home" component={ProductsList} />
        </Text>
      </View>
      <ProductsList setProducts={setProducts} />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
