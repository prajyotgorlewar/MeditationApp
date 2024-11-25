import { View, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
const { height, width } = Dimensions.get('window');

export default function ImageSlider() {
  // Correct initialization of data with useState
  const [data] = useState([
    require('../assets/images/home1.png'),
    require('../assets/images/home2.png'),
    require('../assets/images/home3.png'),
    require('../assets/images/home4.png'),
    require('../assets/images/home5.png'),
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null); // Reference for FlatList

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % data.length;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true }); 
        return nextIndex;
      });
    }, 3000); 


    return () => clearInterval(intervalId);
  }, [data.length]);

  return (
    <View>
      <View
        style={{
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FlatList
          ref={flatListRef}
          data={data}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex(Math.floor(x / width));
          }}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: width - 50,
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity disabled={true} style={{
                  width: '90%',
                  height: '100%',
                  borderRadius: 10,
                }}>
                <Image
                  source={item}
                  style={{
                    width: '100%',
                    height: '100%', 
                    borderRadius: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
        />
        <View className="h-1 w-full bg-gray-600 mb-4">

        </View>
      </View>
    </View>
  );
}
