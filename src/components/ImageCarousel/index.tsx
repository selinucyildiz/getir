import React, {useState} from 'react'
import {FlatList, View, Image, Dimensions, StyleSheet} from 'react-native'

const {width, height} = Dimensions.get('window')
function index({images} : {images: string[]}) {
    const [activeIndex, setActiveIndex] = useState(0)

    const onViewRef = React.useRef((viewableItems) => {

        if(viewableItems.viewableItems.length >0) {
            setActiveIndex(viewableItems.viewableItems[0].index || 0)
        }
    })

    const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold:50})
    
  return (

    <View style ={{alignItems:'center', width : '100%', backgroundColor:'white', height: height * 0.25, paddingTop:25}}>
      <FlatList

          data={images}
          style={{width:width*0.5, height:height*0.2}}
          renderItem = {(item) => (
              <Image 
              source = {{uri:item.item}}
              style = {{width: width * 0.5, height:height*0.2,resizeMode:'stretch'}}
              />
          )}
          horizontal
          showsHorizontalScrollIndicator = {false}
          snapToInterval ={width*0.5}
          snapToAlignment = {"center"}
          decelerationRate= {"fast"}

          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged = {onViewRef.current}

          >

      </FlatList>

      <View>
          <View style={{flexDirection:'row', alignItems:'center', width:30, height:12, justifyContent:'space-around'}}>
              {images.map((image, index) => (
                  <View key = {index} style = {[styles.dot, {backgroundColor:activeIndex == index ? '#5d39c1' : 'grey'}]}/>

                 
              ))}
          </View>
      </View>

      </View>
  )
}

const styles = StyleSheet.create({
    dot:{
        width:8,
        height:8,
        borderRadius:20

    }

})

export default index