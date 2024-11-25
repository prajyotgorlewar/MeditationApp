import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const index = () => {
    const router = useRouter();
    return (
        <View className="flex-1 justify-end">
          <StatusBar style="light" />
          <Image
            className="absolute h-full w-full"
            source={require("../assets/images/welcome.png")}
          />
    

          <LinearGradient
            colors={['transparent', '#18181b']}
            style={{ width: wp(100), height: hp(30) }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.8 }}
            className="flex justify-end pb-12 space-y-8"

          >
            
            <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center ">
              <Text style={{ fontSize: hp(4) }} className="font-bold text-center text-white tracking-wide">
                Best <Text className="text-orange-500">Meditations</Text> For You
              </Text>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(200).springify()}  className="my-7">
              <TouchableOpacity
                onPress={()=>router.push('home')}
                style={{ height: hp(7), width: wp(80) }}
                className="bg-blue-400 flex items-center justify-center mx-auto rounded-full border-2 border-neutral-200"
              >
                <Text className="font-bold tracking-widest">Get Started</Text>
              </TouchableOpacity>
            </Animated.View>
          </LinearGradient>
        </View>
      );
}

export default index

const styles = StyleSheet.create({

});
