import * as React from "react";
import { View, Text, Image,  } from "react-native";

export default function Detail({
  image,
  price,
  title,
}) {
  
  return (
    <View className={"w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5 flex-wrap"}>
    <View className="flex-row items-center gap-3">
      <Image
        source={{ uri: image }}
        className={"w-12 h-12 "}
        style={{ resizeMode: "contain" }}
      />
      <Text className={"text-sm text-black/60 dark:text-white/70 flex-wrap"}>
         {title}
        </Text>
    </View>  
    <View className="flex-row items-center gap-3">
      <Image
        className={"w-12 h-12 "}
        style={{ resizeMode: "contain" }}
      />
      <Text className={"text-sm text-black/60 dark:text-white/70 break-all"}>
        Price: {price}$
        </Text>
    </View>  
    </View>
  );
}

