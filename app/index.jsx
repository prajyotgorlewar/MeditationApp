import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-end">
      <StatusBar style="light" />
      <Image
        className="absolute h-full w-full  bg-[#000a15]"
        source={require("../assets/images/welcome.png")}
      />

        <View className='bg-[#000a15c2] w-full pt-6'>
      <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center ">
          <Text style={{ fontSize: hp(3) }} className="font-bold text-center text-white  tracking-wide">
            Welcome to Your Meditation Journey
          </Text>
      </Animated.View>
        </View>
        <View className='bg-[#000a15c2] w-full pb-3'>
        <Animated.View entering={FadeInDown.delay(200).springify()} className="my-7">
        <TouchableOpacity
          onPress={() => router.push('home')}
          style={{ height: hp(7), width: wp(80) }}
          className="bg-blue-400 flex items-center justify-center mx-auto rounded-full "
        >
          <Text className="font-bold tracking-widest text-3xl">Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
        </View>

    </View>
  );
}

export default index

const styles = StyleSheet.create({

});
