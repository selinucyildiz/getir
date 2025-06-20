import React,{useEffect, useState} from "react"
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import {Dimensions, Image, Text, View} from 'react-native'
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import ProductDetailsScreen from "../screens/ProductDetailsScreen"
import { TouchableOpacity } from "react-native-gesture-handler"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation,getFocusedRouteNameFromRoute } from "@react-navigation/native"
import CartScreen from "../screens/CartScreen"
import {connect} from "react-redux"
import * as actions from "../redux/actions/cartActions"
import { Product } from "../models"


const Stack = createStackNavigator()

const {width, height} = Dimensions.get('window')


function MyStack({navigation, route,cartItems, clearCart}: {cartItems: {product:Product, quantity:number}[], clearCart:() =>void} ) {
    const tabHiddenRoutes =["ProductDetails", "CartScreen"];
    const [totalPrice, setTotalPrice] = useState<number>(0)


    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if(tabHiddenRoutes.includes(routeName)) {
            navigation.setOptions({tabBarStyle: {display:"none"}});

        } else {
            console.log("Aç", routeName);
            navigation.setOptions({tabBarStyle: { display:"true"}});
        }
    }, [navigation, route])


    const getProductsPrice =() => {
        var total = 0;

        cartItems.forEach(cartItem => {
            const price = ( total += cartItem.product.price);
            setTotalPrice(price)
        })
    }
    useEffect(() => {
        getProductsPrice()
    },[cartItems,navigation, route])

    return(
        <Stack.Navigator>

            


            <Stack.Screen
            name = "Home"
            component={HomeScreen}
            options = {{
                headerStyle: {backgroundColor: "#5c3ebc"},
                headerTitle: () => (
                    <Image
                    source={require("../../assets/getirlogo.png")}
                    style = {{width: 70, height: 30}}
                    />
                )
            }}

            />


            <Stack.Screen
            name = "CategoryDetails"
            component={CategoryFilterScreen}
            options = {{
                headerTintColor:'white',
                headerBackTitleVisible: false,
                headerStyle: {backgroundColor: "#5c3ebc"},
                headerTitle: () => (
                    <Text style = {{fontWeight: 'bold', fontSize : 15, color: 'white'}}>
                        Ürünler
                    </Text>

                ),

                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("CartScreen")} style={{width: width * 0.2, 
                    height:30, backgroundColor:'white', 
                    marginRight: width * 0.03, borderRadius:9 , flexDirection:'row', alignItems:'center', marginLeft: 6}}>
                        <Image style={{width:23, height:23,borderRadius:9}}
                        source={require("../../assets/cart.png")}/>
                        <View style={{flex:1, height:30,alignItems:'center', borderRadius :9, backgroundColor:'#f3effe', justifyContent: 'center'}} >
                            <Text style = {{color: '#5d3ebd', fontWeight:'bold', fontSize:12, justifyContent: 'center'}}>
                                {"\u20ba"}
                                <Text>{totalPrice.toFixed(2)}</Text>
                            </Text> 
                            

                        </View>

                    </TouchableOpacity>
                )
            }}

            />

            <Stack.Screen
            options={{
                headerBackTitleVisible:false,
                headerTintColor: 'white',
                headerStyle:{backgroundColor:"#5c3ebc"},

                headerLeft: ()=>(
                    <TouchableOpacity onPress = {() => navigation.goBack()}  style={{paddingLeft: 10}}>
                        <AntDesign name="close" size={24} color="white" />

                    </TouchableOpacity>
                ),
                headerTitle:() => (
                    <Text style={{fontWeight:'bold',color:'white', fontSize:15}}>
                        Ürün Detayı
                    </Text>
                ),
                headerRight: ()=>(
                    <TouchableOpacity  style={{paddingRight: 10}}>
                        <AntDesign name="heart" size={24} color='#32177a'/>
                        

                    </TouchableOpacity>
                )

            }}
            name="ProductDetails"
            component={ProductDetailsScreen}
            />

            
            

            

            <Stack.Screen
            options={{
                headerBackTitleVisible:false,
                headerTintColor: 'white',
                headerStyle:{backgroundColor:"#5c3ebc"},

                headerLeft: ()=>(
                    <TouchableOpacity onPress = {() => navigation.goBack()}  style={{paddingLeft: 10}}>
                        <AntDesign name="close" size={24} color="white" />

                    </TouchableOpacity>
                ),
                headerTitle:() => (
                    <Text style={{fontWeight:'bold',color:'white', fontSize:15}}>
                        Sepetim
                    </Text>
                ),
                headerRight: ()=>(
                    <TouchableOpacity onPress={() => clearCart()} style={{paddingRight: 10}}>
                        <Ionicons name="trash" size={24} color="white" />
                        

                    </TouchableOpacity>
                )

            }}
            name = "CartScreen"
            component = {CartScreen}
            />

            
            

            

        </Stack.Navigator>

    )
}

const mapStateToProps = (state) => {
    const{cartItems} = state;
    return{
        cartItems:cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        clearCart: ( ) => dispatch(actions.clearCart())
    }
}

function HomeNavigator({navigation,route, cartItems, clearCart}:{clearCart:() => void}){
    return <MyStack navigation= {navigation} route= {route} cartItems = {cartItems} clearCart={clearCart}/>
}

export default connect(mapStateToProps, mapDispatchToProps) (HomeNavigator)