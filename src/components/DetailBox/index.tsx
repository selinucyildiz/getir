import React from 'react'
import {View, Text, ActivityIndicator} from  "react-native"


type DetailBoxProps = {
    price: number,
    name:string,
    quantity:string;
}
function index({price,name,quantity}: DetailBoxProps) {
  return (

    <View style = {{width:'100%', backgroundColor:'white', alignItems:'center', paddingTop:10}}>
        <Text style = {{color: '##5d39c1', fontSize:20, fontWeight:'bold',marginTop:12 }}>
            <Text>{"\u20ba"}</Text>
            {price}
            </Text>

        <Text style = {{color: 'black', fontSize:17, fontWeight:'600',marginTop:12 }}>
            {name}
            
            </Text>
        <Text style = {{color: '#848897', fontSize:15, fontWeight:'599',marginTop:7, paddingBottom:18}}>
            {quantity}
            
            </Text>

    </View>
  )
}

export default index