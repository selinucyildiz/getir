import React,{useEffect, useState} from "react";
import { Dimensions, Image, Text, View, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";
import { Product } from "../../models";
import ProductItem from "../../components/ProductItem";
import {connect} from "react-redux"
import * as actions from "../../redux/actions/cartActions"

const { width, height } = Dimensions.get("window");


function index({cartItems}: {cartItems: {product:Product, quantity:number}[]}) {
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const getProductsPrice= () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.product.price
      setTotalPrice(total)
    })
    cartItems.length ? null : setTotalPrice(0)
  }
  useEffect(( ) => {

    getProductsPrice()
  }, [cartItems])

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        data={cartItems}
        renderItem={({ item }) => <CartItem product={item.product} quantity={item.quantity}/>}
      />
      <Text style={{color: '#5D3EBD', fontWeight:'bold', padding:14}}>Önerilen Ürünler</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {productsGetir.map((item,index) => 
        <ProductItem key={index} item={item} />
        
        )}

      </ScrollView>

      
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: height * 0.12,
          paddingHorizontal: "4%",
          width: "100%",
          backgroundColor: "#f8f8f8",
          position:'absolute',
          bottom:0
        }}
      >
        <TouchableOpacity
          style={{
            flex: 3,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            backgroundColor: "#5D3EBD",
            height: height * 0.06,
            justifyContent: "center",
            alignItems: "center",
            marginTop:-10
            
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: height * 0.06,
            marginTop:-10,
            borderTopRightRadius:8,
            borderBottomRightRadius:8

          }}
        >
          <Text
            style={{
              color: "#5D3EBD",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            <Text>{"\u20BA"}</Text>
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    
  );
}


const mapStateToProps = (state) => {
  const{cartItems} = state
  return{
    cartItems:cartItems
}
}

export default connect(mapStateToProps, null)(index)
