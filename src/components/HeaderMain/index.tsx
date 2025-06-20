import React from 'react'
import {ScrollView} from "react-native"
import HeaderMain from "../../components/HeaderMain"
import {View, Text, Image} from 'react-native'
import "./styles"
import styles from './styles'
import { AntDesign } from '@expo/vector-icons'
function index() {
    return(
    
    <View style={styles.headerMain}> 
        <View style={styles.headerOne}>
            <Image style={styles.image} source={{uri:"https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-4/256/home-icon.png"}}/>
            <View style={styles.headerOneView}>
                <Text style={{fontWeight:'600', fontSize:16}} > Home </Text>
                <Text style={{fontWeight:'500', fontSize:12, color: '#6E7480', marginLeft:6}}> Huzur Mh., Maslak Ayazağa Cd..</Text>

                <AntDesign name="right" size={21} color="black" />
            </View>

            <View style={styles.headerTwo}>
                <Text style={{fontSize:10, fontWeight:'bold', color:'#5D3EBD'}}>TVS</Text>
                <Text style={{fontSize:20, fontWeight:'bold', color:'#5D3EBD'}}>13
                    <Text style={{fontSize:16, fontWeight:'bold', color:'#5D3EBD', textAlign:'center'}}>dk</Text>
                    </Text>
            </View>
        </View>

    </View>
    
)
}


export default index