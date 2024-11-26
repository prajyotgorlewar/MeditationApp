import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import ImageSlider from '../components/ImageSlider';
import Meditate from '../components/Meditate';



const home = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#000a15] flex space-y-5 px-2" edges={['top']}>
      <StatusBar style='dark' />
      <View className="flex-row justify-between  items-center ">
        <View className="w-1/3 ">
          <Text 
            style={{fontSize:hp(3.5)}}
            className="font-bold tracking-wider text-center text-[#ffff]"
          >
            SOMA
          </Text>
        </View>

        <View className="flex flex-row justify-around items-center space-y-2 px-2 w-1/3 " >
            <TouchableOpacity>
            <FontAwesome name="user-circle-o" size={38} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
            <View className=" p-1 rounded-full">
            <Ionicons name="notifications" size={38} color="white" />
            </View>
            </TouchableOpacity>
        </View>
      </View>

      <View className="mt-5">
        <ImageSlider />
      </View>

      <View className="flex-1">
        <Meditate />

      </View>

    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({})