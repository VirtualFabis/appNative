import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Alert, StyleSheet, Button} from "react-native";
import Detail from "./DetailProductCard";
import { prod } from "./Productos";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import DialogInput from 'react-native-dialog-input';

export default function DetailProduct() {
  const [products, setProducts] = useAtom(prod)
  const [allcost, SetAllCost] = useState(0)
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState('');
  useEffect(() => {
    let sum = 0
    products.forEach(x =>{
      sum += x.price
    } )
    SetAllCost(sum);
  }, [products])
  const clear = () => (setProducts([]))
  const onOpen = () =>
  {
    setVisible(true)
  }
  const onPay= (mail) => {
  console.log("🚀 ~ file: DetailProduct.js:28 ~ onPay ~ mail:", mail)
fetch( `https://verifier.meetchopra.com/verify/${mail}?token=2b1e810090b21cab8a8753ec6bd1f091c66b567b1b893db1209f36999975e99f93bc75c0ab6fa2b35bdfee4b8ac61df6` )
.then( response => response.json() )
.then( response => {
  setVisible(false);
  if(response.status){
    console.log("🚀 ~ file: DetailProduct.js:46 ~ onPay ~ response:", response)
    Alert.alert('Email Verificado', 'Te llegaera en 10 Min', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    clear()
  }
  else{
    Alert.alert('Email no Verificado', ':c', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
} );
    
  }
  return (
    <View> 
      <View className={"flex-row w-full gap-20"}>
      <Text className="dark:text-white text-2xl font-bold gap-4" onPress={onOpen}>
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
     <View style={styles.container}>
            <DialogInput 
                isDialogVisible={visible}
                title={"Email"}
                message={"Se enviara la factura a tu email"}
                hintInput ={"Enter to email"}
                submitInput={ (inputText) => {
                  onPay(inputText)
                }}
                closeDialog={() => setVisible(false)}>
            </DialogInput>
            <Button 
                title='Show'
                onPress={() => setVisible(true)}
            />
        </View>
    </View>
    
    );
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
  title: {
      fontSize:20, 
      marginBottom:20,
      backgroundColor:'red',
      color:'white',
      padding:15,
      borderRadius:30,
  },
});
