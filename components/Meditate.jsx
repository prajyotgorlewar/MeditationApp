import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { meditates } from '../constants/meditate';
import Animated,{  FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
const Meditate = () => {

    const router=useRouter();

  return (
    <View style={{ marginHorizontal: 16 }}>
        <Text className="text-2xl text-center">MEDITATE</Text>
      <FlatList
        data={meditates}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: 'space-around',
        }}
        renderItem={({ item, index }) => (
          <Card item={item} index={index} router={router}/>
        )}
      />
    </View>
  );
};

const Card = ({ item, index ,router}) => {
  return (
    <Animated.View entering={FadeInDown.delay(250).springify()}  className="bg-gray-500 rounded-[1rem] p-2 " style={{ marginBottom: 16 }}>
      <TouchableOpacity
        onPress={()=>router.push({pathname:'/meditate',params:item})}
      >
        <Image className="rounded-md" source={item.image} style={{ width: 150, height: 150 }} />
        <Text className="text-white text-lg" style={{ textAlign: 'center', marginTop: 8 }}>{item.name}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Meditate;
