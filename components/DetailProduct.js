import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Alert} from "react-native";
import Detail from "./DetailProductCard";
import { prod } from "./Productos";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default function DetailProduct() {
  const [products, setProducts] = useAtom(prod)
  const [allcost, SetAllCost] = useState(0)
  useEffect(() => {
    let sum = 0
    products.forEach(x =>{
      sum += x.price
    } )
    SetAllCost(sum);
  }, [products])
  const clear = () => (setProducts([]))
  const onPay = () =>
  {
    Alert.alert(
      'Confirmar Pago',
      'Pago Verificado',
      [
        {
          text: 'Ok',
          onPress: () => Alert.alert('Pago Exitoso'),
          style: 'Cerrar',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );
    clear()
  }
  return (
    <View> 
      <View className={"flex-row w-full gap-20"}>
      <Text className="dark:text-white text-2xl font-bold gap-4" onPress={onPay}>
         Pagar <FontAwesome name="paypal" size={24} color="black" /> {'$' + allcost}
        </Text>
        <Text className="dark:text-white text-2xl font-bold gap-4" onPress={clear}>
         <AntDesign name="delete" size={24} color="black" />
        </Text>
      </View>
      <FlatList
    data={products}
    keyExtractor={(product) => product.id}
    renderItem={({ item }) => <Detail {...item}  />}
    contentContainerStyle={{
      paddingHorizontal: 15,
    }}
  />
    </View>
    
    );
}
