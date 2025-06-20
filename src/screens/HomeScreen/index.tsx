import React from 'react'
import {View, Text, Image} from 'react-native'
import "./styles"
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import {ScrollView} from "react-native"

import BannerCarousel from "../../components/BannerCarousel"
import HeaderMain from "../../components/HeaderMain"
import CategoriesGetir from '../../../assets/categoriesGetir'
import MainCategories from "../../components/MainCategories"


function index() {
    return(


        <ScrollView stickyHeaderIndices={[0]} style = {{backgroundColor: '#f5f5f5'}}>

            <HeaderMain />
            
            <BannerCarousel />

            <MainCategories />

        </ScrollView>


        
    )
}

export default index