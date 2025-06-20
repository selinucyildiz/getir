import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useNavigationState } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import {Product} from '../../models'
import {connect} from 'react-redux'
import * as actions from "../../redux/actions/cartActions"

const {width, height} = Dimensions.get('window')


type productItemType = {
    item: Product;
    addItemToCart:(a:Product) => void ;

    
}

function index({item,addItemToCart}: productItemType) {
  const navigation= useNavigation()
  return (

    <TouchableOpacity 
    onPress={() => navigation.navigate("ProductDetails", {product:item})}
    style = {{
        width: width * 0.28,
        marginTop: 12, 
        //backgroundColor:'red',
        height : height* 0.24,
        marginLeft: 12,
        marginBottom: 6
    }}>
        <Image  style ={{width: width * 0.28, height:width * 0.28, borderRadius:12, borderWidth: 0.3, borderColor:'gray'}} source={{uri:item.image}}/>
        <View style = {{flexDirection: 'row',marginTop: 10,alignItems:'center'}}>
        <Text
          style={{
            textDecorationLine: "line-through",
            color: "#747990",
            fontWeight: "bold",
            fontSize: 13,
          }}
        >
          <Text>{"\u20BA"}</Text>{item.price}
        </Text>
        
        <Text
          style={{
            color: "#5D3EBD",
            fontWeight: "bold",
            fontSize: 14,
            marginLeft:4
          }}
        >
          <Text>{"\u20BA"}</Text>{item.discount}
        </Text>
      
      </View>
      <Text style={{fontWeight:'600',fontSize:13,marginTop:4}}>{item.name}</Text>
      <Text style={{color:'#747990', fontSize:12,marginTop:4,fontWeight:'600'}}>{item.quantity}</Text>

      <TouchableOpacity onPress={() => {addItemToCart(item)}} style ={{alignItems: 'center', justifyContent: 'center', shadowRadius: 3.8, shadowOpacity:0.05,  width:30, height: 30, backgroundColor: 'white',borderColor:'lightgrey', position:'absolute', right:-6, top:-6, borderRadius: 6, borderWidth:0.3} } >
      <Entypo name="plus" size={24} color='#5c3ebc' />

      </TouchableOpacity>
      

        
        

    </TouchableOpacity>
    
  )
}

const mapDispatchToProps =(dispatch) => {
  return{
    addItemToCart:(product:Product) => 
    dispatch(actions.addToCart({quantity:1, product}))
  }
}

export default connect (null, mapDispatchToProps)(index)