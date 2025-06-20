import React from "react";
import { Dimensions, Image, Text, View, TouchableOpacity } from "react-native";
import { Product } from "../../models";
import {connect} from "react-redux"
import * as actions from "../../redux/actions/cartActions"

const { width, height } = Dimensions.get("window");
type CartItemProps = {
  product: Product;
  quantity:number;
  removeFromCart: (product:Product) => void
};
function index({ product , quantity, removeFromCart}: CartItemProps) {
  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          width: width * 0.92,
          borderBottomWidth: 0.4,
          marginHorizontal: width * 0.04,
          borderBottomColor: "lightgrey",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: height * 0.13,
          paddingHorizontal: width * 0.04,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: height * 0.09, height: height * 0.09 }}
            source={{ uri: product.image }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                maxWidth: width * 0.45,
              }}
            >
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 4,
                color: "#848897",
                fontWeight: "600",
              }}
            >
              {product.quantity}
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 10,
                color: "#5d3ebd",
                fontWeight: "bold",
              }}
            >
              <Text>{"\u20ba"}</Text>
              {product.price}
            </Text>
            
          </View>
        </View>

        <View
          style={{
            shadowOpacity: 0.4,
            shadowColor: "grey",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: width * 0.23,
            borderColor: "lightgrey",
            borderWidth: 0.221,
            height: height * 0.036,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity onPress={() => removeFromCart(product)} style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ color: "#5d3ebd" }}>-</Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#5d3ebd",
              height: height * 0.036,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>
              {quantity}
            </Text>
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ color: "#5d3ebd" }}>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const mapDispatchToProps = (dispatch) => {
  return{
      removeFromCart: (product:Product) => 
      dispatch(actions.removeFromCart(product))
  }
}

export default connect(null, mapDispatchToProps)(index)
