import React, {useState} from 'react'
import {View,Text,Dimensions, TouchableOpacity} from "react-native"
import { ScrollView } from 'react-native-gesture-handler'

const {height, width} = Dimensions.get('window')

const TypeBox =({setCat, item, active} : {setCat:any, item:string, active:string}) => {

    return(

        <TouchableOpacity onPress={() => setCat(item)} style ={[{flexDirection:'row', alignItems:'center', paddingHorizontal:10, marginRight:12 , borderRadius:6, height: height*0.045}, item == active ? {backgroundColor:'#5c3ebc', color: 'white'}:{borderColor:'#f0eff7', borderWidth:1}]}>
            <Text style ={[{fontSize:12, fontWeight: '500' , color: '#7949f7'}, item == active && {color: 'white' }]}>
                {item}
            </Text>

        </TouchableOpacity>
    )

}
function index() {
    const [category, setCategory] = useState<String>("Birlikte İyi Gider")
  return (
      <ScrollView style = {{width: '100%', height: height* 0.072, flexDirection: 'row', paddingVertical: height*0.014, paddingHorizontal:12 , borderBottomColor:'lightgrey', borderBottomWidth:1, shadowOpacity:3, shadowRadius:4, backgroundColor:'white'}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
          {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu"].map((item) => (
              <TypeBox setCat= {setCategory}  item={item} active = {category}/>
          ))}

                
                
                
        
              

 
      </ScrollView>
  )
}

export default index