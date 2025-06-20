import React, {useEffect, useState} from 'react'
import {View, Text, ActivityIndicator, ScrollView} from  "react-native"
import {Product } from '../../models'
import ImageCraousel from "../../components/ImageCarousel"

import DetailBox from "../../components/DetailBox"
import DetailProperty from "../../components/DetailProperty"
import CartButton from "../../components/CartButton"

function index(props) {

  const [product, setProduct] = useState<Product>()
useEffect(() =>  {
  setProduct(props.route.params.product)

}, [])

console.log("Our product is ", product)
if(!product){
  return <ActivityIndicator color={"#5d3ebd"}/>
}

  return (
    <View style={{flex:1}}>

    
    <ScrollView>
      <ImageCraousel images = {product?.images} />
      <DetailBox price = {product.price} name= {product.name} quantity = {product.quantity} />

      <Text style={{paddingHorizontal:10, paddingVertical:14,color:'#808b99', fontWeight:'600' }}
      
      
      >Details</Text>


      <DetailProperty/>
      
    </ScrollView>

    <CartButton item={product}/>
    </View>
  )
}

export default index