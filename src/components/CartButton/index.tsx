import React from 'react'
import {View, Text, Dimensions, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import * as actions from "../../redux/actions/cartActions"
import {Product } from "../../models"

const {width, height} = Dimensions.get('window')
type cartButtonType = {
    addItemToCart: (a:Product) => void 
        item:Product;
    
}


function index({item,addItemToCart}: cartButtonType ) {
  return (
      <TouchableOpacity onPress={() =>addItemToCart(item)} style={{
          width:'100%',
          height: height*0.1,
          position:'absolute',
          marginTop:40,
          bottom:0
      }}>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor:'#5d39c1', height: height*0.06, width:'90%', marginHorizontal:'6%', borderRadius:8}}>
          <Text style={{fontWeight:'bold',color:'white'}}>Sepete Ekle</Text>

          </View>
          
      </TouchableOpacity>
  )
}
const mapDispatchToProps =(dispatch) => {
    return{
        addItemToCart :(product:Product) =>
        dispatch(actions.addToCart({quantity:1, product}))
    }
}

export default connect(null, mapDispatchToProps) (index)