import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import ImageSlider from '../components/ImageSlider';
import Meditate from '../components/Meditate';



const home = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-200 flex space-y-5 px-2" edges={['top']}>
      <StatusBar style='dark' />
      <View className="flex-row justify-between  items-center ">
        <View className="w-2/3">
          <Text 
            style={{fontSize:hp(3.5)}}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text 
            style={{fontSize:hp(3.5)}}
            className="font-bold tracking-wider text-orange-500"
          >
            MEDITATE
          </Text>
        </View>

        <View className="flex flex-row justify-between items-center space-y-2 px-2 w-1/3 " >
            <TouchableOpacity>
            <Image source={require("../assets/images/profile.png")}
               style={{height:50,width:50}}
              className="rounded-full "  
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <View className="bg-gray-600 p-1 rounded-full">
            <Ionicons name="notifications" size={40} color="white" />
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